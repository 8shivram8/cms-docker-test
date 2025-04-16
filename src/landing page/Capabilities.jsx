import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import dashboardImg from '../assets/dashboard.jpeg'; // adjust path as needed
import MultiStep from './Icons/capability icons/MultiStep';
import Bulk from './Icons/capability icons/Bulk';
import NoCode from './Icons/capability icons/NoCode';
import Labeling from './Icons/capability icons/Labeling';

const Capabilities = () => {
    const capabilities = [
        {
            icon: <MultiStep />,
            title: 'Automated Lead Nurturing',
            subtitle: 'Set up multi-step lead nurturing campaigns to guide prospects from interest to conversion automatically.',
            color: '#1677F7',
        },
        {
            icon: <Bulk />,
            title: 'Bulk Lead Collection & Management',
            subtitle: 'Capture and manage large volumes of leads from multiple channels and ensure timely follow-ups with automated workflows.',
            color: '#8338EC',
        },
        {
            icon: <NoCode />,
            title: 'Marketing Automation',
            subtitle: 'Easily integrate with platforms like Facebook Ads, Google Analytics, and CRM systems without any coding knowledge.',
            color: '#FB5607',
        },
        {
            icon: <Labeling />,
            title: 'Custom Branding & Personalization',
            subtitle: 'Customize your lead generation forms, landing pages, and emails to reflect your brand and enhance customer experience.',
            color: '#F72585',
        },
    ];
    

    return (
        <Box sx={{ bgcolor: '#ECF4FF', py: 10 }}>
            <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
                Key Capabilities
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="center" px={{ xs: 2, md: 8 }}>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={dashboardImg}
                        alt="Capabilities"
                        sx={{
                            width: '100%',
                            borderRadius: 4,
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={3}
                        sx={{
                            maxWidth: '420px',
                            ml: 'auto',
                            mr: { xs: 2, md: 4 },
                        }}
                    >
                        {capabilities.map((cap, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    bgcolor: 'white',
                                    borderRadius: 2,
                                    borderLeft: `6px solid ${cap.color}`,
                                    p: 2.5,
                                    boxShadow: 1,
                                    transition: 'all 0.3s ease',
                                    transform: 'scale(1)',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <Box sx={{ mr: 2, mt: 0.5 }}>{cap.icon}</Box>
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        {cap.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {cap.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Capabilities;
