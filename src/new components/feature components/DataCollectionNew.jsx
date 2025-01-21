import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/AcoSignLogo.png'

const DataCollectionNew = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const contentData = [
        {
            title: 'Data Capture',
            subtitle: 'Efficient data collection is essential for accurate insights. Our platform allows users to capture essential data from various sources in real time, ensuring that every decision is based on the latest information. From form-based inputs to sensor data, we handle it all.',
        },
        {
            title: 'Data Validation',
            subtitle: 'Ensure the integrity of the data being collected with built-in validation mechanisms. Users can set rules for required fields, data formats, and consistency checks, preventing errors and improving the quality of the collected data.',
        },
        {
            title: 'Data Integration',
            subtitle: 'Seamlessly integrate the collected data with other platforms or systems. Our solution supports a wide range of integrations, including APIs, webhooks, and data export features, allowing users to streamline their workflows and enhance the value of the collected data.',
        },
    ];

    return (
        <Box>
            {/* <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    py: 1,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                  <img src={logo} width="140" height="auto" style={{marginLeft:5}}/>
            </Box> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, ml: !isMobile ? 5 : 0, mr: 5, mt: 2 }}>
                <img src={logo} width="150" height="auto" />
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
                                    onClick={() => navigate(-1)}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="body1" sx={{ ml: 1, color: '#99A2AC' }}>
                                    Back
                                </Typography>
                            </Box>
                            <Box display={'flex'}>
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
                                    Data Collection
                                </Typography>
                            </Box>
                            {!isMobile ? (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Data collection is crucial for accurate decision-making, enabling businesses to capture real-time information.<br />
                                    From form-based inputs to sensor data, our platform makes it easy to gather, validate, and integrate data into your systems.<br />
                                    Seamlessly integrate with various platforms for enhanced workflows and data quality.
                                </Typography>
                            ) : (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Data collection is crucial for accurate decision-making, enabling businesses to capture real-time information.
                                    From form-based inputs to sensor data, our platform makes it easy to gather, validate, and integrate data into your systems.
                                    Seamlessly integrate with various platforms for enhanced workflows and data quality.
                                </Typography>
                            )}
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

export default DataCollectionNew;
