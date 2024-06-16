import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='text-white/75 lg:text-left'>
			<div className='flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between'>
				<div className='me-12 hidden lg:block'>
					<span>Get connected with us on social networks:</span>
				</div>
				<div className='flex justify-center'>
					<a
						href='https://www.facebook.com/LuisAlvs21'
						className='me-6 text-white'>
						<FaFacebookF className='h-4 w-4' />
					</a>
					<a
						href='https://x.com/luisallvs'
						className='me-6 text-white'>
						<FaTwitter className='h-4 w-4' />
					</a>
					<a
						href='https://google.com'
						className='me-6 text-white'>
						<FaGoogle className='h-4 w-4' />
					</a>
					<a
						href='https://www.instagram.com/luisallvs/'
						className='me-6 text-white'>
						<FaInstagram className='h-4 w-4' />
					</a>
					<a
						href='https://www.linkedin.com/in/luisallvs/'
						className='me-6 text-white'>
						<FaLinkedinIn className='h-4 w-4' />
					</a>
					<a
						href='https://github.com/luisallvs'
						className='me-6 text-white'>
						<FaGithub className='h-4 w-4' />
					</a>
				</div>
			</div>

			<div className='mx-6 py-10 text-center md:text-left'>
				<div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
							<FaHome className='me-3 h-4 w-4' />
							SneakLAB
						</h6>
						<p>This website is created for educational purposes only. I hope you enjoy it as much as I enjoyed making it!</p>
					</div>

					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>Products</h6>
						<p className='mb-4'>
							<Link to='/products'>Jordans</Link>
						</p>
						<p className='mb-4'>
							<Link to='/products'>Yeezy</Link>
						</p>
						<p className='mb-4'>
							<Link to='/products'>Nike</Link>
						</p>
						<p>
							<Link to='/products'>Adidas</Link>
						</p>
					</div>

					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>Useful links</h6>
						<p className='mb-4'>
							<Link to='/error'>Shipping</Link>
						</p>
						<p className='mb-4'>
							<Link to='/error'>Privacy</Link>
						</p>
						<p className='mb-4'>
							<Link to='/error'>Orders</Link>
						</p>
						<p>
							<Link to='/error'>Help</Link>
						</p>
					</div>

					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>Contact</h6>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<FaHome className='me-3 h-5 w-5' />
							Guimarães, Portugal
						</p>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<FaEnvelope className='me-3 h-5 w-5' />
							luisvsc1999@gmail.com
						</p>
						<p className='mb-4 flex items-center justify-center md:justify-start'>
							<FaPhone className='me-3 h-5 w-5' />+ 351 919 919 919
						</p>
					</div>
				</div>
			</div>

			<div className='bg-black/5 p-6 text-center'>
				<span>© 2024 Copyright: </span>
				<a
					className='font-semibold'
					href='https://www.linkedin.com/in/luisallvs/'>
					Luis Alves
				</a>
			</div>
		</footer>
	);
};

export default Footer;
