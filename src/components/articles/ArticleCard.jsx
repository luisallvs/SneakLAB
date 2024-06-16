import { Card, CardBody, CardFooter, Button, Image } from '@nextui-org/react';

const ArticleCard = ({ article, handleEdit, handleDelete }) => {
	return (
		<Card className='mb-6 bg-bone text-black rounded-lg shadow-md overflow-hidden break-inside-avoid'>
			{article.urlToImage && (
				<div className='w-full overflow-hidden'>
					<Image
						src={article.urlToImage}
						alt={article.title}
						objectFit='cover'
						className='w-full h-full object-cover rounded-lg'
					/>
				</div>
			)}
			<CardBody className='p-6'>
				<h3 className='text-2xl font-bold mb-4'>{article.title}</h3>
				<p className='text-gray-700'>{article.description}</p>
			</CardBody>
			<CardFooter className='p-6 flex justify-between items-center'>
				<Button
					as='a'
					href={article.url}
					target='_blank'
					rel='noopener noreferrer'
					variant='solid'
					color='primary'
					className='text-white mb-2'>
					Read More
				</Button>
				<Button
					color='warning'
					className='text-white mb-2'
					onPress={() => handleEdit(article)}>
					Edit
				</Button>
				<Button
					color='danger'
					className='text-white mb-2'
					onPress={() => handleDelete(article)}>
					Delete
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ArticleCard;
