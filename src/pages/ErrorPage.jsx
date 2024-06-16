import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-black text-white'>
			<h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
			<p className='mb-4'>Sorry, but I think you're lost.</p>
			<Link
				to='/'
				className='text-primary text-2xl font-bold hover:text-white'>
				Go Home
			</Link>
		</div>
	);
};

export default ErrorPage;
