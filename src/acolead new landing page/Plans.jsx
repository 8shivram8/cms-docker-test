import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, useTheme, useMediaQuery } from '@mui/material';
import TickIcon from './icons/TickIcon';
import Plain1 from './icons/Plain1';
import Plain2 from './icons/Plain2';

const plans = [
    {
        planName: 'PLATINUM PLAN',
        price: '₹120K',
        features: [
            'All Features + All Upcoming Feature Enhancements',
            'Unlimited Users',
            'Free Support & Training (via call or in-person)',
            'Email support during business hours.',
            'Includes Customisation & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR PLATINUM',
    },
    {
        planName: 'SILVER PLAN',
        price: '₹80K',
        features: [
            'All Features + All Upcoming Feature Enhancements',
            'Includes 10 Users',
            '3,600 per additional user per year',
            'Free Support & Training (via call or in-person)',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR SILVER',
    },
];

const Plans = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ width: '100%', py: 8, bgcolor: '#F9FBFF' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6 }}>
                We have{' '}
                <Box component="span" sx={{ color: '#1677F7' }}>
                    plans
                </Box>{' '}
                for everyone!
            </Typography>


            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    maxWidth: { xs: '100%', md: '1200px' },
                    mx: { xs: 0, md: 'auto' }
                }}

            >
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={6} key={index} sx={{ position: 'relative' }}>
                        {/* Floating SVGs */}
                        {index === 0 && !isMobile && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -40,
                                    left: -100,
                                    zIndex: 3,
                                }}
                            >
                                <Plain1 />
                            </Box>
                        )}
                        {index === 1 && !isMobile && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -50,
                                    right: -150,
                                    zIndex: 3,
                                }}
                            >
                                <Plain2 />
                            </Box>
                        )}

                        <Card
                            sx={{
                                borderRadius: 3,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                bgcolor: '#fff',
                                height: '100%',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    {plan.planName}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                        {plan.price}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#777', ml: 1 }}>
                                        /year
                                    </Typography>
                                </Box>

                                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                                    What's Included
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 3 }}>
                                    {plan.features.map((feature, i) => (
                                        <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ mr: 1 }}>
                                                <TickIcon />
                                            </Box>
                                            <Typography variant="body2" sx={{ color: '#555' }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderRadius: 3,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        borderColor: '#1677F7',
                                        color: '#1677F7',
                                        '&:hover': {
                                            borderColor: '#115ecf',
                                            backgroundColor: '#f0f7ff',
                                        },
                                    }}
                                >
                                    {plan.buttonLabel}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Plans;
