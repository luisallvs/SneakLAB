import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from '@nextui-org/react';

const ArticleModal = ({ isOpen, onOpenChange, article, setArticle, handleSave, isEditing }) => {
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className='flex flex-col gap-1'>{isEditing ? 'Edit Article' : 'Add New Article'}</ModalHeader>
						<ModalBody>
							{/* Input fields for article properties */}
							<Input
								fullWidth
								clearable
								bordered
								label='Title'
								value={article.title}
								onChange={e => setArticle({ ...article, title: e.target.value })}
							/>
							<Textarea
								fullWidth
								clearable
								bordered
								label='Description'
								value={article.description}
								onChange={e => setArticle({ ...article, description: e.target.value })}
							/>
							<Input
								fullWidth
								clearable
								bordered
								label='URL'
								value={article.url}
								onChange={e => setArticle({ ...article, url: e.target.value })}
							/>
							<Input
								fullWidth
								clearable
								bordered
								label='Image URL'
								value={article.urlToImage}
								onChange={e => setArticle({ ...article, urlToImage: e.target.value })}
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								color='danger'
								variant='light'
								onPress={onClose}>
								Close
							</Button>
							{/* Save button triggers handleSave function and closes modal */}
							<Button
								color='primary'
								className='text-white'
								onPress={() => handleSave(onClose)}>
								{isEditing ? 'Update Article' : 'Add Article'}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default ArticleModal;
