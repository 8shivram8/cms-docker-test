import React from 'react';
import { Box, Grid, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import IntegrationAnimatedText from '../../styled component/IntegrationAnimatedText';

const Onedrive = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { trackEvent } = useMixpanel();
    
    const contentData = [
        {
            title: 'Effortless Cloud Storage',
            subtitle:
                'Integrate OneDrive into your workflows for seamless cloud storage. Upload, manage, and share files securely within your organization, ensuring smooth collaboration and accessibility.',
        },
        {
            title: 'Automatic Sync & Backup',
            subtitle:
                'Keep your documents safe with automatic synchronization and backup. Any changes made in OneDrive are instantly reflected across all connected platforms, reducing data loss risks and improving efficiency.',
        },
        {
            title: 'Advanced Security & Access Control',
            subtitle:
                'Leverage OneDrive’s built-in security measures to control file access. Manage user permissions, share data securely, and maintain compliance with industry standards for a safe and efficient document management system.',
        },
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page');
    };
    
    const title = 'OneDrive Integration';
    const description = 'Enhance your document management experience with OneDrive integration. Securely store, manage, and collaborate on files with ease, ensuring efficiency and data protection across your workflows.';
    
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
                            <Box display="flex">
                                <IntegrationAnimatedText title={title} theme={theme} />
                            </Box>
                            <IntegrationAnimatedText description={description} theme={theme} />
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

export default Onedrive;