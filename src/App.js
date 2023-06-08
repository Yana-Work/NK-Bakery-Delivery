import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import { CartProvider } from "react-use-cart";


function App() {
   return (
      <CartProvider>
         <div className="App">
            <Navbar />
            <Routes>
               <Route path="/" element={<Shop />} />
               <Route path="/cart" element={<Cart />} />
            </Routes>
         </div>
      </CartProvider>
   )
}

export default App;
