import './_components.scss'; // Import styles
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();

    return (
        <header className='header'>
            <nav className="tabsContainer">
                <NavLink className='tab' to='/'>{t('nav.home')}</NavLink>
                <div class="clearGap"></div>
                <NavLink className='tab' to='menu'>{t('nav.menu')}</NavLink>
            </nav>
        </header>
    )
}

export default Header