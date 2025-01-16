import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const DocumentFlexibility = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const contentData = [
        {
            title: 'Dynamic Templates',
            subtitle: 'Create and manage dynamic document templates tailored to your specific needs. With custom fields and flexible layouts, users can adapt templates for a variety of purposes, from contracts to invoices, ensuring that all documents meet business requirements.',
        },
        {
            title: 'Version Control',
            subtitle: 'Easily manage document versions and track changes over time. Users can view revision history, compare versions, and restore earlier versions if necessary, ensuring document integrity and reducing the risk of errors or confusion.',
        },
        {
            title: 'Approval Workflow',
            subtitle: 'Streamline your document approval process with a customizable approval workflow. Set up routing rules, approval stages, and automatic notifications, ensuring that documents go through the necessary steps before finalization, making collaboration more efficient.',
        },
    ];

    return (
        <Box>
            <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    py: 1,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px',
                        ml: 8,
                    }}
                >
                    Coalitionify
                </Typography>
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
                                    Document Flexibility
                                </Typography>
                            </Box>
                            {!isMobile ? (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Document flexibility allows you to customize templates,<br />
                                    manage versions, and set up approval workflows.<br />
                                    From dynamic templates to detailed revision tracking,<br />
                                    ensure that every document process is optimized for your needs.
                                </Typography>
                            ) : (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Document flexibility allows you to customize templates, manage versions, and set up approval workflows.
                                    From dynamic templates to detailed revision tracking, ensure that every document process is optimized for your needs.
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

export default DocumentFlexibility;
