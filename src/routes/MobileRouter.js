import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../pages/app/App';
import HomeMobile from '../pages/home/HomeMobile';


const MobileRouter = () => {


    return (
        <Routes>
            <Route element={<HomeMobile />} path="/" exact /> 
            <Route element={<App />} path="/app" exact />   
        </Routes>
    )
}


export default MobileRouter;