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
import { Height } from '@mui/icons-material';

function HeaderNav() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            alignSelf="center"
            position="sticky"
            top={0}
            zIndex={1000}
            width="100%"
            sx={{
                bgcolor:'white',
                padding: '6px 0',
                borderBottom: '1px solid #ddd',
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
                        <Stack direction="row" gap={4}>
                            <Link to="home" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Home</Button>
                            </Link>
                            <Link to="about" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>About Us</Button>
                            </Link>
                            <Link to="Products" smooth={true} duration={300}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Products</Button>
                            </Link>
                            <Link to="pricing" smooth={true} duration={300}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Resources</Button>
                            </Link>
                            <Link to="pricing" smooth={true} duration={500}>
                                <Button color="inherit" sx={{ textTransform: 'none', fontSize: '1rem' }}>Pricing</Button>
                            </Link>
                        </Stack>
                    </Grid>
                )}

                {/* Login Button */}
                <Grid item xs={6} md={3} display="flex" justifyContent="flex-end">
                    <Button
                        color="inherit"
                        sx={{ marginLeft: 2, textTransform: 'none', fontSize: '1rem', }} // Add space between logo and button

                        href="#signin"

                    >
                        Contact us
                    </Button>
                    <Button
                        color="primary"
                        sx={{ marginLeft: 2, textTransform: 'none', fontSize: '1rem', }} // Add space between logo and button
                        variant="contained"
                        href="#signin"

                    >
                        Sign In
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
                    <Link to="Products" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<StarIcon sx={{ color: '#1F75FE' }} />}>Products</Button>
                    </Link>
                    <Link to="Resources" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<ContactMailIcon sx={{ color: '#1F75FE' }} />}>Resources</Button>
                    </Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button startIcon={<MonetizationOnIcon sx={{ color: '#1F75FE' }} />}>pricing</Button>
                    </Link>
                </Stack>
            </Drawer>
        </Box>
    );
}

export default HeaderNav;
