import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Operations from './Icons/Industries icons/Operations';
import Procurment from './Icons/Industries icons/Procurment';
import ItIndustries from './Icons/Industries icons/ItIndustries';
import Founders from './Icons/Industries icons/Founders';

const Industries = () => {
    const data = [
        {
            icon: <Operations />,
            title: 'Operations / HR / Compliance Managers',
            subtitle: 'Eliminate manual tasks, reduce errors, and speed up onboarding and approvals.',
        },
        {
            icon: <Procurment />,
            title: 'Procurement / Vendor Managers',
            subtitle: 'Collect vendor documents and verification info effortlessly without requiring vendor logins.',
        },
        {
            icon: <ItIndustries />,
            title: 'IT / Digital Transformation Leaders',
            subtitle: 'Launch AI-powered workflows in hours, not weeks—without the hassle of building custom',
        },
        {
            icon: <Founders />,
            title: 'Founders / SMEs / CXOs',
            subtitle: 'Get the agility and visibility you need. Cut delays, track progress, and focus on growing your business.',
        },
    ];

    // Duplicate cards to create smooth loop
    const allCards = [...data, ...data];

    return (
        <Box width="100%" mt={10} mb={10} overflow="hidden">
            <Container maxWidth="xl">
                <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
                    Industries
                </Typography>

                <Box
                    component={motion.div}
                    sx={{
                        display: 'flex',
                        gap: 3,
                        width: 'fit-content',
                    }}
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {allCards.map((item, index) => (
                        <Box
                        key={index}
                        className="card-box"
                        sx={{
                            minWidth: 300,
                            maxWidth: 300,
                            border: '0.5px solid #5B5B5D',
                            borderRadius: 4,
                            height: 220,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            pt: 3,
                            px: 3,
                            bgcolor: 'white',
                            flexShrink: 0,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: '#1677F7',
                                color: 'white',
                                '& .icon-wrapper svg': {
                                    color: 'white',
                                },
                            },
                        }}
                    >
                    
                            <Box className="icon-wrapper">{item.icon}</Box>
                            <Typography variant="h6" fontWeight={600} ml={1}>
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: 14,
                                    color: 'text.secondary',
                                    mt: 1,
                                    ml: 1,
                                    transition: 'color 0.3s ease',
                                    '.card-box:hover &': {
                                        color: 'white',
                                    },
                                }}
                            >
                                {item.subtitle}
                            </Typography>

                        </Box>

                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Industries;
