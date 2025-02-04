import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import IntegrationAnimatedText from '../../styled component/IntegrationAnimatedText';

const Salesforce = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { trackEvent } = useMixpanel()
    const contentData = [
        {
            title: 'Streamlined Data Management',
            subtitle:
                'Integrate Salesforce to streamline data management and enhance CRM processes. Automatically sync customer information, update leads, and manage accounts without manual intervention. With this integration, you can ensure your data is accurate and accessible, reducing errors and saving valuable time.',
        },
        {
            title: 'Automated Workflow Updates',
            subtitle:
                'Enable automated workflow updates directly in Salesforce. Trigger actions such as status changes, task assignments, or email notifications based on specific events. This integration keeps your CRM system in sync with your workflows, ensuring everyone is up-to-date and tasks are completed on time.',
        },
        {
            title: 'Enhanced Sales Insights',
            subtitle:
                'Gain deeper insights into your sales performance by integrating Salesforce data with your workflows. Track metrics, generate reports, and analyze trends effortlessly. This integration empowers your team to make informed decisions, optimize strategies, and improve overall sales effectiveness.',
        },
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };
     const title='Salesforce Integration'
    const description='Maximize your CRM capabilities with Salesforce integration. Sync data, automate workflows,and gain actionable insights to improve sales performance and streamline operations.Unlock the potential of your Salesforce environment today.'

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

export default Salesforce;
