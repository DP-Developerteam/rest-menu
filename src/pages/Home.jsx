import './_pages.scss'; // Import styles
import React from 'react';
import { useTranslation } from 'react-i18next';


function Home() {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <h1>{t('home.intro.title')}</h1>
            <h1>{t('home.intro.paragraph')}</h1>
        </div>
    )
}

export default Home