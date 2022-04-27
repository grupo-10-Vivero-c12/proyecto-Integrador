import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contentfooter from '../components/Footer/ContentFooter';
import Navbar from '../components/NavBar/Navbar'
import Home from '../pages/Home'
import ListProducts from '../pages/ListProducts';
const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<ListProducts />} />

            </Routes>
            <Contentfooter />
        </BrowserRouter>
    );
}

export default Approuter;
