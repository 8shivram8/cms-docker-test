import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';
import centerimg from '../assets/centerimg.png';
// import centerVideo from '../assets/home.mp4'
import centerVideo from '../assets/home1.mp4'
import signatureImg from '../assets/digisign.jpg'; // Add your signature image here
import backgroundImg from '../assets/bgimage1.png';
import { Container, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '@fontsource/dancing-script';

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                borderRadius: !isMobile ? 9 : 'none',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: !isMobile ? 'calc(100% - 80px) calc(100% - 100px)' : 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: !isMobile ? 9 : 'none',
                    zIndex: -1,
                },
            }}
        >
            <Box
                position="sticky"
                sx={{
                    backgroundColor: 'white',
                    padding: '10px 0',
                    borderRadius: '15px',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
                    margin: '15px',
                    width: '100%',
                    maxWidth: '1100px',
                }}
            >
                <Grid container alignItems="center" justifyContent="space-between" sx={{ paddingX: 2 }}>
                    <Grid item xs={6} md={3} display="flex" alignItems="center">
                        {isMobile && (
                            <IconButton onClick={handleDrawerToggle} sx={{ marginRight: '10px' }}>
                                <MenuIcon />
                            </IconButton>
                        )}
                        <img src={Logo} alt="Colitionify Logo" height={40} style={{ marginRight: '10px' }} />
                    </Grid>
                    {!isMobile && (
                        <Grid item md={6} display="flex" justifyContent="center">
                            <Stack direction="row" spacing={3}>
                                <Link to="home" smooth={false} duration={500}>
                                    <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Home</Button>
                                </Link>
                                <Link to="about" smooth={false} duration={500}>
                                    <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>About Us</Button>
                                </Link>
                                <Link to="features" smooth={false} duration={300}>
                                    <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Features</Button>
                                </Link>
                                <Link to="pricing" smooth={false} duration={300}>
                                    <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Pricing</Button>
                                </Link>
                                <Link to="contact" smooth={false} duration={500}>
                                    <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Contact Us</Button>
                                </Link>
                            </Stack>
                        </Grid>
                    )}
                    <Grid item xs={6} md={3} display="flex" justifyContent="flex-end">
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                backgroundColor: 'black',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#007BFF',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'white',
                        color: 'black',
                        paddingTop: 2,
                        paddingBottom: 2,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                }}
            >
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        padding: 2,
                        alignItems: 'center',
                        '& .MuiButton-root': {
                            color: 'black',
                            textTransform: 'none',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: '0.3s ease',
                            '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        },
                    }}
                >
                    <Link to="home" smooth={false} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<HomeIcon sx={{ color: '#1F75FE' }} />}>Home</Button>
                    </Link>
                    <Link to="about" smooth={false} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<InfoIcon sx={{ color: '#1F75FE' }} />}>About Us</Button>
                    </Link>
                    <Link to="features" smooth={false} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<StarIcon sx={{ color: '#1F75FE' }} />}>Features</Button>
                    </Link>
                    <Link to="pricing" smooth={false} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<MonetizationOnIcon sx={{ color: '#1F75FE' }} />}>Pricing</Button>
                    </Link>
                    <Link to="contact" smooth={false} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<ContactMailIcon sx={{ color: '#1F75FE' }} />}>Contact Us</Button>
                    </Link>
                </Stack>
            </Drawer>

            <Container maxWidth="md">
                <Stack
                    textAlign="center"
                    sx={{
                        color: '#fff',
                        padding: { xs: '40px 10px', sm: '50px 15px', md: '60px 20px' },
                    }}
                >
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 500, color: 'black', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                        Streamline Your Projects Efficiently with Colitionify
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ color: 'black', margin: '0 auto', fontWeight: 300, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                        Create forms and manage workflows effortlessly. Colitionify centralizes collaboration with digital signatures and real-time updates.
                    </Typography>
                    <Grid item xs={6} md={3} display="flex" flexDirection="column" alignItems="center" mt={3}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                backgroundColor: 'black',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#007BFF',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                        {/* Signature Section */}
                        {/* <Box mt={2} display="flex" flexDirection="column" alignItems="center" textAlign="center">
                            <img src={signatureImg} alt="Digital Signature" style={{ width: '120px', opacity: 0.8, marginBottom: '5px' }} />
                            <Typography variant="h6" paragraph sx={{ color: 'black', margin: '0 auto', fontWeight: 300 }}>
                                Empowering your projects with secure,{' '}
                                <span style={{
                                    fontFamily: 'Dancing Script, cursive', // Font style for signature effect
                                    fontSize: '1.6rem',
                                    fontWeight: 'bold',
                                    color: '#1F75FE',
                                }}>
                                    digital  signatures
                                </span>.
                            </Typography>
                        </Box> */}
                    </Grid>
                </Stack>
            </Container>

            <Box display="flex" justifyContent="center" alignItems="center" maxWidth={600} mt={0}>
                <video
                    src={centerVideo}  // Make sure 'centerVideo' is the path to your video file
                    alt="Demo Display Video"
                    style={{
                        borderRadius: '10px',
                        width: '100%',
                        height: 'auto',
                    }}
                    autoPlay  // Optional: if you want the video to autoplay
                    loop    // Optional: if you want the video to loop
                    muted   // Optional: if you want the video to be muted
                    // controls  // Optional: if you want video controls (play, pause, volume, etc.)
                    sizes="(max-width: 400px) 100vw, (max-width: 800px) 80vw, 500px"
                />
            </Box>


        </Box>
    );
}
export default Header;
