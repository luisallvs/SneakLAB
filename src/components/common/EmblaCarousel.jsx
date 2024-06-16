import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@nextui-org/react';

import sneakersData from '../../data/Sneakers.json';

export function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	const { carousel_images } = sneakersData;

	return (
		<div
			className='embla overflow-hidden mx-auto max-w-screen-lg rounded-lg mt-5'
			ref={emblaRef}>
			<div className='embla__container flex flex-row'>
				{carousel_images.map(image => (
					<div
						key={image.id}
						className='embla__slide flex-none w-full min-w-0 relative'>
						<img
							src={image.image_url}
							alt={image.title}
							className='w-full h-full object-cover rounded-lg opacity-70'
						/>
						<div className='absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10'>
							<h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold'>{image.title}</h3>
							<p className='text-sm sm:text-md md:text-lg lg:text-xl text-white py-2 sm:py-3 md:py-4'>{image.description}</p>
							<Button
								color='primary'
								variant='shadow'
								className='text-white'>
								Buy Now
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default EmblaCarousel;
