import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Link,
    useMediaQuery,
    useTheme,
    Divider,
} from '@mui/material';
import logo from '../assets/acolead-crm.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Insta from './icons/Insta';
import FaceBook from './icons/FaceBook';
import Linkdin from '../landing page/Icons/social media/Linkdin';
import Github from '../landing page/Icons/social media/Github';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
const Footer = ({ scrollToSection, handleScrollToForm }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };
    const handleNavigate = () => {
        navigate("/");
    };

    return (
        <Box sx={{ bgcolor: '#fff', color: '#000', py: 5, width: '100%', mt: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Section 1 - Logo and Copyright */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', px: 0 }}>
                            <Box
                                component="img"
                                src={logo}
                                alt="Logo"
                                sx={{
                                    width: 230,
                                    height: 'auto',
                                    mb: 2,
                                    cursor:'pointer'
                                }}
                                onClick={handleNavigate}
                            />
                            <Typography variant="body2" sx={{ mt: 0, ml: 2 }}>
                                &copy; {new Date().getFullYear()} , All Rights Reserved by AcoLead.
                            </Typography>
                        </Box>
                    </Grid>



                    {/* Section 3 - Actions */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Actions
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link onClick={handleScrollToForm} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Book a Demo</Link>
                            <Link underline="hover" href="https://app.crm.acolead.com/" color="inherit" target="_blank" sx={{ cursor: 'pointer' }}>Sign Up</Link>


                        </Box>
                    </Grid>

                    {/* Section 4 - Sections */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Sections
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link onClick={() => scrollToSection('plans')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Pricing</Link>
                            {/* <Link onClick={() => scrollToSection('plans')} underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>Subscription</Link> */}
                        </Box>
                    </Grid>

                    {/* Section 5 - Social Media */}
                    <Grid item xs={6} md={4}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Social Media
                        </Typography>
                        <Box display="flex" flexDirection="row" gap={1}>

                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href="https://www.linkedin.com/company/coalitionify-innovate"
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href="https://github.com/Coalitionify/"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href="https://www.facebook.com/profile.php?id=61576111686686"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href="https://www.instagram.com/coalitionify_acolead/"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href="https://api.whatsapp.com/send?phone=919158661188&text=I%20want%20to%20know%20more%20about%20your%20CRM%20?"
                                target="_blank"
                            >
                                <WhatsAppIcon />
                            </IconButton>



                        </Box>
                    </Grid>

                </Grid>
                <Divider sx={{ my: 2, mx: 2 }} />

                {/* Bottom Right Links */}
                <Box display="flex" justifyContent="flex-end" gap={3} px={2}>
                    <Link href="/privacy-policy" underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-use" underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>
                        Terms of Use
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
