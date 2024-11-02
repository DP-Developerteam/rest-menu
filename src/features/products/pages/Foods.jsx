// Import styles and libraries
import '../../../App.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Foods() {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <div className='intro'>
                <h1>{t('food.intro.title')}</h1>
                <p>{t('food.intro.paragraph')}</p>
                <NavLink className="btnBack" to="/menu">Back</NavLink>
            </div>
            <div>{t('nav.food')}</div>
        </div>
    )
}

export default Foods