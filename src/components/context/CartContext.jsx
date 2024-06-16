import { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// CartProvider component to provide cart state and functions to the rest of the app
export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]); // State to hold cart items

	// Function to add a product to the cart
	const addToCart = product => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(item => item.id === product.id);
			if (existingItem) {
				// If the item already exists in the cart, increase its quantity
				return prevItems.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
			}
			// If the item does not exist, add it to the cart with a quantity of 1
			return [...prevItems, { ...product, quantity: 1 }];
		});
	};

	// Function to decrease the quantity of a product in the cart
	const subtractFromCart = productId => {
		setCartItems(prevItems => prevItems.map(item => (item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item)));
	};

	// Function to remove a product from the cart
	const removeFromCart = productId => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
	};

	// Provide cart state and functions to children components
	return <CartContext.Provider value={{ cartItems, addToCart, subtractFromCart, removeFromCart }}>{children}</CartContext.Provider>;
};
