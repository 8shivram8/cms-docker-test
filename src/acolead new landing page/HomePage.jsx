import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bg from './images/bg.png';
import mainimg from './images/mainimg.png';
import calender from './images/calender.png';
import card from './images/card.png';
import sales from './images/sales.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.2,
    });

    const slideInVariant = {
        hidden: { opacity: 0, y: -60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: 'easeOut' },
        },
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    width: '100%',
                    gap: 4,
                }}
            >
                {/* Left Content */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: isMobile ? 0 : 0,
                        textAlign: isMobile ? 'center' : 'left',
                    }}
                    ref={ref}
                >
                    {/* <motion.div
                        variants={slideInVariant}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                fontSize: isMobile ? '1rem' : '2.5rem',
                                color: '#000',
                            }}
                        >
                            Get More{' '}
                            <Box component="span" sx={{ color: '#1677F7' }}>
                                Leads
                            </Box>
                            , Close More{' '}
                            <Box component="span" sx={{ color: '#1677F7' }}>
                                Deals
                            </Box>
                            , Grow Your Business Faster.
                        </Typography>
                    </motion.div> */}

                    <motion.div
                        variants={slideInVariant}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '0.8rem',
                                lineHeight: 1.6,
                                color: '#333',
                                maxWidth: '600px',
                                mt: 2,
                                mx: isMobile ? 'auto' : 0,
                            }}
                        >
                            A powerful lead management and sales automation platform designed to help you capture, nurture, and convert leads with ease—so you can focus on what matters most: growth.
                        </Typography>
                    </motion.div>

                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        target="_blank"
                        href="https://app.crm.acolead.com/"
                        sx={{
                            alignSelf: isMobile ? 'center' : 'flex-start',
                            bgcolor: '#1677F7',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1.2,
                            color: 'white',
                            fontSize: '1rem',
                            borderRadius: 2,
                            '&:hover': {
                                bgcolor: '#145ed6',
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Right Image with Floating Calendar */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    {/* Main Image */}
                    <Box
                        component="img"
                        src={mainimg}
                        alt="Main"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            height: 'auto',
                            borderRadius: 4,
                            zIndex: 1,
                        }}
                    />

                    {!isMobile && (
                        <>
                            <Box
                                component="img"
                                src={calender}
                                alt="Calendar"
                                sx={{
                                    position: 'absolute',
                                    bottom: -150,
                                    left: 0,
                                    width: isMobile ? 60 : 240,
                                    height: 'auto',
                                    zIndex: 2,
                                }}
                            />

                            {/* Sales - Bottom Right (No Box) */}
                            <Box
                                component="img"
                                src={sales}
                                alt="Sales"
                                sx={{
                                    position: 'absolute',
                                    bottom: -60,
                                    right: -30,
                                    width: isMobile ? 60 : 200,
                                    height: 'auto',
                                    zIndex: 2,
                                }}
                            />

                            {/* Card - Top Right (No Box) */}
                            <Box
                                component="img"
                                src={card}
                                alt="Card"
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    right: 0,
                                    width: isMobile ? 50 : 190,
                                    height: 'auto',
                                    zIndex: 2,
                                }}
                            />
                        </>
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
