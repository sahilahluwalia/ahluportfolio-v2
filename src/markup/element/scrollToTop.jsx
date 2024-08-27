'use client'
import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

const ScrollToTop = ({ offset = 1000, className }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > offset) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        <>
            {show && (
                <button
                    className={`scroltop ${className}`}
                    type="button"
                    onClick={scrollToTop}
                    style={{ display: "block" }}
                >
                    <i className="fa fa-arrow-up"></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
