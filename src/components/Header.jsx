import './_components.scss'; // Import styles
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Isologotipo from '../assets/img/ISOLOGOTIPO-DP-rest-menu.svg';
import MenuIcon from '../assets/img/menu-icon.svg';
import MenuOpenIcon from '../assets/img/menu-open-icon.svg';
import FlagUk from '../assets/img/flag-uk.svg';
import FlagSpain from '../assets/img/flag-spain.svg';
import FlagGermany from '../assets/img/flag-germany.svg';

function Header() {
    const { t, i18n } = useTranslation();
    const languages = [
        { code: "en", name: "United Kingdom", flag: FlagUk },
        { code: "es", name: "Spanish", flag: FlagSpain },
        { code: "de", name: "German", flag: FlagGermany },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='header'>
            <NavLink className='tab' onClick={closeMenu} to='/'>
                <img className='logo' src={Isologotipo} alt='isologotipo' />
            </NavLink>
            <button className='buttonMenu' onClick={toggleMenu}>
                <img className='icon' src={isMenuOpen ? MenuOpenIcon : MenuIcon} alt='menu icon' />
            </button>
            <nav className={`navContainer ${isMenuOpen ? 'open' : 'closed'}`}>
                <NavLink className='tab' onClick={closeMenu} to='/'>{t('nav.home')}</NavLink>
                <NavLink className='tab' onClick={closeMenu} to='/menu'>{t('nav.menu')}</NavLink>
                <div className='languagesBox'>
                    {languages.map(language => (
                        <button className='language' onClick={() => {i18n.changeLanguage(language.code);}} key={language.code}>
                            <img className='flag' src={language.flag} alt={`${language.name} flag`} />
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Header;

