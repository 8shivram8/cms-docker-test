import React from 'react';
import { Box, Typography } from '@mui/material';
import Clinical from './Icons/Clinical';
import RealEstate from './Icons/RealEstate';
import Staffing from './Icons/Staffing';
import Manufact from './Icons/Manufact';
import Logistic from './Icons/Logistic';
import Helthcare from './Icons/Helthcare';
import { motion } from 'framer-motion';

const HorizontalBar = () => {
    const items = [
        { icon: <Clinical />, title: 'Clinical Research' },
        { icon: <RealEstate />, title: 'Real Estate' },
        { icon: <Staffing />, title: 'Staffing and HR' },
        { icon: <Manufact />, title: 'Manufacturing and Retail' },
        { icon: <Logistic />, title: 'Logistics and Transport' },
        { icon: <Helthcare />, title: 'Healthcare' },
    ];
    const allCards = [...items, ...items]; // duplicated for seamless loop

    return (
        <Box
            sx={{
                bgcolor: '#ECF4FF',
                px: 2,
                py: 1.5,
                overflow: 'hidden',
                height: 60,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Box
                component={motion.div}
                sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 8 },
                    minWidth: 'fit-content',
                }}
                animate={{ x: ['-50%','0%', ] }}
                transition={{
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {allCards.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            minWidth: { xs: 150, md: 'auto' },
                            flexShrink: 0,
                        }}
                    >
                        <Box sx={{ width: 40, height: 40 }}>{item.icon}</Box>
                        <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={500}>
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HorizontalBar;
