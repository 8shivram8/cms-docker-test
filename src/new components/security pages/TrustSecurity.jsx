import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, useMediaQuery,ListItemIcon, useTheme } from '@mui/material';
import logo from '../../assets/AcoSignLogo.png'
const TrustSecurity = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const sections = [
        {
            title: '1. Information We Collect',
            subtitles: [
                'Personal Information: Name, email address, phone number, payment information, and billing details.',
                'Document and Form Data: Information uploaded to the Platform, including forms, signatures, and associated metadata.',
                'Audit Logs: Time-stamped logs of actions related to document creation, editing, sharing, and signing.',
                'Usage Data: IP addresses, device types, browser versions, and interaction data.',
            ],
        },
        {
            title: '2. How We Use Your Information',
            subtitles: [
                'Provide core services like form building, document creation, signature collection, and payment processing.',
                'Maintain audit trails for legal and regulatory compliance.',
                'Analyze Platform usage for performance improvements and troubleshooting.',
                'Communicate updates, support information, and subscription-related notifications.',
            ],
        },
        {
            title: '3. Data Security and Retention',
            subtitles: [
                'Encryption: All customer data is encrypted with 256-bit encryption, both at rest and in transit, to ensure the highest level of security.',
                'HIPAA Compliance: We adhere to HIPAA regulations to protect sensitive health-related information.',
                'Retention: User data, including documents and logs, is stored securely for up to 5 years after the termination of your subscription.',
                'Access Control: Only authorized personnel have access to your encrypted data, strictly following our No-Disclosure Policy.',
            ],
        },
        {
            title: '4. Data Sharing',
            subtitles: [
                'Data is shared only with trusted third-party service providers (e.g., payment gateways) to facilitate essential services.',
                'No data is sold or disclosed to unauthorized third parties.',
            ],
        },
        {
            title: '5. Your Rights',
            subtitles: [
                'Access or delete your personal data.',
                'Opt out of non-essential communications.',
                'Submit complaints to info@coalitionify.com regarding data usage or security.',
            ],
        },
        {
            title: '6. Changes to This Policy',
            subtitles: [
                'We may revise this Privacy Policy from time to time. Continued use of the Platform constitutes acceptance of these changes.',
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
                    Trust and Security
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
                    Coalitionify Innovate Pvt Ltd ("we," "our," or "us") is committed to protecting the privacy and security of
                    our users ("you," "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our signature workflow platform ("Platform").
                </Typography>
                {sections.map((section, index) => (
                    <Box key={index} sx={{ marginTop: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '18px' }}>
                            {section.title}
                        </Typography>
                        <List sx={{ paddingLeft: 2,}}>
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

export default TrustSecurity;
