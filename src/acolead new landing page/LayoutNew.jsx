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
    const [country, setCountry] = useState('IN');
    const scrollRef = useRef(null);     // for scrolling
    const formRef = useRef(null);
    // const handleScrollToForm = () => {
    //     if (contactFormRef.current) {
    //         const topOffset = contactFormRef.current.getBoundingClientRect().top + window.pageYOffset - 80; // adjust offset as per header height
    //         window.scrollTo({
    //             top: topOffset,
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    const handleScrollToForm = () => {
        if (scrollRef.current) {
            const topOffset = scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 80;

            window.scrollTo({
                top: topOffset,
                behavior: 'smooth',
            });

            // Delay focusing to allow smooth scroll to complete
            setTimeout(() => {
                formRef.current?.focusFirstField?.();
            }, 600);
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

                    const element = map[section]?.current;
                    if (element) {
                        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80; // adjust 80px as per your header height
                        window.scrollTo({
                            top: topOffset,
                            behavior: 'smooth',
                        });
                    }
                }}

                handleScrollToForm={handleScrollToForm}
                country={country}
                setCountry={setCountry}
            />
            <Box ref={homeRef}>
                <HomePage />
            </Box>
            <Box>
                <ImgSection aboutRef={aboutRef}/>
            </Box>
            <Mission />
            <Box ref={featuesRef}>
                <KeyFeatures />
            </Box>
            <HorizontalBar />
            <Box ref={plansRef}>
                <Plans country={country} />
            </Box>
            <Box ref={scrollRef}>
                <BookDemo ref={formRef} />
            </Box>
            <Footer handleScrollToForm={handleScrollToForm}
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        about: aboutRef,
                        feature: featuesRef,
                        plans: plansRef,
                    };

                    const element = map[section]?.current;
                    if (element) {
                        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80; // adjust 80px as per your header height
                        window.scrollTo({
                            top: topOffset,
                            behavior: 'smooth',
                        });
                    }
                }}
            />

        </Box>
    );
};

export default LayoutNew;
