
import {Routes, Route } from 'react-router';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import MainLayout from '../layout/MainLayout';
import ProfilePage from '../pages/ProfilePage';

function router() {
  return (
    <Routes>
        <Route element={<MainLayout/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
    </Routes>
  )
}

export default router