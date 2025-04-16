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

const LandingLayout = () => {
    const whyRef = useRef(null);
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
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                {/* Blur Ellipses */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        top: { xs: 100, md: 120 },
                        left: { xs: -150, md: -100 },
                        transform: 'rotate(15deg)',
                        borderRadius: '50%',
                        background: 'rgba(16, 108, 230, 0.4)',
                        filter: 'blur(400px)',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        top: { xs: 300, md: 250 },
                        right: { xs: -150, md: -100 },
                        transform: 'rotate(-20deg)',
                        borderRadius: '50%',
                        background: 'rgba(14, 206, 23, 0.4)',
                        filter: 'blur(400px)',
                        zIndex: -1,
                    }}
                />
                <Header
                    scrollToSection={(section) => {
                        const map = {
                            why: whyRef,
                            capabilities: capabilitiesRef,
                            industries: industriesRef,
                            transform: transformRef,
                            plans: plansRef
                        };
                        map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    handleScrollToForm={handleScrollToForm}
                />
                <Mainscreen plansRef={plansRef} contactFormRef={contactFormRef} highlighted={highlighted}/>
            </Box>
            <HorizontalBar />
            <div ref={whyRef}><WhyAcoflow /></div>
            <div ref={capabilitiesRef}><Capabilities /></div>
            <div ref={industriesRef}><Industries /></div>
            {/* <div ref={plansRef}><Plans /></div> */}

            <div ref={transformRef}><Transform handleScrollToForm={handleScrollToForm}/></div>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        top: { xs: 100, md: 120 },
                        left: { xs: -150, md: -100 },
                        transform: 'rotate(15deg)',
                        borderRadius: '50%',
                        background: 'rgba(16, 108, 230, 0.4)',
                        filter: 'blur(400px)',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: 400,
                        height: 400,
                        top: { xs: 300, md: 250 },
                        right: { xs: -150, md: -100 },
                        transform: 'rotate(-20deg)',
                        borderRadius: '50%',
                        background: 'rgba(14, 206, 23, 0.4)',
                        filter: 'blur(400px)',
                        zIndex: -1,
                    }}
                />
                <Footer
                    scrollToSection={(section) => {
                        const map = {
                            why: whyRef,
                            capabilities: capabilitiesRef,
                            industries: industriesRef,
                            transform: transformRef,
                            plans: plansRef
                        };
                        map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                />
            </Box>
        </Box>
    );
};

export default LandingLayout;
