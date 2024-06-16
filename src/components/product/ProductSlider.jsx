import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import sneakersData from '../../data/Sneakers.json';
import SneakerCard from '../product/SneakerCard';

export default function App() {
	const containerRef = useRef(); // Reference for the container element
	const [constraints, setConstraints] = useState({ left: 0, right: 0 }); // State to manage drag constraints
	const [isDragging, setIsDragging] = useState(false); // State to track if dragging is occurring
	const navigate = useNavigate(); // Hook for navigation

	useEffect(() => {
		const updateConstraints = () => {
			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth; // Width of the container
				const contentWidth = containerRef.current.scrollWidth; // Total width of the content
				setConstraints({
					left: -(contentWidth - containerWidth), // Set left constraint for dragging
					right: 0, // Right constraint for dragging
				});
			}
		};

		updateConstraints(); // Initial update of constraints
		window.addEventListener('resize', updateConstraints); // Update constraints on window resize

		return () => {
			window.removeEventListener('resize', updateConstraints); // Cleanup event listener on component unmount
		};
	}, []);

	const handleBrowseAllClick = () => {
		navigate('/products'); // Navigate to the products page
	};

	return (
		<div className='overflow-x-hidden p-4 sm:p-8 lg:p-20 scrollbar-hide relative'>
			<div className='flex flex-col pb-5 sm:flex-row sm:justify-between sm:items-center'>
				<div className='mb-4 sm:mb-0'>
					<h3 className='text-lg font-bold text-white'>Sneakers</h3>
					<Divider className='my-2 bg-primary w-20' />
					<h3 className='text-3xl font-bold text-white'>Newest Products</h3>
				</div>
				<Button
					variant='shadow'
					className='mr-0 sm:mr-10 text-white'
					color='primary'
					onClick={handleBrowseAllClick}>
					Browse All
				</Button>
			</div>
			<motion.div
				ref={containerRef}
				className='flex gap-4 sm:gap-6 lg:gap-8 cursor-grab'
				drag='x' // Enable horizontal dragging
				dragConstraints={constraints} // Apply drag constraints
				dragElastic={0.1}
				onDragStart={() => setIsDragging(true)} // Set dragging state to true on drag start
				onDragEnd={() => setIsDragging(false)} // Set dragging state to false on drag end
			>
				{sneakersData.sneakers.slice(0, 20).map(sneaker => (
					<SneakerCard
						key={sneaker.id}
						sneaker={sneaker}
						size='fifth' // Set the size of the SneakerCard
						onCardClick={() => {
							if (!isDragging) {
								navigate(`/product/${sneaker.id}`); // Navigate to the product page only if not dragging
							}
						}}
					/>
				))}
			</motion.div>
		</div>
	);
}
