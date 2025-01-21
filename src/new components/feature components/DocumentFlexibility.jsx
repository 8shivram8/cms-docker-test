import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/AcoSignLogo.png';

const DocumentFlexibility = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const contentData = [
        {
            title: 'Dynamic Templates',
            subtitle: 'Tailor documents to fit any scenario with flexible, customizable templates.',
            details: [
                'Features: Add custom fields, adapt layouts, and reuse templates for various purposes.',
                'Use Cases: Contracts, invoices, consent forms, or any document requiring consistency and personalization.',
                'Benefit: Save time by reducing repetitive tasks and maintaining document standardization.'
            ]
        },
        {
            title: 'Version Control',
            subtitle: 'Maintain document accuracy and transparency with robust version management.',
            details: [
                'Features: Track revision history, compare changes between versions, and restore previous iterations as needed.',
                'Use Cases: Collaborative editing, contract negotiations, or iterative policy updates.',
                'Benefit: Minimize errors and confusion with a clear versioning system.'
            ]
        },
        {
            title: 'Approval Workflow',
            subtitle: 'Streamline document approvals with a fully customizable workflow system.',
            details: [
                'Routing Rules: Define conditions for automatic routing based on document type or status.',
                'Approval Stages: Set multiple approval layers with notifications at each step.',
                'Automatic Reminders: Keep processes on track with deadline alerts.',
                'Use Cases: Approval of contracts, financial documents, or internal policies.',
                'Benefit: Enhance collaboration and ensure documents are thoroughly vetted before finalization.'
            ]
        },
        {
            title: 'Group Participants',
            subtitle: 'Enable group-based collaboration for shared decision-making.',
            details: [
                'Features: Add multiple participants to a single document workflow, with options for group approvals or individual contributions.',
                'Use Cases: Team project reviews, committee decisions, or cross-department approvals.',
                'Benefit: Simplify processes where group consensus is required.'
            ]
        }
    ];    

    return (
        <Box>
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
                                                        color:theme.palette.text.secondary,
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

export default DocumentFlexibility;
