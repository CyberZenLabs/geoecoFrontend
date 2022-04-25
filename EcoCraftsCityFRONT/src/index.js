import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home';
import NavBar from "./components/NavBar"
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import ProductDetail from './pages/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    
      <Route index element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="adminlogin" element={<AdminLogin/>}/>
      <Route path="product:id" element={<ProductDetail/>}/>
    </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

