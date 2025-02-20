import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent, Divider, Button } from "@mui/material";
import Free from "../Custom Icons/Free";
import Standered from "../Custom Icons/Standered";
import Proffesional from "../Custom Icons/Proffesional";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const pricedata = [
    { feature: 'projects', free: 'Unlimited', standard: '20 (max)', premium: 'Unlimited' },
    { feature: 'jobs', free: 'Unlimited', standard: '100 per project(max)', premium: 'Unlimited' },
    { feature: 'Standard form fields', free: true, standard: true, premium: true },
    { feature: 'Multimedia input field', free: true, standard: true, premium: true },
    { feature: 'Custom branding', free: true, standard: true, premium: true },
    { feature: 'Advanced analytics', free: true, standard: true, premium: true },
    { feature: 'Team collaboration', free: true, standard: true, premium: true },
    { feature: 'Email notifications', free: true, standard: true, premium: true },
    { feature: 'API access', free: true, standard: true, premium: true },
    { feature: '24/7 support', free: true, standard: true, premium: true },
    { feature: 'Priority support', free: true, standard: true, premium: true },
    { feature: 'Additional storage', free: true, standard: true, premium: true },
    { feature: 'Advanced security', free: true, standard: true, premium: true },
];
const plans = [
    { plan: "Free", icon: <Free /> },
    { plan: "Standard", icon: <Standered /> },
    { plan: "Premium", icon: <Proffesional /> }
];

const renderValue = (value) => {
    if (value === true) {
        return <CheckCircleIcon sx={{ fontSize: 18 }} />;
    }
    if (value === false) {
        return <Box sx={{ width: 18, height: 17, visibility: 'hidden' }} />;
    }
    return value;
};


const PricingTableMobile = () => {
    const [showAll, setShowAll] = useState({ Free: false, Standard: false, Premium: false });

    const handleToggle = (plan) => {
        setShowAll((prev) => ({ ...prev, [plan]: !prev[plan] }));
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card variant="outlined">
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                        {plan.plan}
                                    </Typography>
                                    <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {plan.icon}
                                    </Box>
                                </Box>
                                <Divider sx={{ mt: 1 }} />
                                {pricedata.slice(0, showAll[plan] ? pricedata.length : 5).map((item, idx) => (
                                    <Box key={idx} display="flex" justifyContent="space-between" my={1}>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.feature}
                                        </Typography>
                                        <Typography variant="body2">{renderValue(item[plan.plan.toLowerCase()])}</Typography>
                                    </Box>
                                ))}
                                <Box display="flex" justifyContent="flex-end" mt={2}>
                                    <Button
                                        disableRipple
                                        disableFocusRipple
                                        color="black"
                                        sx={{ textTransform: 'none' }}
                                        onClick={() => handleToggle(plan)}
                                    >
                                        {showAll[plan] ? "Show Less" : "Show More"}
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingTableMobile;
