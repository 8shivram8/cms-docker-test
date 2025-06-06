import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, keyframes } from '@mui/material';
import img from '../assets/acolead landing page/centerimg.jpg';
import logo from '../assets/acolead-crm-logo.png';

// right-left

// const slideIn = keyframes`
//   0% {
//     transform: translateX(50px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;


const slideIn = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;




// top-bottom
// const slideIn = keyframes`
//   0% {
//     transform: translateY(-50px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;



const Banner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: isMobile ? 'auto' : '75vh',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background Image */}
                <Box
                    component="img"
                    src={img}
                    alt="banner"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: isMobile ? '0px' : '80px',
                        height: '100%',
                        width: isMobile ? '100%' : 'calc(100% - 80px)',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />

                {/* Overlay Container */}
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: 1,
                        width: '100%',
                        // animation: !isMobile ? 'slideIn 1.2s ease-out' : 'none',
                        // '@keyframes slideIn': {
                        //     '0%': {
                        //         transform: 'translate(100%, -50%)',
                        //         opacity: 0,
                        //     },
                        //     '100%': {
                        //         transform: 'translate(0, -50%)',
                        //         opacity: 1,
                        //     },
                        // },
                        top: isMobile ? 0 : '50%',
                        transform: isMobile ? 'none' : 'translateY(-50%)',
                        // px: 4,
                        pt: isMobile ? 8 : 0,
                        pb: isMobile ? 4 : 0,
                    }}
                >
                    {/* Left Section */}
                    <Box
                        sx={{
                            width: isMobile ? '100%' : '50%',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        {/* Left Box */}
                        <Box
                            sx={{
                                bgcolor: '#000435',
                                height: isMobile ? 'auto' : '40vh',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                pl: isMobile ? 4 : 8,
                                pr: 2,
                                pb: isMobile ? 4 : 0,
                                position: 'relative',
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="AcoLead Logo"
                                sx={{
                                    width: isMobile ? '100px' : '200px',
                                    height: 'auto',
                                    mb: 2,
                                   
                                }}
                            />
                            <Typography
                                variant={isMobile ? 'h4' : 'h1'}
                                sx={{
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: isMobile ? '2.5rem' : '5rem',
                                }}
                            >
                                AcoLead
                            </Typography>

                            {/* Attached Bottom Boxes */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: 0,
                                    display: 'flex',
                                    height: '35px',
                                    width: isMobile ? '240px' : '620px',
                                    // animation: `${slideIn} 0.8s ease-out`,
                                    animation: `${slideIn} 2s cubic-bezier(0.25, 0.8, 0.25, 1)`

                                }}
                            >
                                <Box sx={{ bgcolor: '#0000ff', width: isMobile ? '140px' : '360px' }} />
                                <Box sx={{ bgcolor: '#87CEFA', width: isMobile ? '100px' : '200px' }} />
                            </Box>
                        </Box>

                        {!isMobile && (
                            <Box
                                sx={{
                                    bgcolor: '#87CEFA',
                                    height: '40vh',
                                    width: '80px',
                                    // animation: `${slideIn} 1s ease-out`,
                                    animation: `${slideIn} 2s cubic-bezier(0.25, 0.8, 0.25, 1)`

                                }}
                            />
                        )}
                    </Box>

                    {/* Right Section */}
                    <Box
                        sx={{
                            width: isMobile ? '100%' : '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: isMobile ? 'flex-start' : 'flex-start',
                            pl: isMobile ? 2 : 4,
                            pt: isMobile ? 6 : 0,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: isMobile ? '2rem' : '4rem',
                                color: '#fff',
                            }}
                        >
                            {/* Streamline Every Lead. */}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 1,
                                fontSize: isMobile ? '1.1rem' : '1.7rem',
                                color: '#fff',
                                maxWidth: '90%',
                            }}
                        >
                            {/* AcoLead empowers teams to manage, track, and convert leads efficiently — all from one smart platform. */}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Below Banner Info Box */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    ml: isMobile ? 2 : '80px',
                    mr: isMobile ? 2 : '80px',
                    mt: 4,
                    textAlign: isMobile ? 'center' : 'left',
                    gap: isMobile ? 2 : 0,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: isMobile ? '2rem' : '3rem',
                        color: 'black',
                    }}
                >
                    2025
                </Typography>

                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 500,
                            fontSize: isMobile ? '1.1rem' : '1.3rem',
                            color: 'black',
                        }}
                    >
                        Smarter Lead Management.<br />
                        Secure Engagement
                    </Typography>
                    <Box
                        sx={{
                            height: '2px',
                            bgcolor: '#000',
                            mt: 1,
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Banner;
