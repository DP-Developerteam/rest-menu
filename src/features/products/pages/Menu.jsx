// Import styles and libraries
import '../../../App.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Menu() {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <div className='intro'>
                <h1>{t('menu.intro.title')}</h1>
                <p>{t('menu.intro.paragraph')}</p>
            </div>
            <div className='tabsContainer'>
                <p className='tab'>
                    <NavLink className="btnExpand150" to='/menu/foods'>{t('nav.food')}</NavLink>
                </p>
                <p className='tab'>
                    <NavLink className="btnExpand150" to='/menu/drinks'>{t('nav.drinks')}</NavLink>
                </p>
                <p className='tab'>
                    <NavLink className="btnExpand150" to='/menu/foods'>{t('nav.recommendations')}</NavLink>
                </p>
                <p className='tab'>
                    <NavLink className="btnExpand150" to='/menu/drinks'>{t('nav.offers')}</NavLink>
                </p>
                <p className='tab'>
                    <NavLink className="btnExpand150" to='/menu/drinks'>{t('nav.discounts')}</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Menu