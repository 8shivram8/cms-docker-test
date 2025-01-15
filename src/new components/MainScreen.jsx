import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid, useTheme, useMediaQuery, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import workflowImg from '../assets/workflow.png';

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
    { label: 'United Arab Emirates', code: 'AE' },
    { label: 'Mexico', code: 'MX' },
    { label: 'Brazil', code: 'BR' },
    { label: 'South Africa', code: 'ZA' },
    { label: 'Thailand', code: 'TH' },
    { label: 'Malaysia', code: 'MY' },
    { label: 'Indonesia', code: 'ID' },
];

const MainScreen = ({ selectedCountry, handleCountryChange }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    console.log("mydataa", selectedCountry)
    return (
        <Box sx={{ position: 'relative', height: 'auto' }}>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    background: theme.palette.background.gradient,
                    height: isMobile ? '48vh' : isTablet ? '65vh' : '70vh',
                }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, ml: 5, mr: 5 }}>
                    <Typography sx={{ color: 'white', fontWeight: 600, fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px' }}>
                        Coalitionify
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        gap={2}
                    >
                        <FormControl variant="outlined" sx={{ minWidth: 160 }}>
                            {!selectedCountry && (
                                <InputLabel
                                    id="country-select-label"
                                    sx={{
                                        color: 'black',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        transition: 'all 0.2s ease',
                                        ml: 1.5,
                                    }}
                                >
                                    Select Country
                                </InputLabel>
                            )}
                            <Select
                                labelId="country-select-label"
                                value={selectedCountry}
                                onChange={(e) => handleCountryChange(e.target.value)}
                                displayEmpty
                                sx={{
                                    height: '37px',
                                    bgcolor: 'white',
                                    color: 'black',
                                    '& .MuiSelect-icon': { color: 'black' },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select Country
                                </MenuItem>
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.code}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            variant="outlined"
                            target='_blank'
                            href="https://app.coalitionify.com/signIn"
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'none',
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
                            fontSize: isMobile ? '20px' : isTablet ? '36px' : '44px',
                            mb: 1,
                        }}
                    >
                        E-SIGNATURE & DATA COLLECTION
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        sx={{
                            fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
                            fontSize: isMobile ? '20px' : isTablet ? '36px' : '44px',
                            mb: 2,
                        }}
                    >
                        THAT SIMPLIFIES YOUR WORKFLOWS.
                    </Typography>


                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button
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
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    border: '1px solid #FFFFFF',
                                    fontSize: isMobile ? '10px' : isTablet ? '12px' : '14px',
                                }}
                            >
                                Reach to Us
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ py: 4, mt: 5 }}>
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={workflowImg}
                                alt="Workflow"
                                style={{
                                    width: '100%',
                                    maxWidth: isMobile ? '100%' : isTablet ? '90%' : '800px',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default MainScreen;
