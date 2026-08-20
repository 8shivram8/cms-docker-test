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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
import { AppStoreButton, PlayStoreButton } from '../components/StoreButtons';
import { APP_URLS } from '../utils';

const Footer = ({ scrollToSection, handleScrollToForm }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                bgcolor: '#fff',
                color: '#000',
                py: 5,
                width: '100%',
                mt: 3,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Logo */}
                    <Grid item xs={12} md={3.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="Logo"
                                onClick={handleNavigate}
                                sx={{
                                    width: 230,
                                    height: 'auto',
                                    cursor: 'pointer',
                                }}
                            />

                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 0.5,
                                    ml: { xs: 0, md: 2.5 },
                                    color: '#555',
                                    fontSize: '0.95rem',
                                    fontFamily: 'Times New Roman", serif',
                                    textAlign: {
                                        xs: 'center',
                                        md: 'left',
                                    },
                                }}
                            >
                                Product by{' '}
                                <Link
                                    href={APP_URLS.coalitionifyWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    color="inherit"
                                    sx={{
                                        fontWeight: 500,
                                    }}
                                >
                                    Coalitionify Innovate
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Actions */}
                    <Grid
                        item
                        xs={12}
                        md={2}
                        sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            },
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Actions
                        </Typography>

                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={1}
                            alignItems={{
                                xs: 'center',
                                md: 'flex-start',
                            }}
                        >
                            <Link
                                onClick={handleScrollToForm}
                                underline="hover"
                                color="inherit"
                                sx={{ cursor: 'pointer' }}
                            >
                                Book a Demo
                            </Link>
                        </Box>
                    </Grid>

                    {/* Social Media */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            },
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Social Media
                        </Typography>

                        <Box
                            display="flex"
                            flexDirection="row"
                            gap={1}
                            justifyContent={{
                                xs: 'center',
                                md: 'flex-start',
                            }}
                        >
                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href={APP_URLS.coalitionifyLinkedin}
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </IconButton>

                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href={APP_URLS.coalitionifyFacebook}
                                target="_blank"
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href={APP_URLS.coalitionifyInstagram}
                                target="_blank"
                            >
                                <InstagramIcon />
                            </IconButton>

                            <IconButton
                                sx={{ color: 'black' }}
                                component="a"
                                href={APP_URLS.coalitionifyWhatsApp}
                                target="_blank"
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={3.5}
                        container
                        direction={'row'}
                        spacing={2}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        <PlayStoreButton />
                        <AppStoreButton />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2, mx: 2 }} />

                {/* Bottom Section */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                        px: 2,
                    }}
                >
                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            },
                            width: {
                                xs: '100%',
                                md: 'auto',
                            },
                        }}
                    >
                        &copy; {new Date().getFullYear()} All Rights Reserved by
                        AcoLead.
                    </Typography>

                    {/* Footer Links */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            justifyContent: {
                                xs: 'center',
                                md: 'flex-end',
                            },
                            width: {
                                xs: '100%',
                                md: 'auto',
                            },
                        }}
                    >
                        <Link
                            href="/privacy-policy"
                            underline="hover"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-of-use"
                            underline="hover"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms of Use
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;