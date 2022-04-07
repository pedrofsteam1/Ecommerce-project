import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../pages/app/App';
import Home from '../pages/home/Home';
import ProductPage from '../pages/ProductPage/ProductPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';



const Router = () => {


    return (
        <Routes>
            <Route element={<Home />} path="/" exact /> 
            <Route element={<App />} path="/app" exact />  
            <Route element={<ProductPage />} path="/product" exact /> 
            <Route element={<RegisterPage />} path="/register" exact />
            <Route element={<LoginPage />} path="/login" exact />
        </Routes>
    )
}


export default Router;