import React, { useEffect, useState } from 'react';
import { Grid, Typography, ToggleButton, ToggleButtonGroup, Box, useTheme, Button, useMediaQuery } from '@mui/material';
import Dinero from 'dinero.js';
import Free from '../Custom Icons/Free';
import Standered from '../Custom Icons/Standered';
import Proffesional from '../Custom Icons/Proffesional';
import Enterprice from './Enterprice';
import PricingTable from './PricingTable';
import PricingTableMobile from './PricingTableMobile';

const planData = {
    monthly: [
        {
            title: 'Free',
            price: '0',
            icon: <Free />,
            longDescription: 'The Basic Plan is perfect for small teams who need simple features to get started. Includes basic support and limited integrations.',
        },
        {
            title: 'Standard',
            price: '18',
            icon: <Standered />,
            longDescription: 'The Pro Plan offers advanced features like priority support, advanced analytics, and more integrations to help your team scale efficiently.',
        },
        {
            title: 'Professional',
            price: '40',
            icon: <Proffesional />,
            longDescription: 'The Enterprise Plan includes all features, enterprise-grade security, dedicated account management, and custom solutions tailored to your needs.',
        },
    ],
    annually: [
        {
            title: 'Free',
            price: '0',
            icon: <Free />,
            longDescription: 'The Basic Plan is ideal for startups and small businesses that need essential features. Enjoy basic support and access to core tools.',
        },
        {
            title: 'Standard',
            price: '300',
            icon: <Standered />,
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

const Plans = ({ selectedCountry }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [currencySymbol, setCurrencySymbol] = useState('');
    const [updatedPlanData, setUpdatedPlanData] = useState(planData);

    const handleToggleChange = (event, newPlan) => {
        if (newPlan) {
            setSelectedPlan(newPlan);
        }
    };
    const exchangeRates = {
        US: 1,
        IN: 86.41,
        GB: 0.75,
        JP: 110,
        CA: 1.25,
        AU: 1.35,
        EU: 0.85,
        CN: 6.5,
        KR: 1300,
        SG: 1.35,
        RU: 75,
        SA: 3.75,
        AE: 3.67,
        MX: 19.5,
        BR: 5.2,
        ZA: 18.5,
        TH: 33.2,
        MY: 4.2,
        ID: 14.5
    };


    useEffect(() => {
        const currencyMap = {
            IN: '₹',  // Indian Rupee
            GB: '£',  // British Pound
            US: '$',  // US Dollar
            JP: '¥',  // Japanese Yen
            CA: 'C$', // Canadian Dollar
            AU: 'A$', // Australian Dollar
            EU: '€',  // Euro
            CN: '¥',  // Chinese Yuan
            KR: '₩',  // South Korean Won
            SG: 'S$', // Singapore Dollar
            RU: '₽',  // Russian Ruble
            SA: '﷼',  // Saudi Riyal
            AE: 'د.إ', // UAE Dirham
            MX: '$',  // Mexican Peso
            BR: 'R$', // Brazilian Real
            ZA: 'R',  // South African Rand
            TH: '฿',  // Thai Baht
            MY: 'RM', // Malaysian Ringgit
            ID: 'Rp', // Indonesian Rupiah
        };

        const countryCurrency = currencyMap[selectedCountry];
        setCurrencySymbol(countryCurrency);

        const convertPrices = () => {
            const convertedPlans = { ...planData };

            ['monthly', 'annually'].forEach((planType) => {
                convertedPlans[planType] = convertedPlans[planType].map(plan => {
                    const amountInUSD = parseFloat(plan.price);
                    const convertedAmount = Dinero({ amount: amountInUSD * 100 })
                        .multiply(exchangeRates[selectedCountry] || 1)
                        .toFormat('0,0.00');
                    return { ...plan, price: convertedAmount };
                });
            });

            setUpdatedPlanData(convertedPlans);
        };

        convertPrices();
    }, [selectedCountry]);

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
                        textAlign: 'center',
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

            <Grid item mt={2}>
                <ToggleButtonGroup
                    value={selectedPlan}
                    exclusive
                    onChange={handleToggleChange}
                    sx={{
                        padding: 0,
                        '& .MuiToggleButton-root': {
                            padding: '8px 16px',
                            fontWeight: 'bold',
                            backgroundColor: 'lightgray',
                            color: 'black',
                            borderRadius: 0,
                            '&.Mui-selected': {
                                backgroundColor: 'black',
                                color: 'white',
                            },
                        },
                    }}
                >
                    <ToggleButton value="monthly" sx={{ textTransform: 'none' }}>Monthly</ToggleButton>
                    <ToggleButton value="annually" sx={{ textTransform: 'none' }}>Annually</ToggleButton>
                </ToggleButtonGroup>
            </Grid>


            <Grid container spacing={2} justifyContent="center" mb={3}>
                {updatedPlanData[selectedPlan].map((plan, index) => (
                    <Grid item xs={12} sm={4} key={index} m={isMobile ? 2 : isTablet ? 2 : 0}>
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
                                justifyContent: 'space-between',
                            }}
                        >

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '16px' }}>
                                    {plan.title}
                                </Typography>
                                <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {plan.icon}
                                </Box>
                            </Box>


                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                                {currencySymbol} {plan.price}
                                <Typography
                                    variant="body2"
                                    component="span"
                                    sx={{ fontWeight: 'light', fontSize: '0.85rem', marginLeft: 0.5 }}
                                >
                                    {selectedPlan === 'monthly' ? '/month' : '/year'}
                                </Typography>
                            </Typography>


                            <Typography variant="body2" sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }}>
                                {plan.longDescription}
                            </Typography>


                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: 'black',
                                    color: 'black',
                                    textTransform: 'none',
                                    marginTop: 2,
                                }}
                                target='_blank'
                                href="https://app.coalitionify.com/signIn"
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {!isMobile && !isTablet ? (
                <PricingTable />
            ) :
                (<PricingTableMobile />)
            }
            <Enterprice />
        </Grid>
    );
};

export default Plans;
