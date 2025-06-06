import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import HomePage from './HomePage';
import ImgSection from './ImgSection';
import Mission from './Mission';
import KeyFeatures from './KeyFeatures';
import HorizontalBar from './HorizontalBar';
import Plans from './Plans';
import BookDemo from './BookDemo';
import Footer from './Footer';




const LayoutNew = () => {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const plansRef = useRef(null);
    const featuesRef = useRef(null);
    const contactFormRef = useRef(null)
    const [highlighted, setHighlighted] = useState(false);

    const handleScrollToForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
            // contactFormRef.current.focus(); 
        }
    };



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">

            <Header
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        about: aboutRef,
                        feature: featuesRef,
                        plans: plansRef,
                    };
                    map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                handleScrollToForm={handleScrollToForm}
            />
            <Box ref={homeRef}>
                <HomePage />
            </Box>
            <Box ref={aboutRef}>
                <ImgSection />
            </Box>
            <Mission />
            <Box ref={featuesRef}>
                <KeyFeatures />
            </Box>
            <HorizontalBar />
            <Box ref={plansRef}>
                <Plans />
            </Box>
            <Box ref={contactFormRef}>
                <BookDemo />
            </Box>
            <Footer handleScrollToForm={handleScrollToForm}
            scrollToSection={(section) => {
                const map = {
                    home: homeRef,
                    about: aboutRef,
                    feature: featuesRef,
                    plans: plansRef,
                };
                map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            />

        </Box>
    );
};

export default LayoutNew;
