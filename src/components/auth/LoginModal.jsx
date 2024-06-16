import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onOpenChange }) => {
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop='blur'
			placement='top-center'>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className='flex flex-col gap-1'>Log in</ModalHeader>
						<ModalBody>
							<Input
								autoFocus
								label='Email'
								placeholder='Enter your email'
								variant='bordered'
							/>
							<Input
								label='Password'
								placeholder='Enter your password'
								type='password'
								variant='bordered'
							/>
							<div className='flex py-2 px-1 justify-between'>
								<Checkbox classNames={{ label: 'text-small text-black' }}>Remember me</Checkbox>
								<Link
									color='primary'
									to='#'
									size='sm'>
									Forgot password?
								</Link>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color='secondary'
								variant='ghost'
								className='text-black'
								onPress={onClose}>
								Close
							</Button>
							<Button
								variant='shadow'
								color='primary'
								className='text-white'
								onPress={onClose}>
								Sign in
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
