import React from 'react';
import { Box, Grid, Typography, Container, useTheme } from '@mui/material';
import AiPowered from './Icons/feature icons/AiPowered';
import Colaborate from './Icons/feature icons/Colaborate';
import WorkflowAuto from './Icons/feature icons/WorkflowAuto';
import RichData from './Icons/feature icons/RichData';
import Enterprice from './Icons/feature icons/Enterprice';

const WhyAcoflow = () => {
    const data = [
        {
            icon: <AiPowered />,
            title: 'AI Powered Form Creation',
            subtitle: 'Instantly convert PDFs, scanned documents, or templates into reusable digital forms.'
        },
        {
            icon: <WorkflowAuto />,
            title: 'End-to-End Workflow Automation',
            subtitle: 'Build multi-step, conditional approval flows with reminders, expiry actions, and declined routing. No coding or heavy SDK integrations needed.'
        },
        {
            icon: <Colaborate />,
            title: 'Collaborate Externally without Onboarding',
            subtitle: 'Share secure links via Email, WhatsApp, or SMS. Vendors, customers, or partners can fill out forms or eSign without logging into your systems.'
        },
        {
            icon: <RichData />,
            title: 'Rich Data Capture + eSignature',
            subtitle: 'Collect text, files, images, addresses, and more in one workflow. This is perfect for complex processes where more than just a signature is needed.'
        },
        {
            icon: <Enterprice />,
            title: 'Enterprise Grade Security & Compliance',
            subtitle: 'Full audit logs for every interaction. Track, review, and stay compliant with minimal effort.'
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
                    Why AcoFlow
                </Typography>

                <Grid
                    container
                    spacing={3}
                    justifyContent="flex-start"
                >
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
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
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                    },
                                }}
                            >
                                <Box>{item.icon}</Box>
                                <Typography variant="h6" fontWeight={600} ml={1}>
                                    {item.title}
                                </Typography>
                                <Typography fontSize={14} color="text.secondary" mt={1} ml={1}>
                                    {item.subtitle}
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
