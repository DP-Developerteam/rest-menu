import './_components.scss'; // Import styles
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ArrowLeft from '../assets/img/arrow-left.svg';
import ArrowRight from '../assets/img/arrow-right.svg';
import IconHomepage from '../assets/img/home.svg';
import IconOrderList from '../assets/img/order-list.svg';


function Footer() {
    const { t } = useTranslation();

    // Access user role from Redux
    const { role, isLoggedIn } = useSelector((state) => state.user);
    // console.log('Current User State:', role);

    const footerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollFooter = (direction) => {
        const footer = footerRef.current;
        if (direction === 'left') {
            footer.scrollBy({ left: -100, behavior: 'smooth' });
        } else {
            footer.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };
    const checkScroll = () => {
        const footer = footerRef.current;
        setCanScrollLeft(footer.scrollLeft > 0);
        setCanScrollRight(footer.scrollWidth > footer.clientWidth && footer.scrollLeft + footer.clientWidth < footer.scrollWidth);
    };
    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
        };
    }, []);
    useEffect(() => {
        const footer = footerRef.current;
        footer.addEventListener('scroll', checkScroll);
        return () => {
            footer.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className="footer">
            {canScrollLeft && <button className="scrollButton" onClick={() => scrollFooter('left')}>
                <img className='arrow' src={ArrowLeft} alt='arrow'/>
            </button>}
            <footer className='footerNavContainer' ref={footerRef}>
                <NavLink className='tab' to='/'>
                    <img className='icon' src={IconHomepage} alt='Order list icon'/>
                    {/* <p>{t('nav.home')}</p> */}
                </NavLink>
                |
                <NavLink className='tab' to='/menu'>{t('nav.menu')}</NavLink>
                |
                <NavLink className='tab' to='/menu/drinks'>
                    <img className='icon' src={IconOrderList} alt='Order list icon'/>
                </NavLink>
                {isLoggedIn && role === 'employee' && (
                    <NavLink className='tab' to='/users'>{t('nav.user')}</NavLink>
                )}
            </footer>
            {canScrollRight && <button className="scrollButton" onClick={() => scrollFooter('right')}>
                <img className='arrow' src={ArrowRight} alt='arrow'/>
            </button>}
        </div>
    );
}

export default Footer;
