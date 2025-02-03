import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, Link, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import img from '../../assets/sign.jpeg'
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { scroller } from 'react-scroll';
const RealEstate = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const contentData = [
        {
            title: "AI-Powered Lead Submission & Qualification",
            subtitle: "",
            details: [
                "External brokers submit leads via secure links (no CRM access required).",
                "AI auto-fills missing data and detects anomalies.",
                "Financial details, property preferences, and history are validated instantly."
            ]
        },
        {
            title: "Lead Scoring with AI & Vector Search",
            subtitle: "",
            details: [
                "OpenAI-powered intent detection identifies serious buyers.",
                "Vector search matches new leads against past successful buyers.",
                {
                    subtitle: "Score breakdown:",
                    details: [
                        "Financial Eligibility (30 pts) → Budget, credit check.",
                        "Lead Intent (30 pts) → Urgency, interest.",
                        "Engagement & Behavior (20 pts) → CRM activity, inquiries.",
                        "Market Factors (20 pts) → Location demand, trends."
                    ]
                }
            ]
        },
        {
            title: "AI-Based Lead Routing & CRM Integration",
            subtitle: "",
            details: [
                "High-scoring leads (80+) are auto-routed to sales teams.",
                "Medium-scoring leads (50-80) go to pre-sales nurturing.",
                "CRM-agnostic → Integrates with Salesforce, HubSpot, or custom CRMs."
            ]
        }
    ];

    const keychallenges = [
        'Features: Add custom fields, adapt layouts, and reuse templates for various purposes.',
        'Use Cases: Contracts, invoices, consent forms, or any document requiring consistency and personalization.',
        'Benefit: Save time by reducing repetitive tasks and maintaining document standardization.'
    ]
    const benefits = [
        'No Need for CRM Access → Brokers submit leads securely via Coalitionify.',
        'Faster Lead Verification → AI auto-checks lead details, reducing manual reviews.',
        'More Accurate Lead Scoring → AI compares against past high-converting leads.',
        'Financial Eligibility Assessment → Flags leads that don’t meet budget requirements.',
        'Higher Conversion Rates → Sales teams receive only highly qualified leads.'
    ];
    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page')
    };

   const handleBookDemo = () => {
           navigate('/');
           setTimeout(() => {
               scroller.scrollTo('contactForm', {
                   duration: 1200,
                   smooth: true,
               });
           }, 500); 
       };

    const handleTalkExpert = () => {
        console.log("Talk to an expert clicked");
        // Add your navigation or API call here
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
                                        trackEvent('back button clicked')
                                    }}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="body1" sx={{ ml: 1, color: '#99A2AC' }}>
                                    Back
                                </Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
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
                                    Revolutionizing Real Estate Lead Management
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mt: 2,
                                        fontWeight: 200,
                                        backgroundImage: theme.palette.linearColor.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    The Problem with Traditional Lead Qualification
                                </Typography>

                            </Box>
                            {!isMobile ? (
                                <Typography variant="h6" 
                                sx={{ 
                                  mt: 2, 
                                  color: '#99A2AC', 
                                  lineHeight: 1.6, 
                                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" } 
                                }}>
                                    Real estate agencies receive thousands of property inquiries from websites, social media, and partner referrals. However, most CRM solutions are designed for in-house sales teams, making third-party broker collaboration tedious.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Real estate agencies receive thousands of property inquiries from websites, social media, and partner referrals. However, most CRM solutions are designed for in-house sales teams, making third-party broker collaboration tedious.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={img}
                                alt="Description"
                                style={{
                                    width: '100%',
                                    height: '300px', // Adjust height as needed
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    objectFit: 'cover', // Ensures the image fills the space without distortion
                                }}
                            />
                        </Box>


                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mt: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 500,
                                    color: 'black',
                                }}
                            >
                                Key Challenges:
                            </Typography>
                            <List sx={{ paddingLeft: 2, paddingTop: 1, paddingBottom: 0 }}>
                                {keychallenges.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingLeft: 0,
                                            paddingY: 0.2,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 'auto',
                                                marginRight: '6px',
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
                                            primary={item}
                                            sx={{
                                                color: 'text.secondary',
                                                margin: 0,
                                                lineHeight: 1.2,
                                                fontSize: isMobile ? '10px' : isTablet ? '12px' : '12px',
                                                fontFamily: 'Poppins, sans-serif',
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 500,
                                    color: 'black',
                                }}
                            >
                                Introducing Coalitionify: AI-Powered Real Estate Lead Qualification
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '16px',
                                    color: 'text.secondary',
                                }}
                            >
                                Our platform leverages AI, vector databases, and financial analysis to automate lead verification, improve scoring accuracy, and optimize routing for higher conversion rates.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 500,
                                    color: 'black',
                                    mt: 3
                                }}
                            >
                                🔹 How It Works
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                {contentData.map((item, index) => (
                                    <Box key={index} sx={{ mb: 3 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 400,
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

                                                textAlign: 'left',
                                            }}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                        <List sx={{ paddingLeft: 2 }}>
                                            {item.details.map((detail, idx) => (
                                                typeof detail === 'string' ? (
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
                                                            primary={detail}
                                                            sx={{
                                                                textAlign: 'justify',
                                                                color: theme.palette.text.secondary,
                                                                margin: 0,
                                                                lineHeight: 1,
                                                                fontSize: isMobile ? '10px' : isTablet ? '16px' : '38px', // Larger font size for details
                                                                fontFamily: 'Poppins, sans-serif',
                                                            }}
                                                        />
                                                    </ListItem>
                                                ) : (
                                                    <Box key={idx} sx={{ paddingLeft: 4 }}>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 400,
                                                                color: theme.palette.text.secondary,
                                                                lineHeight: 1.6,
                                                                marginBottom: 1,
                                                                display: 'flex',
                                                                alignItems: 'left',
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
                                                            {detail.subtitle}
                                                        </Typography>
                                                        <List sx={{ paddingLeft: 2 }}>
                                                            {detail.details.map((subDetail, subIdx) => (
                                                                <ListItem
                                                                    key={subIdx}
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
                                                                        primary={subDetail}
                                                                        sx={{
                                                                            textAlign: 'justify',
                                                                            color: theme.palette.text.secondary,
                                                                            margin: 0,
                                                                            lineHeight: 1,
                                                                            fontSize: isMobile ? '10px' : isTablet ? '16px' : '38px', // Larger font size for details
                                                                            fontFamily: 'Poppins, sans-serif',
                                                                        }}
                                                                    />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                )
                                            ))}
                                        </List>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ mt: 4 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 500,
                                        color: 'black',
                                    }}
                                >
                                   🚀 Why Choose Coalitionify?
                                </Typography>

                                <List sx={{ paddingLeft: 2, paddingTop: 1, paddingBottom: 0 }}>
                                    {benefits.map((benefit, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                paddingLeft: 0,
                                                paddingY: 0.5,
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 'auto',
                                                    marginRight: '10px',
                                                }}
                                            >
                                                <CheckCircleIcon sx={{ color: 'green', fontSize: '16px' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={benefit}
                                                sx={{
                                                    textAlign: 'left',
                                                    color: 'text.secondary',
                                                    margin: 0,
                                                    lineHeight: 1.5,
                                                    fontSize: '16px',
                                                    fontFamily: 'Poppins, sans-serif',
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>


                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                🎯 Ready to Transform Your Lead Management?
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                                🚀 Start using AI to qualify and route leads efficiently.
                            </Typography>

                            {/* Action Links */}
                            <Typography variant="body1" sx={{ color: 'text.primary', mt: 1, mb: 3 }}>
                                <Link
                                    sx={{ cursor: 'pointer', mr: 3 }}
                                    onClick={handleBookDemo}
                                >
                                    📩 Book a Demo
                                </Link>
                                <Link
                                    sx={{ cursor: 'pointer' }}
                                    onClick={handleBookDemo}
                                >
                                    📞 Talk to an Expert
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default RealEstate;
