import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    useTheme,
    useMediaQuery,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';
import TickIcon from './icons/TickIcon';
import Plain1 from './icons/Plain1';
import Plain2 from './icons/Plain2';

const plans = [
    {
        planName: 'INDIVIDUAL PLAN',
        price: {
            perMonth: { rs: '₹2,500', usd: '$30' },
            perYear: { rs: '₹24,000', usd: '$290' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 1 User',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR INDIVIDUAL',
    },
    {
        planName: 'ESSENTIAL PLAN',
        price: {
            perMonth: { rs: '₹5,000', usd: '$60' },
            perYear: { rs: '₹50,000', usd: '$600' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 5 Users',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR ESSENTIAL',
    },
    {
        planName: 'SILVER PLAN',
        price: {
            perMonth: { rs: '₹10,000', usd: '$120' },
            perYear: { rs: '₹80,000', usd: '$950' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Includes 10 Users',
            '₹3,600 per additional user per year',
            'Free Support & Training',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR SILVER',
    },
    {
        planName: 'PLATINUM PLAN',
        price: {
            perMonth: { rs: '₹15,000', usd: '$180' },
            perYear: { rs: '₹120,000', usd: '$1,500' },
        },
        features: [
            '15 days free trial',
            'All Features + All Upcoming Feature Enhancements',
            'Unlimited Users',
            'Free Support & Training',
            'Email support during business hours.',
            'Includes Customization & Data Migration from your existing system or files',
        ],
        buttonLabel: 'SIGN UP FOR PLATINUM',
    },
];

const Plans = ({ country }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [billingCycle, setBillingCycle] = useState('year');

    return (
        <Box sx={{ width: '100%', py: 8, bgcolor: '#F9FBFF' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
                We have{' '}
                <Box component="span" sx={{ color: '#1677F7' }}>
                    plans
                </Box>{' '}
                for everyone!
            </Typography>

            {/* Toggle Billing Cycle */}
            <Box display="flex" justifyContent="center" mb={5}>
                <ToggleButtonGroup
                    exclusive
                    value={billingCycle}
                    onChange={(e, value) => value && setBillingCycle(value)}
                    sx={{
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    }}
                >
                    <ToggleButton
                        value="month"
                        sx={{
                            px: 3,
                            py: 1,
                            borderRadius: 0,
                            fontWeight: 600,
                            '&.Mui-selected': {
                                backgroundColor: '#1677F7',
                                color: '#fff',
                            },
                        }}
                    >
                        Monthly
                    </ToggleButton>
                    <ToggleButton
                        value="year"
                        sx={{
                            px: 3,
                            py: 1,
                            borderRadius: 0,
                            fontWeight: 600,
                            '&.Mui-selected': {
                                backgroundColor: '#1677F7',
                                color: '#fff',
                            },
                        }}
                    >
                        Annually
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    maxWidth: { xs: '100%', md: '1200px' },
                    mx: { xs: 0, md: 'auto' },
                }}
            >
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={6} key={index} sx={{ position: 'relative' }}>
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

                                {/* <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                        {plan.price[billingCycle === 'year' ? 'perYear' : 'perMonth'].rs}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#777', ml: 1 }}>
                                        /{billingCycle}
                                    </Typography>
                                </Box> */}
                                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                        {
                                            plan.price[billingCycle === 'year' ? 'perYear' : 'perMonth'][
                                            country === 'US' ? 'usd' : 'rs'
                                            ]
                                        }
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#777', ml: 1 }}>
                                        /{billingCycle}
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
