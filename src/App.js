import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import Products from './pages/products.js';
import Cart from './pages/cart.js';
import CurrencyConverter from './pages/currencyConverter.js';
import Profile from './pages/profile.js'

export default function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/currencyconverter" element={<CurrencyConverter/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </>
  );
}

