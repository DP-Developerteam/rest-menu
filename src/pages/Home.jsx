import './_pages.scss'; // Import styles
import React from 'react';
import { useTranslation } from 'react-i18next';


function Home() {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <div className='intro'>
                <h1>{t('home.intro.title')}</h1>
                <p>{t('home.intro.paragraph')}</p>
            </div>
        </div>
    )
}

export default Home