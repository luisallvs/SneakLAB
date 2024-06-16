import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, useDisclosure } from '@nextui-org/react';
import ArticleModal from './ArticleModal';
import ArticleCard from './ArticleCard';

const News = () => {
	const [articles, setArticles] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 24; // Number of articles per page
	const { isOpen, onOpenChange } = useDisclosure();
	const [newArticle, setNewArticle] = useState({ title: '', description: '', url: '', urlToImage: '' });
	const [editArticle, setEditArticle] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			const response = await axios.get('https://newsapi.org/v2/everything?q=sneakers&apiKey=c85f94059ab84efba0eebaee3aa3bdd8');
			setArticles(response.data.articles);
		};

		fetchNews();
	}, []);

	// Calculate the range of articles for the current page
	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

	// Calculate the total number of pages
	const totalPages = Math.ceil(articles.length / articlesPerPage);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleAddArticle = onClose => {
		if (editArticle) {
			const updatedArticles = articles.map(article => (article.title === editArticle.title ? newArticle : article));
			setArticles(updatedArticles);
			setEditArticle(null);
		} else {
			setArticles([newArticle, ...articles]);
		}
		setNewArticle({ title: '', description: '', url: '', urlToImage: '' });
		onOpenChange(false);
		onClose();
	};

	const handleEdit = article => {
		setNewArticle(article);
		setEditArticle(article);
		onOpenChange(true);
	};

	const handleDelete = articleToDelete => {
		setArticles(articles.filter(article => article !== articleToDelete));
	};

	const handleOpenModal = () => {
		setNewArticle({ title: '', description: '', url: '', urlToImage: '' });
		setEditArticle(null);
		onOpenChange(true);
	};

	return (
		<div className='container mx-auto p-8'>
			<h2 className='text-4xl font-bold mb-8 text-white'>Our Blog</h2>

			<Button
				onPress={handleOpenModal}
				color='primary'
				variant='solid'
				className='mb-8'>
				Add Article
			</Button>
			<ArticleModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				article={newArticle}
				setArticle={setNewArticle}
				handleSave={handleAddArticle}
				isEditing={!!editArticle}
			/>
			<div className='columns-1 sm:columns-2 lg:columns-3 gap-6'>
				{currentArticles.map((article, index) => (
					<ArticleCard
						key={index}
						article={article}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				<Button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className='mx-2'
					color='primary'
					variant='shadow'>
					Previous
				</Button>
				<Button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
					className='mx-2'
					color='primary'
					variant='shadow'>
					Next
				</Button>
			</div>
		</div>
	);
};

export default News;
