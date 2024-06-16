import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';

const BentoCard = ({ title, subtitle, imageSrc, footerText, buttonText, cardClass, headerClass, footerClass, headerTextColor }) => {
	return (
		<Card className={cardClass}>
			<CardHeader className={headerClass}>
				<p className={`text-large ${headerTextColor} uppercase font-bold`}>{subtitle}</p>
				<h4 className={`${headerTextColor} font-medium text-2xl`}>{title}</h4>
			</CardHeader>
			<Image
				isZoomed
				removeWrapper
				alt='Card background'
				className='z-0 w-full h-full object-cover'
				src={imageSrc}
			/>
			<CardFooter className={footerClass}>
				<div>
					<p className='text-white text-large'>{footerText}</p>
				</div>
				<Button
					variant='shadow'
					className='text-tiny text-white'
					color='primary'
					radius='full'
					size='md'>
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	);
};

export default BentoCard;
