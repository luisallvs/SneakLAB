import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

/* pages */
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ScrollToTop from './components/utils/ScrollToTop';
import Layout from './components/utils/Layout';
import ErrorPage from './pages/ErrorPage';

import './App.css';

function App() {
	const navigate = useNavigate();

	return (
		<NextUIProvider navigate={navigate}>
			<ScrollToTop />

			<Layout>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<AboutPage />}
					/>
					<Route
						path='/products'
						element={<Products />}
					/>
					<Route
						path='/product/:id'
						element={<ProductPage />}
					/>
					<Route
						path='/blog'
						element={<Blog />}
					/>
					<Route
						path='/login'
						element={<LoginPage />}
					/>
					<Route
						path='/signup'
						element={<SignUpPage />}
					/>
					<Route
						path='/Cart'
						element={<Cart />}
					/>
					<Route
						path='*'
						element={<ErrorPage />}
					/>{' '}
					{/* Catch-all route */}
				</Routes>
				<Footer />
			</Layout>
		</NextUIProvider>
	);
}

export default App;
