import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import Products from './pages/products.js';
import Cart from './pages/cart.js';
import Profile from './pages/profile.js'
import ProductDes from './pages/productDes.js';
import Contact from './pages/contact.js';

export default function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products/:id" element={<ProductDes/>}/>
        </Routes>
    </>
  );
}

