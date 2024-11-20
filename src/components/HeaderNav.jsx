import { Box, Grid, Stack, Button, IconButton, Drawer, useMediaQuery, Container } from '@mui/material';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function HeaderNav() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            alignSelf={'center'}
            position="sticky"
            top={0}
            zIndex={1000}
            width="100%" // Set the width to 100% to make it responsive
            maxWidth="1100px" // Optionally set a max width for larger screens
            sx={{
                backgroundColor: 'white',
                padding: '10px 0',
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
                borderRadius: '15px',
                margin: '15px auto', // Automatically center and add margin for spacing
            }}
        >
            <Grid container alignItems="center" justifyContent="space-between" sx={{ paddingX: 2 }}>
                {/* Left Logo and Drawer Icon for Mobile */}
                <Grid item xs={6} md={3} display="flex" alignItems="center">
                    {isMobile && (
                        <IconButton onClick={handleDrawerToggle} sx={{ marginRight: '10px' }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <img src={Logo} alt="Colitionify Logo" height={40} style={{ marginRight: '10px' }} />
                </Grid>

                {/* Navbar Links for Desktop */}
                {!isMobile && (
                    <Grid item md={6} display="flex" justifyContent="center">
                        <Stack direction="row" spacing={3}>
                            <Link to="home" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Home</Button>
                            </Link>
                            <Link to="about" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>About Us</Button>
                            </Link>
                            <Link to="features" smooth={true} duration={300}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Features</Button>
                            </Link>
                            <Link to="pricing" smooth={true} duration={300}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Pricing</Button>
                            </Link>
                            <Link to="contact" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Contact Us</Button>
                            </Link>
                        </Stack>
                    </Grid>
                )}

                {/* Login Button */}
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

            {/* Drawer for Mobile/Tablet View */}
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
                    <Link to="home" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<HomeIcon sx={{ color: '#1F75FE' }} />}>Home</Button>
                    </Link>
                    <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<InfoIcon sx={{ color: '#1F75FE' }} />}>About Us</Button>
                    </Link>
                    <Link to="features" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<StarIcon sx={{ color: '#1F75FE' }} />}>Features</Button>
                    </Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<MonetizationOnIcon sx={{ color: '#1F75FE' }} />}>Pricing</Button>
                    </Link>
                    <Link to="contact" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<ContactMailIcon sx={{ color: '#1F75FE' }} />}>Contact Us</Button>
                    </Link>
                </Stack>
            </Drawer>
        </Box>
    );
}

export default HeaderNav;
