import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Email is required.'),
			password: Yup.string().min(8, 'Password must be at least 8 characters long.').required('Password is required.'),
		}),
		onSubmit: values => {
			alert('Login successful!');
			console.log(values);
		},
	});

	return (
		<div className='min-h-screen flex items-center justify-center bg-black'>
			<form
				onSubmit={formik.handleSubmit}
				className='w-full max-w-md p-8 rounded-lg bg-opacity-50'>
				<h2 className='text-white text-2xl font-bold mb-8 text-center'>LOG INTO MY ACCOUNT</h2>

				<div className='relative mb-4'>
					<label className='block text-white mb-2 text-sm'>Email:</label>
					<Input
						type='email'
						radius='md'
						variant='flat'
						size='md'
						className='text-black'
						{...formik.getFieldProps('email')}
						helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
						helperColor='error'
						status={formik.touched.email && formik.errors.email ? 'error' : 'default'}
					/>
				</div>

				<div className='relative mb-4'>
					<label className='block text-white mb-2 text-sm'>Password:</label>
					<Input
						type='password'
						radius='md'
						variant='flat'
						size='md'
						className='text-black'
						{...formik.getFieldProps('password')}
						helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
						helperColor='error'
						status={formik.touched.password && formik.errors.password ? 'error' : 'default'}
					/>
				</div>

				<Button
					type='submit'
					className='w-full bg-white hover:bg-primary hover:text-white text-black font-bold py-3 rounded-lg uppercase'>
					Login
				</Button>

				<div className='mt-4'>
					<Link
						to='/forgot-password'
						className='text-white font-bold text-sm mt-4 justify-center flex hover:text-primary'>
						Forgot Password?
					</Link>
					<Link
						to='/'
						className='text-white font-bold text-sm mt-4 justify-center flex hover:text-primary'>
						Return to Store
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
