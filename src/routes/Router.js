import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../pages/app/App';
import Home from '../pages/home/Home';
import ProductPage from '../pages/ProductPage/ProductPage';


const Router = () => {


    return (
        <Routes>
            <Route element={<Home />} path="/" exact /> 
            <Route element={<App />} path="/app" exact />  
            <Route element={<ProductPage />} path="/product" exact /> 
        </Routes>
    )
}


export default Router;