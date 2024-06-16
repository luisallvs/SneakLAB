import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../../assets/images/about/1.jpg';
import image2 from '../../assets/images/about/2.jpg';
import image3 from '../../assets/images/about/3.jpg';

/* Define animation variants for the motion components */
const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsDisplay = () => {
	/* Set up intersection observers for each section to trigger animations */
	const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<div className='min-h-screen bg-black text-white p-10'>
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* First Section */}
					<motion.div
						className='order-1'
						ref={ref1}
						initial='hidden'
						animate={inView1 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<Image
							src={image1}
							alt='Summer Shredding Crew'
							radius='lg'
							isBlurred
						/>
					</motion.div>
					<motion.div
						className='flex flex-col justify-center order-2 lg:order-1'
						ref={ref1}
						initial='hidden'
						animate={inView1 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<h2 className='text-3xl font-bold mb-4 uppercase'>How It Started</h2>
						<p className='mb-4'>
							This website was created as part of a project for an educational purpose. It was made by me, Luis Alves, as part of my final project of the Front-End course at FLAG. This project helped
							me a lot in my journey as a developer. I lerned how to build a website with React making use of the various libraries available in the React ecosystem.
						</p>
					</motion.div>

					{/* Second Section */}
					<motion.div
						className='flex flex-col justify-center order-4 lg:order-2'
						ref={ref2}
						initial='hidden'
						animate={inView2 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<h2 className='text-3xl font-bold mb-4 uppercase'>My Passion</h2>
						<p className='mb-4'>
							My passion for sneakers started young, fueled by the iconic designs and cultural impact of brands like Nike and Jordan. Every pair tells a story, from the classic Nike Air Max to the
							legendary Air Jordan retros. The thrill of unboxing a new release, the intricate details in each design, and the community of fellow sneaker enthusiasts all contribute to my love for
							sneakers. That is why I decided to create this website to showcase my passion for the sneaker industry.
						</p>
					</motion.div>
					<motion.div
						className='order-3 lg:order-3'
						ref={ref2}
						initial='hidden'
						animate={inView2 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<Image
							src={image2}
							alt='Product Building'
							radius='lg'
							isBlurred
						/>
					</motion.div>

					{/* Third Section */}
					<motion.div
						className='order-5'
						ref={ref3}
						initial='hidden'
						animate={inView3 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<Image
							src={image3}
							alt='Alphalete Family'
							radius='lg'
							isBlurred
						/>
					</motion.div>
					<motion.div
						className='flex flex-col justify-center order-6'
						ref={ref3}
						initial='hidden'
						animate={inView3 ? 'visible' : 'hidden'}
						variants={sectionVariants}>
						<h2 className='text-3xl font-bold mb-4 uppercase'>my goals</h2>
						<p className='mb-4'>
							After creating my React website, I aim to expand my skills and develop more complex and dynamic web applications. I hope to work on exciting projects professionally and continually
							refine my expertise in front-end development. Ultimately, I aspire to build innovative, user-friendly websites that make a positive impact and advance my career in web development.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsDisplay;
