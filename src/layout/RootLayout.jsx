// import React from 'react'
import { Outlet } from 'react-router-dom';

// import components
import { ScrollToTop, BackTopButton } from '../components/Common';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
    return (
        <div className='myDP-RestMenuApp'>
            <ScrollToTop/>
            <BackTopButton />
            <Header />
            <div className='contentDP'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout