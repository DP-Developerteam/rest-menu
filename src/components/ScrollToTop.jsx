import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ***************
// function to scroll to top of the page. Used in RootLayout to help navigation.
// ***************

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;