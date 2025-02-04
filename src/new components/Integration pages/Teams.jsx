import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import IntegrationAnimatedText from '../../styled component/IntegrationAnimatedText';

const Teams = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { trackEvent } = useMixpanel()
    const contentData = [
        {
            title: 'Seamless Collaboration',
            subtitle:
                'Integrate Microsoft Teams into your workflows to elevate team collaboration and efficiency. Share documents effortlessly, hold discussions directly within Teams channels, and manage workflows without switching between applications. This integration ensures that every team member stays on the same page and can contribute effectively, fostering a cohesive and productive work environment.',
        },
        {
            title: 'Real-Time Notifications',
            subtitle:
                'Never miss an update with real-time notifications integrated into Microsoft Teams. Get instant alerts for approvals, status changes, or any critical updates related to your workflows. This feature ensures you are always informed and can act promptly, reducing delays and keeping your projects on track. With customizable notifications, you can prioritize what matters most to you and your team.',
        },
        {
            title: 'Effortless Integration',
            subtitle:
                'Connect seamlessly with your existing Microsoft Teams environment. This integration supports single sign-on (SSO) for secure and hassle-free access to your tools and data. Leverage Teams as a central hub for all your operations, enabling you to streamline processes, improve communication, and enhance overall productivity. Setup is straightforward, so you can start reaping the benefits immediately without technical complexities.',
        },
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };
    const title='Teams Integration'
    const description='Unlock the full potential of your workflows with Microsoft Teams integration. Simplify collaboration,stay informed with instant updates, and manage your operations from a single, unified platform.This integration empowers your team to work smarter and achieve better results.'
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
                            {/* <Box display="flex" alignItems="center">
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
                            </Box> */}
                            <Box display="flex">
                                <IntegrationAnimatedText title={title} theme={theme}/>
                            </Box>
                            <IntegrationAnimatedText description={description} theme={theme}/>
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

export default Teams;
