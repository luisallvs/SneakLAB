import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, useDisclosure } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from '@nextui-org/badge';
import LoginModal from '../auth/LoginModal';
import { CartContext } from '../context/CartContext';

// Menu configuration for the navbar
const menuConfig = [
	{ label: 'Products', path: '/products' },
	{ label: 'About Us', path: '/about' },
	{ label: 'Blog', path: '/blog' },
	{ label: 'Login', path: '/login' },
];

export default function CustomNavbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State for menu open/close
	const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Modal disclosure state
	const { cartItems } = useContext(CartContext); // Get cart items from context

	// Handle menu item click (close menu)
	const handleMenuItemClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='bg-transparent'>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden text-primary'
				/>
				<NavbarBrand>
					<Link
						to='/'
						className='font-bold text-white text-4xl font-logo'>
						SneakLAB
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className='hidden sm:flex gap-4'
				justify='center'>
				{menuConfig.slice(0, 3).map((item, index) => (
					<NavbarItem key={index}>
						<Link
							to={item.path}
							className='text-white'>
							{item.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Button
						variant='ghost'
						className='text-white hover:text-primary'
						onPress={onOpen}>
						Login
					</Button>
					<LoginModal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
					/>
				</NavbarItem>
				<NavbarItem className='hidden lg:block'>
					<Button
						as={Link}
						to='/signup'
						color='primary'
						variant='shadow'
						className='text-white hover:text-white'>
						Sign Up
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						to='/cart'
						variant='ghost'
						className='text-white hover:text-primary relative border-none'>
						<FaShoppingCart
							size={20}
							className='mr-2'
						/>
						{/* Show badge with cart item count if there are items in the cart */}
						{cartItems.length > 0 && (
							<Badge
								color='white'
								variant='solid'
								content={cartItems.length}
								className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'
							/>
						)}
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className='bg-black/60'>
				{menuConfig.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link
							to={item.path}
							className='w-full text-white'
							size='lg'
							onClick={handleMenuItemClick}>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
