import { Box, Grid, Stack, Button, IconButton, Drawer, useMediaQuery, Typography, Divider } from '@mui/material';
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
            alignSelf="center"
            position="sticky"
            top={0}
            zIndex={1000}
            width="100%"
            sx={{
                bgcolor: 'white',
                padding: '6px 0',
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
                    {/* <img src={Logo} alt="Colitionify Logo" height={40} style={{ marginRight: '10px' }} /> */}
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            lineHeight: 1.3,
                            // marginBottom: 1,
                        }}
                    >
                        Coalitionify
                    </Typography>
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
                    {
                        !isMobile && (
                            <Button
                                color="inherit"
                                sx={{ marginLeft: 2, textTransform: 'none', fontSize: '1rem', }}
                                href="#signin"

                            >
                                Contact us
                            </Button>
                        )
                    }
                    <Button
                        color="primary"
                        sx={{ marginLeft: 2, textTransform: 'none', fontSize: '1rem', }}
                        variant="contained"
                        target='_blank'
                        href="https://app.coalitionify.com/login"

                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>

            {/* Drawer for Mobile/Tablet View */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'white',
                        color: 'black',
                        paddingTop: 2,
                        paddingBottom: 2,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    },
                }}
            >
                <Box>
                    {/* Logo Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 1,
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Company Logo"
                            style={{
                                width: '125px',
                                height: 'auto',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                handleDrawerToggle();
                            }}
                        />
                    </Box>
                    <Divider />

                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{
                            padding: 2,
                            alignItems: 'left',
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
                            <Button startIcon={<HomeIcon sx={{ color: 'primary.main' }} />}>Home</Button>
                        </Link>
                        <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle}>
                            <Button startIcon={<InfoIcon sx={{ color: 'primary.main' }} />}>About Us</Button>
                        </Link>
                        <Link to="Products" smooth={true} duration={500} onClick={handleDrawerToggle}>
                            <Button startIcon={<StarIcon sx={{ color: 'primary.main' }} />}>Products</Button>
                        </Link>
                        <Link to="Resources" smooth={true} duration={500} onClick={handleDrawerToggle}>
                            <Button startIcon={<ContactMailIcon sx={{ color: 'primary.main' }} />}>Resources</Button>
                        </Link>
                        <Link to="pricing" smooth={true} duration={500} onClick={handleDrawerToggle}>
                            <Button startIcon={<MonetizationOnIcon sx={{ color: 'primary.main' }} />}>Pricing</Button>
                        </Link>
                    </Stack>
                </Box>

                {/* Contact Us Button */}
                <Box
                    sx={{
                        padding: 2,
                        marginBottom:2,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        color="primary"
                        sx={{textTransform: 'none' }}
                        variant="contained"
                    >
                        Contact Us
                    </Button>
                </Box>
            </Drawer>


        </Box>
    );
}

export default HeaderNav;
