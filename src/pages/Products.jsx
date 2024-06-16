import { useState } from 'react';
import { Divider, Button } from '@nextui-org/react';
import SneakersData from '../data/Sneakers.json';
import SneakerCard from '../components/product/SneakerCard';
import Filter from '../components/product/Filter';
import PhoneFilterModal from '../components/product/PhoneFilterModal';

export default function Products() {
	// State to manage the filter values
	const [filters, setFilters] = useState({
		color: '',
		size: '',
		gender: '',
		price: { min: 0, max: 1000 },
	});

	// State to manage the modal visibility
	const [isModalOpen, setIsModalOpen] = useState(false);

	// State to manage the current page in pagination
	const [currentPage, setCurrentPage] = useState(1);

	// Number of items to show per page
	const itemsPerPage = 16;

	// Function to toggle the modal visibility
	const toggleModal = () => setIsModalOpen(!isModalOpen);

	// Handlers to update the filters
	const handleColorChange = value => {
		setFilters({ ...filters, color: value });
	};

	const handleSizeChange = value => {
		setFilters({ ...filters, size: value });
	};

	const handleGenderChange = value => {
		setFilters({ ...filters, gender: value });
	};

	const handlePriceChange = value => {
		setFilters({ ...filters, price: value });
	};

	// Handler to clear all filters
	const handleClearFilters = () => {
		setFilters({ color: '', size: '', gender: '', price: { min: 0, max: 1000 } });
	};

	// Filter the sneakers based on the current filter values
	const filteredSneakers = SneakersData.sneakers.filter(sneaker => {
		const matchesColor = filters.color ? sneaker.color.toLowerCase() === filters.color.toLowerCase() : true;
		const matchesSize = filters.size ? sneaker.size_range.includes(parseFloat(filters.size)) : true;
		const matchesGender = filters.gender ? sneaker.gender.includes(filters.gender) : true;
		const matchesPrice = sneaker.retail_price_cents / 100 >= filters.price.min && sneaker.retail_price_cents / 100 <= filters.price.max;

		return matchesColor && matchesSize && matchesGender && matchesPrice;
	});

	// Calculate the total number of pages for pagination
	const totalPages = Math.ceil(filteredSneakers.length / itemsPerPage);

	// Get the sneakers for the current page
	const currentSneakers = filteredSneakers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	// Handler to change the page
	const handlePageChange = page => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className='flex flex-col md:flex-row'>
			{/* Filter section for desktop view */}
			<div className='hidden md:block w-full md:w-1/4 p-4 md:sticky'>
				<Filter
					filters={filters}
					onColorChange={handleColorChange}
					onSizeChange={handleSizeChange}
					onGenderChange={handleGenderChange}
					onPriceChange={handlePriceChange}
					onClearFilters={handleClearFilters}
				/>
			</div>

			{/* Products section */}
			<div className='w-full md:w-3/4 p-4'>
				<div className='flex flex-col pb-5 sm:flex-row sm:justify-between sm:items-center'>
					<div className='mb-4 sm:mb-0'>
						<h3 className='text-lg font-bold text-white'>Sneakers</h3>
						<Divider className='my-2 bg-primary w-20' />
						<h3 className='text-3xl font-bold text-white'>Our Collection</h3>
					</div>
				</div>

				{/* Button to open filters modal on mobile */}
				<div className='block md:hidden mb-4'>
					<Button
						onPress={toggleModal}
						color='primary'
						className='text-white'
						fullWidth>
						Open Filters
					</Button>
				</div>

				{/* Grid to display the sneakers */}
				<div className='grid m-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
					{currentSneakers.map(sneaker => (
						<SneakerCard
							key={sneaker.id}
							sneaker={sneaker}
							size='full'
						/>
					))}
				</div>

				{/* Pagination controls */}
				<div className='flex justify-center my-6'>
					{Array.from({ length: totalPages }, (_, index) => (
						<Button
							key={index}
							onPress={() => handlePageChange(index + 1)}
							flat
							auto
							className={`mx-1 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'} py-2 px-4`}>
							{index + 1}
						</Button>
					))}
				</div>
			</div>

			{/* Filter modal for mobile view */}
			<PhoneFilterModal
				isModalOpen={isModalOpen}
				toggleModal={toggleModal}
				filters={filters}
				onColorChange={handleColorChange}
				onSizeChange={handleSizeChange}
				onGenderChange={handleGenderChange}
				onPriceChange={handlePriceChange}
				onClearFilters={handleClearFilters}
			/>
		</div>
	);
}
