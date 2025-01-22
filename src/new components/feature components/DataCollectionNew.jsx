import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/AcoSignLogo.png';

const DataCollectionNew = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const contentData = [
        {
            title: 'Embed Input Fields',
            subtitle: 'Easily integrate customizable input fields directly into your PDFs or digital forms, allowing for precise data collection.',
            details: [
                'Supported Fields: Text fields, radio buttons, checkboxes, and dropdown menus.',
                'Use Cases: Perfect for forms requiring structured responses, such as consent forms, feedback surveys, or application submissions.'
            ]
        },
        {
            title: 'Image Capture',
            subtitle: 'Enable users to upload images directly as part of the workflow, ensuring authenticity and relevance.',
            details: [
                'Features: Support for live image capture or upload from devices.',
                'Use Cases: ID verification, incident reporting, or adding visual proof for a process.'
            ]
        },
        {
            title: 'File Upload with Versioning',
            subtitle: 'Simplify document management with robust file upload capabilities and version control.',
            details: [
                'Features: Allow users to upload multiple versions of a file while maintaining a clear version history for tracking changes.',
                'Use Cases: Contract amendments, policy updates, or collaborative document editing.'
            ]
        },
        {
            title: 'Multimedia Input',
            subtitle: 'Support advanced data collection with audio and video input fields, catering to diverse user needs.',
            details: [
                'Features: Users can record or upload audio and video clips directly within the workflow.',
                'Use Cases: Video interviews, customer feedback in multimedia formats, or voice-recorded instructions.'
            ]
        }
    ];

    const handleNavigate = () => {
        navigate('/');
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
                                    <List sx={{ paddingLeft: 2 }}>
                                        {item.details.map((detail, idx) => (
                                            <ListItem
                                                key={idx}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    paddingLeft: 0,
                                                    paddingY: 0.5,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 'auto',
                                                        marginRight: '10px',
                                                        marginTop: '8px',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: '6px',
                                                            height: '6px',
                                                            backgroundColor: 'black',
                                                            borderRadius: '50%',
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    secondary={detail} // text before ":"

                                                    sx={{
                                                        textAlign: 'justify',
                                                        color: theme.palette.text.secondary,
                                                        margin: 0,
                                                        lineHeight: 1,
                                                        fontSize: isMobile ? '10px' : isTablet ? '12px' : '12px',
                                                        fontFamily: 'Poppins, sans-serif',
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
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
