import { useParams } from 'react-router-dom';
import { Button, Image } from '@nextui-org/react';
import { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import sneakersData from '../data/Sneakers.json';

const ProductPage = () => {
	const { id } = useParams();
	const { addToCart } = useContext(CartContext);

	// Convert ID to an integer
	const sneakerId = parseInt(id, 10);
	const sneaker = sneakersData.sneakers.find(s => s.id === sneakerId);

	if (!sneaker) {
		console.log('Sneaker not found:', sneakersData.sneakers, sneakerId); // Debugging log
		return <div>Product not found</div>;
	}

	return (
		<div className='container mx-auto p-4 md:p-8'>
			<h2 className='text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-white'>{sneaker.name}</h2>
			<div className='flex flex-col md:flex-row'>
				<div className='w-full md:w-1/2'>
					<Image
						src={sneaker.main_picture_url}
						alt={sneaker.name}
						className='w-full h-auto mb-4 md:mb-8'
					/>
				</div>
				<div className='w-full md:w-1/2 md:pl-4 lg:pl-8'>
					<p className='text-sm md:text-lg text-white mb-2 md:mb-4'>{sneaker.story_html}</p>
					<p className='text-lg md:text-2xl text-white mb-2 md:mb-4'>€{(sneaker.retail_price_cents / 100).toFixed(2)}</p>
					<Button
						variant='shadow'
						className='text-sm md:text-md text-black bg-white mt-2 py-2 md:group-hover:text-white md:group-hover:bg-primary'
						onClick={() => addToCart(sneaker)}>
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
