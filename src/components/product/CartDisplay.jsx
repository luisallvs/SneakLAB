import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Image, Input, Divider } from '@nextui-org/react';
import { FaTrashAlt } from 'react-icons/fa';

const CartDisplay = () => {
	const { cartItems, addToCart, subtractFromCart, removeFromCart } = useContext(CartContext); // Access cart context

	const totalPrice = cartItems.reduce((acc, item) => acc + (item.retail_price_cents / 100) * item.quantity, 0); // Calculate total price of items in the cart

	return (
		<div className='container mx-auto p-4 min-h-screen bg-black text-white'>
			<h1 className='text-3xl font-bold mb-8'>Your Bag</h1>
			<div className='flex flex-col lg:flex-row'>
				<div className='w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
					{cartItems.length === 0 ? (
						<p>
							Your cart is empty.{' '}
							<Link
								to='/products'
								className='text-primary hover:underline'>
								Continue shopping
							</Link>
							.
						</p>
					) : (
						cartItems.map((item, index) => (
							<Card
								key={index}
								className='bg-transparent border-2 border-white text-white'>
								<CardBody className='flex flex-col items-start p-4'>
									<Image
										src={item.main_picture_url}
										alt={item.name}
										width={100}
										height={100}
										className='object-cover mb-4'
									/>
									<div className='flex-1'>
										<h2 className='text-xl font-bold'>{item.name}</h2>
										<p className='text-lg font-bold mt-2'>€{(item.retail_price_cents / 100).toFixed(2)}</p>
									</div>
									<Divider className='bg-white mt-4' />
									<div className='flex items-center mt-4'>
										<Button
											onClick={() => subtractFromCart(item.id)}
											isIconOnly
											variant='light'
											className='px-2 text-white w-2 hover:text-gray-200'>
											-
										</Button>
										<span className='px-2'>{item.quantity}</span>
										<Button
											onClick={() => addToCart(item)}
											isIconOnly
											variant='light'
											className='px-2 text-white hover:text-gray-200'>
											+
										</Button>
										<Button
											onClick={() => removeFromCart(item.id)}
											isIconOnly
											variant='light'
											className='text-white hover:text-red-500 ml-3'>
											<FaTrashAlt />
										</Button>
									</div>
								</CardBody>
							</Card>
						))
					)}
				</div>
				{cartItems.length > 0 && (
					<div className='w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0'>
						<Card className='bg-transparent border border-white text-white'>
							<CardBody className='p-4'>
								<h2 className='text-xl font-bold mb-4'>Total: €{totalPrice.toFixed(2)}</h2>
								<Button
									color='primary'
									className='w-full mb-4'>
									Checkout
								</Button>
								<div className='text-sm text-white capitalize'>Do you have a Discount Code?</div>
								<Input
									placeholder='Enter your discount code'
									className='mt-2'
								/>
							</CardBody>
						</Card>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartDisplay;
