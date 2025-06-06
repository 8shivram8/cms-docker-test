import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import yourImage from './images/centerimg.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const ImgSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [ref, inView] = useInView({ threshold: 0.2 });

    const slideInVariant = {
        hidden: { opacity: 0, y: -60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: 'easeOut' },
        },
    };
    return (
        <Box ref={ref}>
            {/* Image */}
            <Box
                component="img"
                src={yourImage}
                alt="Full Width"
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
            />

            {/* Title and Subtitle */}
            <motion.div
                variants={slideInVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <Box sx={{ textAlign: 'center', px: 2, mt: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, fontSize: isMobile ? '1rem' : '1.8rem', color: '#000' }}
                    >
                        At its core,{' '}
                        <Box component="span" sx={{ color: '#1677F7', display: 'inline' }}>
                            Acolead {' '}
                        </Box>
                        is a robust <br />
                        CRM solution.
                    </Typography>
                </Box>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                variants={slideInVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.4, duration: 1.5 }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        mt: 2,
                        maxWidth: 700,
                        mx: 'auto',
                        textAlign: 'center',
                        fontSize: '1rem',
                        color: '#333',
                        lineHeight: 1.6,
                        fontSize: isMobile ? '0.8rem' : '1rem'
                    }}
                >
                    AcoLead is a proprietary solution developed by Coalitionify Innovate Pvt. Ltd., as part of our
                    mission to deliver cutting-edge, affordable technologies that solve real operational
                    challenges in sales and marketing.
                </Typography>
            </motion.div>
        </Box>
    );
};

export default ImgSection;
