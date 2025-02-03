import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme,Link, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import img from '../../assets/sign.jpeg';
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { scroller } from 'react-scroll';
const EngineeringConstruction = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel();
    
    const contentData = [
        {
            title: "AI-Driven Project Design & Planning",
            subtitle: "",
            details: [
                "Automated design suggestions using AI tools based on project scope.",
                "AI-assisted cost estimations with historical project data.",
                "Real-time project risk assessment powered by machine learning."
            ]
        },
        {
            title: "Construction Workforce Optimization with AI",
            subtitle: "",
            details: [
                "AI predicts labor requirements based on project size and complexity.",
                "AI-driven scheduling adjusts based on weather, workforce, and resource availability.",
                {
                    subtitle: "Key areas of focus:",
                    details: [
                        "Labor Allocation (30 pts) → Efficient deployment of workers.",
                        "Safety Compliance (30 pts) → Ensuring compliance with safety protocols.",
                        "Cost Control (20 pts) → Managing project budgets effectively.",
                        "Material Availability (20 pts) → Optimizing supply chain for material procurement."
                    ]
                }
            ]
        },
        {
            title: "Real-Time Progress Monitoring & ERP Integration",
            subtitle: "",
            details: [
                "Real-time project status updates based on sensor data and AI insights.",
                "Medium-complexity projects are flagged for manual checks.",
                "Seamless ERP Integration → Works with SAP, Oracle, or custom systems."
            ]
        }
    ];    

    const keychallenges = [
        'Manual planning processes result in time delays and inefficiencies.',
        'Difficulty in predicting labor requirements and project timelines.',
        'Safety violations and non-compliance risks on construction sites.',
        'Unforeseen cost overruns due to improper budget allocation.'
    ];
    const benefits = [
        'No Need for ERP Access → Construction firms submit project data securely via Coalitionify.',
        'Faster Project Qualification → AI auto-checks project details, reducing manual reviews.',
        'More Accurate Risk Assessment → AI compares against past high-performing projects.',
        'Automated Compliance & Financial Checks → Flags high-risk projects before approval.',
        'Stronger Project Stability → Project managers receive only reliable, pre-qualified contractors.'
    ];

    const handleNavigate = () => {
        navigate('/');
        trackEvent('move to home page');
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
                                        navigate(-1);
                                        trackEvent('back button clicked');
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
                                    Transforming Engineering & Construction
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
                                   The Challenges of Traditional Project Management
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
                                    Engineering and construction projects are complex, with numerous moving parts. Traditional project management methods struggle to predict labor needs, stay within budget, and ensure safety compliance.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Engineering and construction projects are complex, with numerous moving parts. Traditional project management methods struggle to predict labor needs, stay within budget, and ensure safety compliance.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={img}
                                alt="Engineering and Construction"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    objectFit: 'cover',
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
                               Introducing Coalitionify: AI-Powered Project Optimization
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '16px',
                                    color: 'text.secondary',
                                }}
                            >
                               Our platform leverages AI, machine learning, and real-time data to automate construction planning, optimize labor allocation, and ensure safety compliance, resulting in streamlined project delivery.
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
                                                                fontSize: isMobile ? '10px' : isTablet ? '16px' : '38px',
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
                                                                            fontSize: isMobile ? '10px' : isTablet ? '16px' : '38px',
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
                            <Typography variant="body1" sx={{ color: 'text.primary', mt: 1,mb:3 }}>
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

export default EngineeringConstruction;
