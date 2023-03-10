import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Signup from '../pages/SignUp';
import CheckOut from '../pages/CheckOut';
import ProtectedRoute from './ProtectedRoute';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home" />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />

      <Route
        path='checkout'
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>}
      />

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers