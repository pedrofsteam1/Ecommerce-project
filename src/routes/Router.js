import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../pages/app/App';
import Home from '../pages/home/Home';


const Router = () => {


    return (
        <Routes>
            <Route element={<Home />} path="/" exact /> 
            <Route element={<App />} path="/app" exact />   
        </Routes>
    )
}


export default Router;