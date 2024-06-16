import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import FilterAccordion from './FilterAccordion';

const PhoneFilterModal = ({ isModalOpen, toggleModal, filters, onColorChange, onSizeChange, onGenderChange, onPriceChange, onClearFilters }) => {
	return (
		<Modal
			isOpen={isModalOpen}
			onClose={toggleModal}
			backdrop='blur'>
			<ModalContent className='text-white bg-black'>
				<ModalHeader>
					<h3 className='text-lg font-bold '>Filters</h3>
				</ModalHeader>
				<ModalBody>
					<FilterAccordion
						filters={filters}
						onColorChange={onColorChange}
						onSizeChange={onSizeChange}
						onGenderChange={onGenderChange}
						onPriceChange={onPriceChange}
					/>
				</ModalBody>
				<ModalFooter>
					{/* Button to clear all filters */}
					<Button
						onPress={onClearFilters}
						color='primary'
						className='text-white mt-2'
						fullWidth>
						Clear Filters
					</Button>
					{/* Button to close the modal */}
					<Button
						onPress={toggleModal}
						color='primary'
						className='text-white mt-2'
						fullWidth>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PhoneFilterModal;
