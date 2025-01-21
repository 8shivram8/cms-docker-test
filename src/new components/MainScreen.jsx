import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid, useTheme, useMediaQuery, MenuItem, IconButton, Menu } from '@mui/material';
import workflowImg from '../assets/poster2.png';
import img1 from '../assets/banner images/banner1.jpg';
import img2 from '../assets/banner images/banner2.jpg';
import img3 from '../assets/sliderImages/gogreen.webp';
import LanguageIcon from '@mui/icons-material/Language';
import { FlagIcon } from 'react-flag-kit';
import ImageSlider from '../components/ImageSlider';
import logo from '../assets/AcoSignLogo.png'
import { Link, scroller } from 'react-scroll';
const countries = [
    { label: 'United States', code: 'US' },
    { label: 'India', code: 'IN' },
    { label: 'Canada', code: 'CA' },
    { label: 'United Kingdom', code: 'GB' },
    { label: 'Australia', code: 'AU' },
    { label: 'European Union', code: 'EU' },
    { label: 'China', code: 'CN' },
    { label: 'Japan', code: 'JP' },
    { label: 'South Korea', code: 'KR' },
    { label: 'Singapore', code: 'SG' },
    { label: 'Russia', code: 'RU' },
    { label: 'Saudi Arabia', code: 'SA' },
    { label: 'Mexico', code: 'MX' },
    { label: 'Brazil', code: 'BR' },
    { label: 'South Africa', code: 'ZA' },
    { label: 'Thailand', code: 'TH' },
    { label: 'Malaysia', code: 'MY' },
    { label: 'Indonesia', code: 'ID' },
];

const MainScreen = ({ selectedCountry, handleCountryChange, handleClick, handleClose, anchorEl }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const defaultCountry = 'IN';

    const handleSelectCountry = (countryCode) => {
        handleCountryChange(countryCode);
        handleClose();
    };
    const images = [img1, img2];
    // const images = [workflowImg];

    const scrollToContactForm = () => {
        scroller.scrollTo('contactForm', {
            duration: 1200, 
            smooth:true,
        });
    };

    return (
        <Box sx={{ position: 'relative', height: 'auto' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    background: theme.palette.background.gradient,
                    height: isMobile ? '70vh' : isTablet ? '70vh' : '70vh',
                }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, ml: 5, mr: 5 }}>
                    {/* <Typography sx={{ color: 'white', fontWeight: 600, fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px' }}>
                        Coalitionify
                    </Typography> */}
                    <img src={logo} width="150" height="auto" />

                    <Box display={'flex'} flexDirection={'row'} gap={isMobile ? 0 : 1}>


                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={handleClick} sx={{ color: 'white' }}>
                                <FlagIcon code={selectedCountry || defaultCountry} style={{ width: '40px', height: '30px', borderRadius: '5px' }} />
                            </IconButton>
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            {countries.map((country) => (
                                <MenuItem
                                    key={country.code}
                                    onClick={() => handleSelectCountry(country.code)}
                                    sx={{
                                        bgcolor: selectedCountry === country.code ? '#e0e0e0' : 'transparent',
                                        '&:hover': {
                                            bgcolor: '#f0f0f0',
                                        },
                                    }}
                                >
                                    <FlagIcon code={country.code} style={{ width: '24px', height: '16px', marginRight: '8px' }} />
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button
                            variant="outlined"
                            target='_blank'
                            href="https://app.coalitionify.com/signIn"
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'none',
                                m: isMobile ? 2 : 2,
                                fontSize: isMobile ? '10px' : isTablet ? '12px' : '14px',
                            }}
                        >
                            Log In
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 3, px: 2 }}>
                    <Typography
                        variant="h1"
                        color="white"
                        sx={{
                            fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
                            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.5rem',
                            // mb: 1,
                        }}
                    >
                        Build Your Workflow: Digital Forms, Signatures, and Data Collection Made Simple.
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        sx={{
                            fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
                            fontSize: isMobile ? '16px' : isTablet ? '18px' : '28px',
                            mt: 1,
                        }}
                    >
                        Streamline your processes, eliminate paperwork, and save time with Coalitionify.
                    </Typography>

                    <Grid container justifyContent="center" spacing={2} mt={1}>
                        <Grid item>
                            <Button
                                target='_blank'
                                href="https://app.coalitionify.com/signIn"
                                variant="outlined"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '14px',
                                }}
                            >
                                2 Months Free Trial
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link to="contactForm" smooth={true} duration={1500}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        border: '1px solid #FFFFFF',
                                        fontSize: isMobile ? '10px' : isTablet ? '12px' : '14px',
                                    }}
                                    onClick={scrollToContactForm}
                                >
                                    Book a Demo
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {/* <img
                                src={workflowImg}
                                alt="Workflow"
                                style={{
                                    width: '100%',
                                    maxWidth: isMobile ? '100%' : isTablet ? '90%' : '800px',
                                    height: 'auto',
                                }}
                            /> */}
                            <ImageSlider images={images} />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default MainScreen;
