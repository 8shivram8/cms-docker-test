import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import AiPowered from './Icons/feature icons/AiPowered';
import Colaborate from './Icons/feature icons/Colaborate';
import WorkflowAuto from './Icons/feature icons/WorkflowAuto';
import RichData from './Icons/feature icons/RichData';
import Enterprice from './Icons/feature icons/Enterprice';

const WhyAcoflow = () => {
    const data = [
        {
            icon: <AiPowered />,
            title: 'AI-Powered Lead Generation',
            subtitle: 'Automatically capture high-intent leads using AI-driven algorithms that target the right prospects at the right time.'
        },
        {
            icon: <WorkflowAuto />,
            title: 'Dynamic Website Builder',
            subtitle: 'Create personalized, dynamic websites for your business in minutes, optimizing for lead conversion and customer engagement.'
        },
        {
            icon: <Colaborate />,
            title: 'Seamless Marketing Automation',
            subtitle: 'Automate your marketing campaigns across multiple platforms. Reach your prospects with personalized messages via email, social media, and SMS.'
        },
        {
            icon: <RichData />,
            title: 'Meta Marketing & Lead Tracking',
            subtitle: 'Optimize your ad campaigns with advanced tracking and analytics. Measure ROI across platforms like Facebook, Instagram, and Google Ads.'
        },
        {
            icon: <Enterprice />,
            title: 'Robust Analytics & Reporting',
            subtitle: 'Track, analyze, and improve lead generation performance. Gain insights into customer behavior and fine-tune your strategies effortlessly.'
        },
    ];
    
    return (
        <Box width="100%" mt={10} mb={10}>
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    fontWeight={700}
                    textAlign="center"
                    mb={6}
                >
                    Why AcoLead
                </Typography>

                <Grid container spacing={3} justifyContent="flex-start">
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                className="card-box"
                                sx={{
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
                                <Box>{item.icon}</Box>
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
