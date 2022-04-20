import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contentfooter from '../components/Footer/ContentFooter';
import Navbar from '../components/NavBar/Navbar'
import Home from '../pages/Home'
const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

            </Routes>
            <Contentfooter />
        </BrowserRouter>
    );
}

export default Approuter;
