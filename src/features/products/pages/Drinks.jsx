// Import styles and libraries
import '../../../App.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Drinks() {
    const { t } = useTranslation();
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(prevMenu => (prevMenu === menu ? null : menu));
    };

    return (
        <div className='page'>
            <div className='intro'>
                <h1>{t('drinks.intro.title')}</h1>
                <p>{t('drinks.intro.paragraph')}</p>
                <NavLink className="btnBack" to="/menu">Back</NavLink>
            </div>
            <div className='tabsContainer'>
                <div className='tab'>
                    <p
                        onClick={() => toggleMenu('hotDrink')}
                        className={`btnExpand150 ${openMenu === 'hotDrink' ? 'active' : ''}`}
                    >
                        {t('drinks.hotDrink')}
                    </p>
                    {openMenu === 'hotDrink' && (
                        <div className='dropMenu'>
                            <div className='item'>
                                <p className='title'>{t('drinks.product.title')}</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>Latte</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>{t('drinks.product.title')}</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>Latte</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>{t('drinks.product.title')}</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>Last</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tab: Bebidas frías */}
                <div className='tab'>
                    <p
                        onClick={() => toggleMenu('coldDrink')}
                        className={`btnExpand150 ${openMenu === 'coldDrink' ? 'active' : ''}`}
                    >
                        {t('drinks.coldDrink')}
                    </p>
                    {openMenu === 'coldDrink' && (
                        <div className='dropMenu'>
                            <div className='item'>
                                <p className='title'>Coca-cola</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>Fanta</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>04,00 €</p>
                                </div>
                            </div>
                            <div className='item'>
                                <p className='title'>Sprite</p>
                                <div className='iconPrice'>
                                    <p className='icon'>icon</p>
                                    <p className='price'>08,00 €</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
-
                {/* Otros tabs */}
                <div className='tab'>
                    <p
                        onClick={() => toggleMenu('alcoholicDrink')}
                        className={`btnExpand150 ${openMenu === 'alcoholicDrink' ? 'active' : ''}`}
                    >
                        {t('drinks.alcoholicDrink')}
                    </p>
                </div>
                <div className='tab'>
                    <p
                        onClick={() => toggleMenu('nonAlcoholicDrink')}
                        className={`btnExpand150 ${openMenu === 'nonAlcoholicDrink' ? 'active' : ''}`}
                    >
                        {t('drinks.nonAlcoholicDrink')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Drinks;