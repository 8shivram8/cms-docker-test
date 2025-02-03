import React from 'react';
import { Box, Grid, Container, Typography, IconButton, Link, useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png'
import img from '../../assets/sign.jpeg'
import { useMixpanel } from '../../mixpanel/MixpanelContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { scroller } from 'react-scroll';
const SupplyChain = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const contentData = [
        {
            title: "AI-Powered Vendor Submission & Qualification",
            subtitle: "",
            details: [
                "External vendors submit compliance and financial data via secure links (no ERP access required).",
                "AI auto-fills missing fields and detects inconsistencies.",
                "Supplier certifications, financial stability, and compliance records are instantly validated."
            ]
        },
        {
            title: "Vendor Scoring with AI & Vector Search",
            subtitle: "",
            details: [
                "OpenAI-powered analysis identifies high-risk or unreliable suppliers.",
                "Vector search matches new vendors against past successful partnerships.",
                {
                    subtitle: "Score breakdown:",
                    details: [
                        "Financial Stability (30 pts) → Credit checks, payment history.",
                        "Compliance & Certification (30 pts) → Regulatory adherence, ISO/industry certifications.",
                        "Reliability & Performance (20 pts) → Past order fulfillment rates, issue resolution.",
                        "Supply Chain Impact (20 pts) → Risk assessment, geographical dependencies."
                    ]
                }
            ]
        },
        {
            title: "AI-Based Vendor Routing & ERP Integration",
            subtitle: "",
            details: [
                "High-scoring vendors (80+) are auto-routed for contract approvals.",
                "Medium-scoring vendors (50-80) require additional verification.",
                "Seamless ERP Integration → Works with SAP, Oracle, NetSuite, or custom procurement systems."
            ]
        }
    ];

    const keychallenges = [
        'External vendors don’t have direct ERP access.',
        'Manual verification wastes time on unqualified suppliers.',
        'No automated compliance or financial checks, leading to risk exposure.',
        'Vendor performance and reliability are unclear, affecting supply chain stability.'
    ]
    const benefits = [
        'No Need for ERP Access → Vendors submit compliance and financial data securely via Coalitionify.',
        'Faster Vendor Qualification → AI auto-checks vendor details, reducing manual reviews.',
        'More Accurate Risk Assessment → AI compares against past high-performing vendors.',
        'Automated Compliance & Financial Checks → Flags high-risk vendors before onboarding.',
        'Stronger Supply Chain Stability → Procurement teams receive only reliable, pre-qualified vendors.'
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
                                    Revolutionizing Vendor & Supplier Management
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
                                    The Problem with Traditional Vendor Qualification
                                </Typography>

                            </Box>
                            {!isMobile ? (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Manufacturing and supply chain organizations work with numerous vendors, suppliers, and logistics partners. However, most ERP and procurement systems are designed for internal teams, making third-party vendor collaboration slow and inefficient.
                                </Typography>
                            ) : (
                                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                                    Manufacturing and supply chain organizations work with numerous vendors, suppliers, and logistics partners. However, most ERP and procurement systems are designed for internal teams, making third-party vendor collaboration slow and inefficient.
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
                                Introducing Coalitionify: AI-Powered Vendor Qualification & Compliance
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '16px',
                                    color: 'text.secondary',
                                }}
                            >
                                Our platform leverages AI, vector databases, and financial analysis to automate vendor qualification, improve scoring accuracy, and optimize procurement decision-making for a more reliable supply chain.
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
                                🎯 Ready to Transform Your Vendor & Supplier Management?
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                                🚀 Start using AI to qualify and onboard vendors efficiently.
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
                                    onClick={handleTalkExpert}
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

export default SupplyChain;
