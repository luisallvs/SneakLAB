import { useContext } from 'react';
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const SneakerCard = ({ sneaker, size = 'full', onCardClick }) => {
	const story = sneaker.story_html ? sneaker.story_html : ''; // Retrieve the story, default to an empty string if not available
	const { addToCart } = useContext(CartContext); // Access the addToCart function from the CartContext

	// Define width classes for different sizes
	const widthClasses = {
		full: 'w-full',
		half: 'w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4',
		third: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
		quarter: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
		fifth: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
		sixth: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6',
		seventh: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/7',
		eighth: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/8',
	};

	const handleAddToCart = e => {
		e.stopPropagation(); // Prevent the click from propagating to the card
		addToCart(sneaker); // Add sneaker to cart
	};

	return (
		<Card
			color='primary'
			shadow='sm'
			key={sneaker.id}
			isPressable
			isHoverable
			onClick={onCardClick}
			className={`bg-dark shadow-xl flex-shrink-0 ${widthClasses[size]} group`}>
			{' '}
			{/* Apply dynamic width classes */}
			<CardBody className='overflow-visible p-4'>
				<Image
					src={sneaker.main_picture_url}
					radius='lg'
					isBlurred
					width='100%'
					alt={sneaker.name}
					className='w-full object-cover aspect-square -mt-3'
					draggable='false'
				/>
				<div className='text-left -my-5'>
					<b className='text-xl text-white lg:pb-2 group-hover:text-primary'>{sneaker.name}</b>
					<p className='text-sm text-white mt-4 group-hover:text-primary'>{story.length > 100 ? `${story.slice(0, 100)}...` : story}</p> {/* Display truncated story */}
				</div>
			</CardBody>
			<CardFooter className='flex flex-col justify-between w-full p-4'>
				<div className='flex flex-col justify-between w-full mt-2 text-left'>
					<p className='text-lg text-white font-bold mb-2 -mt-2 group-hover:text-primary'>€{(sneaker.retail_price_cents / 100).toFixed(2)}</p>
					<Button
						variant='shadow'
						className='text-md text-black bg-white mt-2 py-2 group-hover:text-white group-hover:bg-primary'
						onClick={handleAddToCart}>
						Add to cart
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default SneakerCard;
