import React, { useEffect, useState } from 'react';
import { Grid, Typography, ToggleButton, ToggleButtonGroup, Box, Paper, useTheme, Button, useMediaQuery } from '@mui/material';
import Free from '../Custom Icons/Free';
import Standered from '../Custom Icons/Standered';
import Proffesional from '../Custom Icons/Proffesional';
import Enterprice from './Enterprice';
const Plans = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm","xs"));
     const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [currencySymbol, setCurrencySymbol] = useState('');
    const handleToggleChange = (event, newPlan) => {
        if (newPlan) {
            setSelectedPlan(newPlan);
        }
    };

    const planData = {
        monthly: [
            {
                title: 'Free',
                price: '0',
                icon: <Free />, // Adding icon for Basic Plan
                longDescription: 'The Basic Plan is perfect for small teams who need simple features to get started. Includes basic support and limited integrations.',
            },
            {
                title: 'Standered',
                price: '18',
                icon: <Standered />, // Adding icon for Pro Plan
                longDescription: 'The Pro Plan offers advanced features like priority support, advanced analytics, and more integrations to help your team scale efficiently.',
            },
            {
                title: 'Professional',
                price: '40',
                icon: <Proffesional />, // Adding icon for Enterprise Plan
                longDescription: 'The Enterprise Plan includes all features, enterprise-grade security, dedicated account management, and custom solutions tailored to your needs.',
            },
        ],
        annually: [
            {
                title: 'Free',
                price: '100',
                icon: <Free />, // Adding icon for Basic Plan
                longDescription: 'The Basic Plan is ideal for startups and small businesses that need essential features. Enjoy basic support and access to core tools.',
            },
            {
                title: 'Standered',
                price: '300',
                icon: <Standered />, // Adding icon for Pro Plan
                longDescription: 'The Pro Plan provides advanced features, such as detailed reporting, additional integrations, and priority support for growing teams.',
            },
            {
                title: 'Professional',
                price: '600',
                icon: <Proffesional />,
                longDescription: 'The Enterprise Plan offers everything you need to scale your business, including unlimited integrations, enterprise-level security, and dedicated support.',
            },
        ],
    };
    useEffect(() => {
        // Function to detect the currency symbol based on the user's locale
        const detectCurrencySymbol = () => {
          const userLocale = navigator.language; // Get the user's browser language (e.g., en-US, en-GB, hi-IN)
          const region = userLocale.split('-')[1]; // Extract the region code (e.g., US, IN)
    
          let currencyCode;
    
          // Map region codes to currency codes and symbols
          switch (region) {
            case 'IN':  // India
              currencyCode = 'INR';
              break;
            case 'GB':  // United Kingdom
              currencyCode = 'GBP';
              break;
            case 'US':  // United States
              currencyCode = 'USD';
              break;
            case 'JP':  // Japan
              currencyCode = 'JPY';
              break;
            case 'CA':  // Canada
              currencyCode = 'CAD';
              break;
            case 'AU':  // Australia
              currencyCode = 'AUD';
              break;
            default:
              currencyCode = 'USD'; // Default to USD for other cases
              break;
          }
          const formatter = new Intl.NumberFormat(userLocale, {
            style: 'currency',
            currency: currencyCode,
          });
          const symbol = formatter.format(1).replace(/\d/g, '').trim();
          setCurrencySymbol(symbol);
        };
    
        detectCurrencySymbol();
      }, []);
    
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: '1100px', width: '100%', margin: '0 auto', gap: 2, mt: 7, mb: 5 }}
        >
            {/* Title */}
            <Grid item>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        marginBottom: 1,
                        fontSize: { xs: '25px', sm: '30px', md: '35px' },
                        color: 'black',

                        textAlign: 'center', // Ensures text is centered
                    }}
                >
                    Find the <span style={{ color: '#1677F7' }}>perfect plan</span>
                    <br />
                    for your needs
                </Typography>
                <Typography variant="h6" align="center" sx={{ color: 'gray', fontWeight: 400, fontSize: '15px' }}>
                    Select AcoSign plans that match your goals
                </Typography>
            </Grid>

            {/* Toggle Button */}
            <Grid item mt={2}>
                <ToggleButtonGroup
                    value={selectedPlan}
                    exclusive
                    onChange={handleToggleChange}
                    sx={{
                        // Remove the border and padding from the ToggleButtonGroup
                        padding: 0,
                        '& .MuiToggleButton-root': {
                            padding: '8px 16px',
                            fontWeight: 'bold',
                            backgroundColor: 'lightgray', // Default background for unselected
                            color: 'black', // Default text color
                            borderRadius: 0, // Remove border radius from the buttons
                            '&.Mui-selected': {
                                backgroundColor: 'black', // Selected background color
                                color: 'white', // Text color for selected button
                            },
                        },
                    }}
                >
                    <ToggleButton value="monthly" sx={{textTransform:'none'}}>Monthly</ToggleButton>
                    <ToggleButton value="annually" sx={{textTransform:'none'}}>Annually</ToggleButton>
                </ToggleButtonGroup>
            </Grid>

            {/* Plan Boxes */}
            <Grid container spacing={2} justifyContent="center" mb={3}>
                {planData[selectedPlan].map((plan, index) => (
                    <Grid item xs={12} sm={4} key={index} m={isMobile ? 2 : isTablet ? 2 : 0 }>
                        <Box
                            sx={{
                                padding: 2,
                                border: '1px solid #e0e0e0',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                height: '100%',
                                textAlign: 'left',
                                cursor: 'pointer',
                                justifyContent: 'space-between', // This ensures the button is at the bottom
                            }}
                        >
                            {/* Title and Icon */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '16px' }}>
                                    {plan.title}
                                </Typography>
                                <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {plan.icon}
                                </Box>
                            </Box>

                            {/* Price */}
                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                                {currencySymbol}{plan.price}
                                <Typography
                                    variant="body2"
                                    component="span"
                                    sx={{ fontWeight: 'light', fontSize: '0.85rem', marginLeft: 0.5 }}
                                >
                                    {selectedPlan === 'monthly' ? '/month' : '/year'}
                                </Typography>
                            </Typography>

                            {/* Long Description */}
                            <Typography variant="body2" sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }}>
                                {plan.longDescription}
                            </Typography>

                            {/* Get Started Button */}
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: 'black', // Set border color to black
                                    color: 'black',
                                    textTransform: 'none',
                                    marginTop: 2, // Add space between the description and the button
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        <Enterprice/>

        </Grid>
    );
};

export default Plans;
