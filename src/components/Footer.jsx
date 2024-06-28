import './_components.scss'; // Import styles
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t, i18n } = useTranslation();
    const languages = [
        { code: "en",  name: "EN"},
        { code: "es",  name: "ES"},
        { code: "de",  name: "DE"},
    ]

    return (
        <footer className='footer'>
            <nav className="tabsContainer">
                <NavLink className='tab' to='/'>{t('nav.home')}</NavLink>
                <div class="clearGap"></div>
                <NavLink className='tab' to='menu'>{t('nav.menu')}</NavLink>
                <div class="clearGap"></div>
            </nav>
            <div className='buttons'>
                {languages.map(language => (
                    <button
                    className='button'
                    onClick={()=>i18n.changeLanguage(language.code)}
                    key={language.code}
                    >
                    {language.name}
                    </button>
                ))}
            </div>
        </footer>
    )
}

export default Footer