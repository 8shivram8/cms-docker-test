import React from 'react';
import { Grid, Typography, Box, IconButton, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Teams from './Custom Icons/Teams';
import Slag from './Custom Icons/Slag';
import Salesforce from './Custom Icons/Salesforce';
import HubIcon from './Custom Icons/HubIcon';
import Razor from './Custom Icons/Razor';
import { Stripe } from './Custom Icons/Stripe';

const integrationData = [
    { icon: <Teams />, name: 'Teams Integration', route: '/teams-integration' },
    { icon: <Slag />, name: 'Slack Integration', route: '/slack-integration' },
    { icon: <Salesforce />, name: 'Salesforce Integration', route: '/salesforce-integration' },
    { icon: <HubIcon />, name: 'HubSpot Integration', route: '/hubspot-integration' },
    { icon: <Razor />, name: 'Razorpay Integration', route: '/razorpay-integration' },
    { icon: <Stripe />, name: 'Stripe Integration', route: '/stripe-integration' }
];

const IntegrationPage = () => {
    const theme = useTheme();
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle navigation on box click
    const handleNavigate = (route) => {
        navigate(route); // Navigate to the route passed as an argument
    };

    return (
        <Box bgcolor="white" py={4} mt={3} mx={2}>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: 700,
                        marginBottom: 4,
                        fontSize: { xs: "25px", sm: "30px", md: "35px" },
                        backgroundImage: theme.palette.linearColor.gradient,
                        WebkitBackgroundClip: 'text',
                        color: "transparent",
                    }}
                >
                    Work Smarter Together
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" width="100%">
                <Grid container spacing={3} justifyContent="center" alignItems="center" maxWidth="md">
                    {integrationData.map((item, index) => (
                        <Grid item xs={6} sm={6} md={4} key={index} gap={2}>
                            <Box
                                bgcolor="white"
                                p={2}
                                display="flex"
                                flexDirection="column"
                                alignItems="left"
                                justifyContent="space-between"
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '5px',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                    },
                                    cursor: 'pointer', // Add cursor pointer for better UX
                                }}
                                onClick={() => handleNavigate(item.route)} // Call the navigate function on click
                            >
                                <Typography variant="h4">{item.icon}</Typography>
                                <Typography variant="body2" mt={1} align="left" fontWeight={700} fontSize={'18px'}>
                                    {item.name}
                                </Typography>
                                <IconButton
                                    sx={{ alignSelf: 'flex-end', mt: 1 }}
                                    size="large"
                                >
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default IntegrationPage;
