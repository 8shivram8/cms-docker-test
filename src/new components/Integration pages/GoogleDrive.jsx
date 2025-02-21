import React from 'react';
import { Box, Grid, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import IntegrationAnimatedText from '../../styled component/IntegrationAnimatedText';

const GoogleDrive = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { trackEvent } = useMixpanel();
    
    const contentData = [
        {
            title: 'Seamless File Management',
            subtitle:
                'Integrate Google Drive into your workflows to enhance file storage and collaboration. Easily upload, organize, and share documents directly within your application. Ensure team members have access to the latest files, improving efficiency and coordination.',
        },
        {
            title: 'Real-Time Sync',
            subtitle:
                'Stay up-to-date with real-time synchronization between Google Drive and your workflows. Any changes made in Drive are instantly reflected, keeping your documents current and reducing manual updates.',
        },
        {
            title: 'Secure Access & Sharing',
            subtitle:
                'Leverage Google Drive’s robust security features to control file access. Manage permissions, restrict sharing, and ensure that sensitive data is only accessible to authorized users. This integration guarantees a secure and streamlined document management experience.',
        },
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page');
    };
    
    const title = 'Google Drive Integration';
    const description = 'Optimize document storage and collaboration with Google Drive integration. Easily manage, share, and access files securely, ensuring seamless teamwork and efficiency across your workflows.';
    
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
                        {/* <Box>
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
                        </Box> */}
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

export default GoogleDrive;
