import React from 'react';
import { Box, Grid, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

const KeyFeatures = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const features = [
        {
            title: 'Lead Management',
            subtitle: 'A smart CRM designed for brokers—capture, track, and manage all your leads in one dashboard. Never lose a potential buyer again.',
        },
        {
            title: 'Dynamic island',
            subtitle: 'Our “Dynamic Island” shows a live popup with past call summaries and AI-suggested talking points.',
        },
        {
            title: 'WhatsApp Chat Automation',
            subtitle: 'Instantly reply to customers, send property details, schedule messages, and follow-ups through WhatsApp without manual effort.',
        },
        {
            title: 'Meeting Scheduler',
            subtitle: 'Clients can check your availability and book meetings with you directly. Integrated with Google Calendar for smooth scheduling.',
        },
        {
            title: 'Website Builder',
            subtitle: 'Get your own real estate website with your name, listings, contact form, and branding all live in just 5 minutes.',
        },
    ];

    return (
        <Box width="100%" py={5} bgcolor="#1677F7">
            <Container maxWidth="xl">
                <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign="center"
                    color="white"
                    mb={6}
                >
                    Key Features
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    height: isMobile ? 180 : 200,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    px: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h6" fontWeight={600} mb={isMobile ? 1 : 1.5}>
                                    {feature.title}
                                </Typography>
                                <Typography fontSize={14} color="text.secondary">
                                    {feature.subtitle}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default KeyFeatures;
