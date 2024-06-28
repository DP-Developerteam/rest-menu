// import React from 'react'
import { Outlet } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop';
import BackTopButton from '../components/BackTopButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
    return (
        <div className='rootLayout'>
            <ScrollToTop/>
            <BackTopButton />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
