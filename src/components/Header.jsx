
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';
import centerimg from '../assets/centerimg.png';
import backgroundImg from '../assets/bgimage.jpg';
import { Container, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-scroll';

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
            // sx={{ background: 'linear-gradient(to bottom right, #ccccff, #99ccff)' }}
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderBottomLeftRadius: 9,
                borderBottomRightRadius: 9,
            }}
        >

            <Box
                position="sticky"

                sx={{
                    backgroundColor: 'white',
                    padding: '10px 0',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    margin: '15px',
                    width: '100%',
                    maxWidth: '1200px',
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


                    {!isMobile && (
                        <Grid item md={6} display="flex" justifyContent="center">
                            <Stack direction="row" spacing={3}>
                                <Link to="home" smooth={true} duration={500}>
                                    <Button color="inherit">Home</Button>
                                </Link>
                                <Link to="about" smooth={true} duration={500}>
                                    <Button color="inherit">About Us</Button>
                                </Link>
                                <Link to="features" smooth={true} duration={300}>
                                    <Button color="inherit">Features</Button>
                                </Link>
                                <Link to="pricing" smooth={true} duration={300}>
                                    <Button color="inherit">Pricing</Button>
                                </Link>
                                <Link to="contact" smooth={true} duration={500}>
                                    <Button color="inherit">Contact Us</Button>
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

            {/* Drawer for Mobile/Tablet View */}
            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
                <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
                    <Link to="home" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button color="inherit">About Us</Button>
                    </Link>
                    <Link to="features" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button color="inherit">Features</Button>
                    </Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button color="inherit">Pricing</Button>
                    </Link>
                    <Link to="contact" smooth={true} duration={500} onClick={handleDrawerToggle}>
                        <Button color="inherit">Contact Us</Button>
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
                    <Grid item xs={6} md={3} display="flex" justifyContent='center' mt={3}>
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
                    </Grid>
                </Stack>

            </Container>

            <Box display="flex" justifyContent="center" alignItems="center" maxWidth={600} mt={0}>
                <img
                    src={centerimg}
                    alt="Demo Display Image"
                    style={{
                        borderRadius: '10px',
                        width: '100%',
                        height: 'auto',
                    }}
                    sizes="(max-width: 400px) 100vw, (max-width: 800px) 80vw, 500px"
                />
            </Box>

        </Box>
    );
}

export default Header;
