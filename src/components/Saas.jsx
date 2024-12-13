import React from 'react';
import { Container, Divider, Typography, Box } from '@mui/material';

const Saas = () => {
    return (
        <Box width={'100%'}
            sx={{ bgcolor: '#f3f4f6', mt: 5 }}
        >
            <Box sx={{ m: 3 }}>
                <Typography variant="h4" align="center" sx={{ mb: 2, color: 'primary.main' }}>
                    Software as a Service
                </Typography>
                <Typography variant="h6" align="center" sx={{ mb: 3 }}>
                    A modern, cloud-based approach to delivering software.
                </Typography>
                <Typography variant="body1" align="left" sx={{ color: '#333', lineHeight: 1.8 }}>
                    Software as a Service (SaaS) is a cloud-based software delivery model where applications
                    are hosted by a service provider and made available to customers over the internet. This
                    model eliminates the need for on-premise installation, maintenance, and IT infrastructure
                    management, providing users with scalable and cost-effective software solutions. SaaS enables
                    businesses to access tools and services without worrying about updates, security patches, or downtime.
                </Typography>
            </Box>


            <Box sx={{ m: 3 }}>
                <Typography variant="h4" align="center" sx={{ mb: 2, color: 'primary.main' }}>
                    Enterprise On Premise
                </Typography>
                <Typography variant="h6" align="center" sx={{ mb: 3}}>
                    Traditional deployment for businesses needing full control.
                </Typography>
                <Typography variant="body1" align="left" sx={{ color: '#333', lineHeight: 1.8 }}>
                    Enterprise On Premise refers to the traditional model of deploying software and IT infrastructure
                    within an organization's own data centers or physical premises. In this approach, businesses
                    manage their software, hardware, and network configurations internally. While this model offers
                    greater control over security and data privacy, it requires significant upfront investment in infrastructure,
                    ongoing maintenance, and dedicated IT teams to ensure proper functioning and updates.
                </Typography>
            </Box>
        </Box>

    );
};

export default Saas;
