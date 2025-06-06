import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import img from '../assets/dashboard.jpeg';
import Mission from './Mission';


const AboutMission = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                mt: 8,
                // px: isMobile ? 2 : 4,
            }}
        >
            {/* Left Section: About Us */}
            <Box
                sx={{
                    width: isMobile ? '100%' : '40%',
                    mb: isMobile ? 4 : 0,
                    ml: isMobile ? 0 : 10
                }}
            >

                <Box
                    component="img"
                    src={img}
                    alt="about-img"
                    sx={{
                        width: '100%',
                        height: isMobile ? 200 : 300,
                        objectFit: 'cover',
                        mb: 3,
                    }}
                />

                {/* Title */}
                <Typography
                    variant={isMobile ? 'h5' : 'h3'}
                    sx={{
                        fontWeight: 700,
                        mb: isMobile ? 1 :2,
                        p: isMobile ? 2 : 0
                    }}
                >
                    <Box component="span" sx={{ color: 'black' }}>
                        About{' '}
                    </Box>
                    <Box component="span" sx={{ color: '#1677F7' }}>
                        AcoLead
                    </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: isMobile ? '1rem' : '1rem',
                        color: '#444',
                        lineHeight: 1.6,
                        textAlign: 'justify',
                        p: isMobile ? 2 : 0
                    }}
                >
                    AcoLead is a proprietary solution developed by Coalitionify Innovate Pvt. Ltd., as part of our
                    mission to deliver cutting-edge, affordable technologies that solve real operational
                    challenges in sales and marketing.
                </Typography>
            </Box>

            {/* Right Section: Mission */}
            <Box
                sx={{
                    width: isMobile ? '100%' : '60%',
                    //   px: isMobile ? 0 : 4,
                }}
            >
                <Mission />
            </Box>
        </Box>
    );
};

export default AboutMission;
