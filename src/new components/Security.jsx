import React from 'react';
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import sign from '../assets/sign.jpeg';
import { useMixpanel } from '../mixpanel/MixpanelContext';

const Security = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const {trackEvent}=useMixpanel()
    const securityPoints = [
        'ISO/IEC 27001: International standard for information security management.',
        'GDPR Compliance: Ensuring user data privacy and security in the EU.',
        'SOC 2 Type II: Rigorous audits for data handling, ensuring confidentiality, integrity, and availability.',
        'HIPAA Compliance: For handling sensitive healthcare information securely.',
        'CSA STAR Certification: Industry standard for cloud security assurance.',
        'APEC CBPR Certification: Upholding data privacy across the Asia-Pacific region.',
    ];
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(0.68deg, #FFFFFF 5.11%, #A2CAFF 153.72%)',
                py: 5,
                display: 'flex',
                justifyContent: 'center',
                mt: 5
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: 3, md: 12 } }}>
                <Grid container spacing={4} alignItems="center" >
                    <Grid item xs={12} md={8} display={'flex'} flexDirection={'column'}>
                        <Box display={'flex'} justifyContent={'left'}>
                            <Typography
                                variant="h4"
                                align="left"
                                sx={{
                                    fontWeight: 700,
                                    marginBottom: 4,
                                    fontSize: { xs: "25px", sm: "30px", md: "35px" },
                                    backgroundImage: theme.palette.linearColor.gradient,
                                    backgroundImage: theme.palette.linearColor.gradient,
                                    WebkitBackgroundClip: 'text',
                                    color: "transparent",
                                }}
                            >
                                Our Commitment to Security
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            Our platform meets or exceeds global security and compliance standards to ensure your data and documents are always safe:
                        </Typography>
                        {securityPoints.map((point, index) => (
                            <Box
                                key={index}
                                mt={1}
                                mb={1}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center', // Ensure both icon and text are vertically aligned
                                    flexDirection: 'row',
                                    width: '100%',
                                }}
                            >
                                <CheckCircleIcon sx={{ color: 'black', fontSize: 18, mr: 1 }} />
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 500,
                                        textAlign: 'left',
                                        whiteSpace: 'normal',
                                        color: 'black',
                                        whiteSpace: 'normal',
                                        overflowWrap: 'break-word',
                                        wordBreak: 'break-word',
                                        display: 'inline',
                                        minWidth: 0,
                                    }}
                                >
                                    {point}
                                </Typography>
                            </Box>
                        ))}

                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography
                                variant="subtitle1"
                                color="#1677F7"
                                sx={{
                                    fontSize: '18px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline', // Optional, for a hover effect
                                    },
                                }}
                                onClick={() => {
                                    handleLinkClick('/trust-security')
                                    trackEvent('move to trust and security page')
                                }}
                            >
                                Learn more about trust and security at Acosign
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize: '16px', marginLeft: '8px', color: '#1677F7' }} />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="subtitle1"
                                color="#1677F7"
                                sx={{
                                    fontSize: '18px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline', // Optional, for a hover effect
                                    },
                                }}
                                onClick={() => {
                                    handleLinkClick('/e-signature-legality')
                                    trackEvent('move to e-signature legality page')
                                }}
                            >
                                Learn about E-signature legality in India
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize: '16px', marginLeft: '8px', color: '#1677F7' }} />
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent={!isMobile ? "right" : "center"}>
                        <Box
                            component="img"
                            src={sign}
                            alt="Security illustration"
                            sx={{
                                width: 350,
                                height: 420,
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Security;
