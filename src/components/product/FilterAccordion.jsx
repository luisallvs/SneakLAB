import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Button, Slider } from '@nextui-org/react';
import SneakersData from '../../data/Sneakers.json';

const FilterAccordion = ({ filters, onColorChange, onSizeChange, onGenderChange, onPriceChange }) => {
	// Extract unique values from the sneakers data
	const colors = Array.from(new Set(SneakersData.sneakers.map(sneaker => sneaker.color)));
	const sizes = Array.from(new Set(SneakersData.sneakers.flatMap(sneaker => sneaker.size_range)))
		.sort((a, b) => a - b)
		.filter(size => size >= 6 && size <= 10); // Filter sizes from 6 to 10
	const genders = Array.from(new Set(SneakersData.sneakers.flatMap(sneaker => sneaker.gender)));

	const handleColorClick = color => {
		onColorChange(filters.color === color ? '' : color);
	};

	return (
		<Accordion
			className='text-black bg-transparent shadow-2xl scrollbar-hide'
			selectionMode='multiple'
			variant='shadow'>
			{/* Color filter section */}
			<AccordionItem title='Color'>
				<div className='mb-4'>
					<div className='flex flex-wrap gap-2'>
						{colors.map((color, index) => (
							<Button
								key={index}
								auto
								size='sm'
								radius='lg'
								onPress={() => handleColorClick(color)}
								style={{ backgroundColor: color }}
								className={`h-8 w-8 ${filters.color === color ? 'border-4 border-white' : ''}`}
							/>
						))}
					</div>
				</div>
			</AccordionItem>
			{/* Gender filter section */}
			<AccordionItem
				title='Gender'
				className='text-white'>
				<div className='mb-4'>
					<div className='flex flex-wrap gap-2'>
						{genders.map((gender, index) => (
							<Button
								key={index}
								auto
								onPress={() => onGenderChange(gender)}
								className={`${filters.gender === gender ? 'border-2 border-primary' : ''}`}>
								{gender}
							</Button>
						))}
					</div>
				</div>
			</AccordionItem>
			{/* Size filter section */}
			<AccordionItem
				title='Size'
				className='text-white no-scrollbar'>
				<div className='mb-4'>
					<div className='flex flex-wrap gap-2'>
						{sizes.map((size, index) => (
							<Button
								key={index}
								auto
								onPress={() => onSizeChange(size.toString())}
								className={`${filters.size === size.toString() ? 'border-2 border-primary' : ''}`}>
								{size.toString()}
							</Button>
						))}
					</div>
				</div>
			</AccordionItem>
			{/* Price range filter section */}
			<AccordionItem
				title='Price Range'
				className='text-white'>
				<div className='mb-4'>
					<Slider
						label='Price Range'
						step={5}
						minValue={0}
						maxValue={1000}
						value={[filters.price.min, filters.price.max]}
						onChange={value => onPriceChange({ min: value[0], max: value[1] })}
						formatOptions={{ style: 'currency', currency: 'EUR' }}
						color='primary'
						showTooltip
						className='text-white'
					/>
				</div>
			</AccordionItem>
		</Accordion>
	);
};

export default FilterAccordion;
