import React from 'react';
import { Box, Grid, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import AiPowered from './Icons/feature icons/AiPowered';
import Colaborate from './Icons/feature icons/Colaborate';
import WorkflowAuto from './Icons/feature icons/WorkflowAuto';
import RichData from './Icons/feature icons/RichData';
import Enterprice from './Icons/feature icons/Enterprice';
import SaveTime from './Icons/feature icons/SaveTime';
import Automates from './Icons/feature icons/Automates';
import Affordable from './Icons/feature icons/Affordable';

const WhyAcoflow = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const data = [
        {
            icon: <AiPowered />,
            title: 'Built Exclusively for Brokers',
            subtitle: 'This platform isn’t for everyone—it’s designed specifically for real estate brokers. Every feature is tailored to help you manage leads, communicate better, and close more deals.'
        },
        {
            icon: <SaveTime />,
            title: 'Saves Time and Increases Conversions',
            subtitle: 'Say goodbye to spreadsheets and scattered follow-ups. Our tools streamline your workflow so you can focus on what really matters—turning leads into sales.'
        },
        {
            icon: <Automates />,
            title: 'Automates 80% of Your Daily Tasks',
            subtitle: 'From WhatsApp replies to meeting scheduling, we automate repetitive tasks so you can do more in less time—without hiring extra help.'
        },
        {
            icon: <Affordable />,
            title: 'Affordable and Easy to Use',
            subtitle: 'Professional tools don’t have to break the bank. Our pricing is built for individual brokers and small teams, and setup takes just minutes.'
        },
    ];

    return (
        <Box width="100%" mt={5} mb={5}>
            <Container maxWidth="xl">
                <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign="center"
                    mb={6}
                >
                    Why AcoLead
                </Typography>

                <Grid container spacing={3} justifyContent="flex-start">
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                className="card-box"
                                sx={{
                                    border: '0.5px solid #5B5B5D',
                                    borderRadius: 4,
                                    height: isMobile ? 250 : 240,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    pt: 3,
                                    px: 3,
                                    bgcolor: 'white',
                                    transition: 'all 0.3s ease',
                                    transform: 'scale(1)',
                                    color: 'inherit',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        bgcolor: '#1677F7',
                                        color: 'white',
                                        '& svg': {
                                            color: 'white',
                                        },
                                    },
                                }}
                            >
                                <Box sx={{ ml: 1 }}>{item.icon}</Box>
                                <Typography variant="h6" fontWeight={600} ml={1}>
                                    {item.title}
                                </Typography>
                                <Typography
                                    fontSize={14}
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        mt: 1,
                                        ml: 1,
                                        transition: 'color 0.3s ease',
                                        '.card-box:hover &': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {item.subtitle || ' '}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyAcoflow;
