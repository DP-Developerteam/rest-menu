import './_components.scss'; // Import styles
import React, { useEffect, useState } from 'react';
import ArrowUp from '../assets/img/arrow-up-button.svg';

// ***************
// function that displays a button to scroll back to top once you start scroll down on the site.
// ***************

function BackTopButton() {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScrollButton && (
                <button onClick={scrollToTop} className="scrollTop">
                    <img className='icon' src={ArrowUp} alt='button arrow back to top'/>
                </button>
            )}
        </>
    )
}

export default BackTopButton;