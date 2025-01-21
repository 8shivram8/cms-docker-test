import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText,ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/AcoSignLogo.png'
const Terms = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const sections = [
        {
            title: '1. Platform Use',
            subtitles: [
                'The Platform enables users to build dynamic forms, collect data, add payment fields, gather electronic signatures, and integrate via SDKs.',
                'Users are solely responsible for the accuracy and legality of the data they upload or share.',
            ],
        },
        {
            title: '2. Data Security and Compliance',
            subtitles: [
                'We ensure all data is encrypted with 256-bit encryption to safeguard against unauthorized access.',
                'Our Platform complies with HIPAA for managing sensitive health-related information.',
                'We strictly adhere to a No-Disclosure Policy, ensuring that your data is not shared or sold without your explicit consent.',
            ],
        },
        {
            title: '3. Subscription and Billing',
            subtitles: [
                'Plans: We offer monthly and yearly subscriptions, billed at the start of each billing cycle.',
                'Cancellation: Subscriptions can be canceled at any time, with services continuing until the end of the billing period.',
            ],
        },
        {
            title: '4. Multi-Level Workflows and Access Control',
            subtitles: [
                'The Platform supports complex workflows with role-based access for actors like HR, managers, and signatories.',
                'Users can define conditional rules, expiration periods, and notification settings for workflows.',
            ],
        },
        {
            title: '5. Limitations of Liability',
            subtitles: [
                'We are not liable for any losses resulting from user errors, such as uploading incorrect data or failing to meet legal obligations.',
            ],
        },
        {
            title: '6. Termination of Services',
            subtitles: [
                'We reserve the right to suspend or terminate accounts found in violation of these Terms.',
            ],
        },
        {
            title: '7. Governing Law',
            subtitles: [
                'These Terms are governed by the laws of Mumbai, Maharashtra, India.',
            ],
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    background: theme.palette.background.gradient,
                    color: 'white',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                {/* <Typography
                    variant="h6"
                    ml={4}
                    my={2}
                    sx={{
                        fontWeight: 600,
                        fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px',
                    }}
                >
                    Coalitionify
                </Typography> */}
                <img src={logo} width="140" height="auto" style={{marginLeft:5}}/>
            </Box>
            <Container
                maxWidth="md"
                sx={{
                    backgroundColor: 'white',
                    // borderRadius: 2,
                    // boxShadow: theme.shadows[2],
                    padding: 4,
                    // marginTop: 4,
                    textAlign: 'left',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px' }}
                >
                    Terms & Conditions
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                    sx={{ fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px' }}
                >
                    Effective Date: [Insert Date]
                </Typography>
                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        textAlign: 'justify',
                        wordBreak: 'break-word',
                        fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px',
                    }}
                >
                    These Terms & Conditions ("Terms") govern your use of Coalitionify Innovate Pvt Ltd's signature workflow platform ("Platform").
                    By using the Platform, you agree to these Terms.
                </Typography>
                {sections.map((section, index) => (
                    <Box key={index} sx={{ marginTop: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '18px' }}>
                            {section.title}
                        </Typography>
                        <List sx={{ paddingLeft: 2, }}>
                            {section.subtitles.map((subtitle, idx) => (
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
                                        primary={subtitle}
                                        sx={{
                                            textAlign: 'justify',
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
            </Container>
        </Box>
    );
};

export default Terms;
