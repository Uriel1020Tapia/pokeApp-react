
import { useEffect, useState } from 'react';
import './ButtonScrollTop.css';

export const ButtonScrollTop = () => {


    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>

            {scrollTop && (
                <button type="button"
                    role='button'
                    ariaLabel='Scroll to top of the page'
                    tabIndex='0'
                    className="scrolltop-button" onClick={bottomToTop}>
                    <div className="symbol-container">
                        <svg
                            ariaHidden="true"
                            fill="#fff"
                            focusable="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z">
                            </path>
                        </svg>
                    </div>
                </button>
            )}
        </>
    )
}
