import BentoCard from './BentoCard';

export default function App() {
	const cardData = [
		{
			title: 'Browse our collection of Dunks',
			subtitle: 'Any colorway, any style',
			imageSrc: '/src/assets/images/bento/4.jpg',
			footerText: 'Browse our new collection',
			buttonText: 'Buy Now',
			cardClass: 'col-span-12 sm:col-span-6 row-span-6',
			headerClass: 'absolute z-10 top-1 flex-col !items-start text-white drop-shadow-xl',
			footerClass: 'absolute bg-black/40 bottom-0 z-10 justify-between',
		},
		{
			title: 'Air Jordan 1 Travis Scott Retro',
			subtitle: 'The peak of sneakers',
			imageSrc: '/src/assets/images/bento/5.jpg',
			footerText: 'Available soon',
			buttonText: 'Notify Me',
			cardClass: 'w-full h-[500px] col-span-12 sm:col-span-6 row-span-3',
			headerClass: 'absolute z-10 top-1 flex-col items-start text-white drop-shadow-xl',
			footerClass: 'absolute bg-white/30 bottom-0 z-10 justify-between',
		},
		{
			title: 'Air Jordan 4 x Off-White Sail',
			subtitle: 'The newest collaboration',
			imageSrc: '/src/assets/images/bento/6.jpg',
			footerText: 'Get them now on our store',
			buttonText: 'Buy Now',
			cardClass: 'w-full h-[500px] col-span-12 sm:col-span-6 row-span-3',
			headerClass: 'absolute z-10 top-1 flex-col items-start text-white drop-shadow-xl',
			footerClass: 'absolute bg-black/40 bottom-0 z-10 justify-between',
		},
	];

	return (
		<div className='max-w-[1000px] gap-2 grid grid-cols-12 grid-rows-6 px-8 mx-auto'>
			{cardData.map((card, index) => (
				<BentoCard
					key={index}
					title={card.title}
					subtitle={card.subtitle}
					imageSrc={card.imageSrc}
					footerText={card.footerText}
					buttonText={card.buttonText}
					cardClass={card.cardClass}
					headerClass={card.headerClass}
					footerClass={card.footerClass}
					headerTextColor={card.headerTextColor}
				/>
			))}
		</div>
	);
}
