import { Box, Container, Grid, Typography, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';
import logo from '../assets/acolead-crm.png';
import Linkdin from './Icons/social media/Linkdin';
import Insta from './Icons/social media/Insta';
import Facebook from './Icons/social media/Facebook';
import Github from './Icons/social media/Github';

const Footer = ({ scrollToSection }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <Box sx={{ color: 'black', py: 5, width: '100%', mt: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    {/* Section 1 - Logo, Tagline, Socials */}
                    <Grid item xs={12} md={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                            <Box sx={{ mb: 2 }}>
                                <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
                            </Box>
                            <Typography variant="body2" sx={{ mb: 2, maxWidth: 220 }}>
                            Automate Your Lead Generation & Marketing
                            Faster, Smarter, and Fully Automated
                            </Typography>
                            <Box>
                                {/* <IconButton color="inherit" href="#"><Facebook /></IconButton>
                                <IconButton color="inherit" href="#"><Twitter /></IconButton>
                                <IconButton color="inherit" href="#"><Instagram /></IconButton>
                                <IconButton color="inherit" href="#"><LinkedIn /></IconButton> */}
                                <IconButton
                                    sx={{ color: '#767E94' }}
                                    component="a"
                                    href=""
                                    target="_blank"
                                >
                                    <Insta />
                                </IconButton>
                                <IconButton
                                    sx={{ color: '#767E94' }}
                                    component="a"
                                    href=""
                                    target="_blank"

                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    sx={{ color: '#767E94' }}
                                    component="a"
                                    href="https://www.linkedin.com/company/coalitionify-innovate"
                                    target="_blank"
                                >
                                    <Linkdin />
                                </IconButton>
                                <IconButton
                                    sx={{ color: '#767E94' }}
                                    component="a"
                                    href="https://www.npmjs.com/package/coalitionify-sdk"
                                    target="_blank"

                                >
                                    <Github />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Section 2 - Company */}
                    <Grid item xs={6} md={4}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Company</Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link onClick={() => scrollToSection('why')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Why AcoLead</Link>
                            {/* <Link onClick={() => scrollToSection('industries')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Industries</Link> */}
                            <Link onClick={() => scrollToSection('capabilities')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Features</Link>
                            {/* <Link onClick={() => scrollToSection('plans')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Pricing</Link> */}
                            {/* <Link onClick={() => scrollToSection('why')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Blog</Link> */}

                            {
                                isMobile && (
                                    <Box mt={4}>
                                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Help</Typography>
                                        <Box display="flex" flexDirection="column" gap={1}>
                                            <Link onClick={() => { handleLinkClick('/privacy') }} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Privacy Policy</Link>
                                            <Link onClick={() => { handleLinkClick('/terms-conditions') }} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Terms and Conditions</Link>
                                        </Box>
                                    </Box>
                                )
                            }

                        </Box>
                    </Grid>

                    {/* Section 3 - We Serve */}
                    {/* <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>We Serve</Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link color="inherit" underline='none'>Clinical Research</Link>
                            <Link color="inherit" underline='none'>Real Estate</Link>
                            <Link color="inherit" underline='none'>Staffing and HR</Link>
                            <Link color="inherit" underline='none'>Manufacturing and Retail</Link>
                            <Link color="inherit" underline='none'>Logistics and Transport</Link>
                            <Link color="inherit" underline='none'>Healthcare</Link>
                            <Link color="inherit" underline='none'>BFSI</Link>
                            <Link color="inherit" underline='none'>Education</Link>
                        </Box>
                    </Grid> */}

                    {/* Section 4 - Help */}
                    {
                        !isMobile && (
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Help</Typography>
                                <Box display="flex" flexDirection="column" gap={1}>
                                    <Link onClick={() => {
                                        handleLinkClick('/privacy')
                                    }} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Privacy Policy</Link>
                                    <Link onClick={() => {
                                        handleLinkClick('/terms-conditions')
                                    }} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Terms and Conditions</Link>
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>

                {/* Footer Bottom */}
                <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid #444' }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} ,All Rights Reserved by AcoLead.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
