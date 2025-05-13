import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Mainscreen from './Mainscreen';
import HorizontalBar from './HorizontalBar';
import WhyAcoflow from './WhyAcoflow';
import Capabilities from './Capabilities';
import Industries from './Industries';
import Transform from './Transform';
import Footer from './Footer';
import Plans from '../new components/pricing/Plans';
import KeyFeatures from './KeyFeatures';

const LandingLayout = () => {
    const whyRef = useRef(null);
    const homeRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const industriesRef = useRef(null);
    const transformRef = useRef(null);
    const plansRef = useRef(null);
    const contactFormRef = useRef(null)
    const [highlighted, setHighlighted] = useState(false);
    const handleScrollToForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
            contactFormRef.current.focus(); // Focus the entire form
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

            <Header
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        why: whyRef,
                        capabilities: capabilitiesRef,
                    };
                    map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                handleScrollToForm={handleScrollToForm}
            />
            <div ref={homeRef}>
                <Mainscreen plansRef={plansRef} contactFormRef={contactFormRef} highlighted={highlighted} />
            </div>


            {/* <HorizontalBar /> */}
            <div ref={whyRef}><WhyAcoflow /></div>
            {/* <div ref={capabilitiesRef}><Capabilities /></div> */}
            <div ref={capabilitiesRef}><KeyFeatures /></div>

            {/* <div ref={transformRef}><Transform handleScrollToForm={handleScrollToForm} /></div> */}

            <Footer
                scrollToSection={(section) => {
                    const map = {
                        home: homeRef,
                        why: whyRef,
                        capabilities: capabilitiesRef,
                    };
                    map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
            />

        </Box>
    );
};

export default LandingLayout;
