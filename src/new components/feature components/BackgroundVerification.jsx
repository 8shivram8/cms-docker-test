import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery, List, Link, Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import img from '../../assets/sign.jpeg'
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { scroller } from 'react-scroll';

const BackgroundVerification = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()

    const contentData = [
        {
            title: "Automated Employee Background Checks",
            subtitle: "",
            details: [
                "Seamless integration with recruitment platforms for automatic background check initiation.",
                "AI-driven analysis of past employment, criminal records, and educational background.",
                "Real-time reports and alerts on verification status."
            ]
        },
        {
            title: "AI-Powered Risk Assessment & Scoring",
            subtitle: "",
            details: [
                "OpenAI-powered scoring models assess candidates' risk based on background data.",
                "Profiles are scored for reliability, criminal activity, and past employment integrity.",
                {
                    subtitle: "Score breakdown:",
                    details: [
                        "Criminal History (40 pts) → Past convictions, warrants, or legal issues.",
                        "Employment History (30 pts) → Job gaps, past performance, and references.",
                        "Education Verification (20 pts) → Validity of degrees, institutions, and certifications.",
                        "Reliability & Trustworthiness (10 pts) → Consistency and trust in previous employers."
                    ]
                }
            ]
        },
        {
            title: "Instant Background Report Generation",
            subtitle: "",
            details: [
                "Generate complete background reports within minutes.",
                "Includes criminal records, employment history, and education verification.",
                "All data is securely stored and easily accessible through the HR dashboard."
            ]
        }
    ];

    const keychallenges = [
        'Manual background checks are time-consuming and error-prone.',
        'Difficulty in tracking and managing employee verification statuses.',
        'Inconsistent data quality across different verification sources.',
        'Challenges in ensuring privacy and compliance during the verification process.'
    ]
    const benefits = [
        'No Need for CRM Access → HR submits candidate data securely via Coalitionify.',
        'Faster Background Checks → AI auto-checks candidate details, reducing manual reviews.',
        'More Accurate Risk Assessment → AI compares against past high-performing employees.',
        'Automated Compliance & Financial Checks → Flags high-risk candidates before hiring.',
        'Stronger Employee Stability → HR teams receive only reliable, pre-qualified candidates.'
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
                                    Transforming Employee Background Verification
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
                                    The Challenges of Traditional HR Background Checks
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
                                    HR departments often face slow, manual background checks, leading to delays in the hiring process. Traditional methods involve inconsistent data collection, making it harder to track the verification progress.
                                </Typography>
                            ) : (
                                <Typography variant="h6" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    HR departments often face slow, manual background checks, leading to delays in the hiring process. Traditional methods involve inconsistent data collection, making it harder to track the verification progress.
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
                                Introducing Coalitionify: Automated Employee Background Verification
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '16px',
                                    color: 'text.secondary',
                                }}
                            >
                                Our platform uses AI-powered algorithms to automate employee background checks, assess risks, and ensure data integrity for a faster and more accurate hiring process.
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

                            <Box
                                sx={{
                                    mt: 4,
                                    border: '1px solid #e0e0e0', // Light border around the component
                                    padding: 2, // Padding around the whole component
                                    borderRadius: '8px', // Optional: rounded corners
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 500,
                                        color: 'black',
                                        textAlign: 'center', // Center the title
                                    }}
                                >
                                    🚀 Why Choose Coalitionify?
                                </Typography>

                                <List sx={{ paddingLeft: 3, paddingTop: 1, paddingBottom: 0 }}>
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
                            <Typography variant="body1" sx={{ color: 'text.primary', mt: 1, mb: 8 }}>
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

export default BackgroundVerification;
