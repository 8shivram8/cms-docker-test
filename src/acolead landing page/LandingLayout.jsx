import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import AcoleadHeader from './AcoleadHeader';
import Banner from './Banner';
import AboutMission from './AboutMission';




const LandingLayout = () => {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const industriesRef = useRef(null);
    const transformRef = useRef(null);
    const plansRef = useRef(null);
    const contactFormRef = useRef(null)
    const [highlighted, setHighlighted] = useState(false);

    const handleScrollToForm = () => {
        if (contactFormRef.current) {
            // contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
            // contactFormRef.current.focus(); // Focus the entire form
            setHighlighted(true); // Trigger the highlight
            setTimeout(() => {
                setHighlighted(false); // Remove highlight after 5 seconds
            }, 5000);
        }
    };



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AcoleadHeader
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        why: aboutRef,
                        capabilities: capabilitiesRef,
                    };
                    map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                handleScrollToForm={handleScrollToForm}
            />
            <Box ref={homeRef}>
                <Banner />
            </Box>
            <Box ref={aboutRef}>
            <AboutMission/>
            </Box>

        </Box>
    );
};

export default LandingLayout;
