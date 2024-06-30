import './_pages.scss'; // Import styles
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Menu() {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <p>Menu</p>
            <NavLink className='tab' to='/menu/drinks'>{t('nav.drinks')}</NavLink>
        </div>
    )
}

export default Menu