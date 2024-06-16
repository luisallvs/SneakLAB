import { useState } from 'react';
import { Divider, Button } from '@nextui-org/react';
import FilterAccordion from './FilterAccordion';
import PhoneFilterModal from './PhoneFilterModal';

const Filter = ({ filters, onColorChange, onSizeChange, onGenderChange, onPriceChange, onClearFilters }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	return (
		<>
			{/* Sidebar filter section for desktop view */}
			<div className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-screen overflow-y-auto sticky top-16 z-10 hidden md:block'>
				<h3 className='text-lg font-bold text-white'>Filters</h3>
				<Divider className='my-2 bg-white' />
				<FilterAccordion
					filters={filters}
					onColorChange={onColorChange}
					onSizeChange={onSizeChange}
					onGenderChange={onGenderChange}
					onPriceChange={onPriceChange}
				/>
				<Button
					onPress={onClearFilters}
					color='primary'
					className='text-white mt-2'
					fullWidth>
					Clear Filters
				</Button>
			</div>
			{/* Button to open filters modal on mobile view */}
			<div className='block md:hidden'>
				<Button
					onPress={toggleModal}
					color='primary'
					className='text-white mt-2'
					fullWidth>
					Open Filters
				</Button>
				<PhoneFilterModal
					isModalOpen={isModalOpen}
					toggleModal={toggleModal}
					filters={filters}
					onColorChange={onColorChange}
					onSizeChange={onSizeChange}
					onGenderChange={onGenderChange}
					onPriceChange={onPriceChange}
					onClearFilters={onClearFilters}
				/>
			</div>
		</>
	);
};

export default Filter;
