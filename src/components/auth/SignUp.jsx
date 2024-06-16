import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().trim().required('First name is required.'),
			lastName: Yup.string().trim().required('Last name is required.'),
			email: Yup.string().email('Invalid email address').required('Email is required.'),
			password: Yup.string().min(8, 'Password must be at least 8 characters long.').required('Password is required.'),
		}),
		onSubmit: values => {
			alert('Sign-up successful!');
			console.log(values);
		},
	});

	return (
		<div className='min-h-screen flex items-center justify-center bg-black'>
			<form
				onSubmit={formik.handleSubmit}
				className='w-full max-w-md p-8 rounded-lg bg-opacity-50'>
				<h2 className='text-white text-2xl font-bold mb-8 text-center'>REGISTER</h2>

				<div className='mb-4'>
					<label className='block text-white mb-2 text-sm'>First Name:</label>
					<Input
						type='text'
						radius='md'
						variant='flat'
						size='md'
						className='text-black'
						{...formik.getFieldProps('firstName')}
						helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
						helperColor='error'
						status={formik.touched.firstName && formik.errors.firstName ? 'error' : 'default'}
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-white mb-2 text-sm'>Last Name:</label>
					<Input
						type='text'
						radius='md'
						variant='flat'
						size='md'
						className='text-black'
						{...formik.getFieldProps('lastName')}
						helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
						helperColor='error'
						status={formik.touched.lastName && formik.errors.lastName ? 'error' : 'default'}
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-white mb-2 text-sm'>Email:</label>
					<Input
						type='email'
						description='Email must be valid.'
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

				<div className='mb-4'>
					<label className='block text-white mb-2 text-sm'>Password:</label>
					<Input
						type='password'
						description='Password must be at least 8 characters long.'
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
					Sign Up
				</Button>

				<div className='mt-4'>
					<Link
						to='/login'
						className='text-white font-bold text-sm mt-4 justify-center flex hover:text-primary'>
						Already have an account? Sign In!
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

export default SignUp;
