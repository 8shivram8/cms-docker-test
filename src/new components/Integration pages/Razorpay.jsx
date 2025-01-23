import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/AcoSignLogo.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';

const Razorpay = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { trackEvent } = useMixpanel()
    const contentData = [
        {
            title: 'Seamless Payment Integration',
            subtitle:
                'Integrate Razorpay into your platform to enable secure and seamless payment processing. With a wide range of payment options including cards, UPI, wallets, and more, your customers can complete transactions effortlessly, ensuring a smooth checkout experience.',
        },
        {
            title: 'Automated Payment Workflows',
            subtitle:
                'Simplify payment management by automating payment workflows. Trigger payment notifications, generate invoices, and update transaction statuses directly within your workflows. This integration reduces manual effort and ensures real-time updates.',
        },
        {
            title: 'Detailed Transaction Insights',
            subtitle:
                'Gain comprehensive insights into your financial transactions with Razorpay integration. Track payments, analyze revenue trends, and generate detailed reports to make informed business decisions. Empower your team with actionable financial data.',
        },
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, ml: !isMobile ? 5 : 0, mr: 5, mt: 2 }}>
                <img
                    src={logo}
                    width="150"
                    height="auto"
                    alt="Logo"
                    style={{ cursor: 'pointer' }}
                    onClick={handleNavigate}
                />
            </Box>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box display="flex" alignItems="center">
                                <IconButton
                                    sx={{
                                        color: '#99A2AC',
                                        p: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    disableRipple
                                    onClick={() => {
                                        navigate(-1)
                                        trackEvent('Back button clicked')
                                    }}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="body1" sx={{ ml: 1, color: '#99A2AC' }}>
                                    Back
                                </Typography>
                            </Box>
                            <Box display="flex">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 600,
                                        backgroundImage: theme.palette.linearColor.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Razorpay Integration
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                Unlock the power of secure and efficient payment processing with Razorpay.
                                Streamline your financial operations, automate workflows, and gain real-time insights
                                into transactions to enhance your business growth.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <video
                                controls
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <source src="your-video-url.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mt: 4 }}>
                            {contentData.map((item, index) => (
                                <Box key={index} sx={{ mb: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'black',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 400,
                                            color: theme.palette.text.secondary,
                                            wordWrap: 'break-word',
                                            lineHeight: 1.6,
                                            mt: 1,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Razorpay;
