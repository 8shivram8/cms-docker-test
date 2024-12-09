import { Box, Grid, Stack, Button, IconButton, Drawer, useMediaQuery, Typography, Divider, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyDrawer from './MyDrawer';


function HeaderNav() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                            <Button
                                component={RouterLink}
                                to="/"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Home
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/about"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                About Us
                            </Button>
                            {/* <Button
                                component={RouterLink}
                                to="/products"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Products
                            </Button> */}
                            <Button
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Products
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'products-menu-button',
                                }}
                            >
                                <MenuItem
                                    component={RouterLink}
                                    to="/esignWorkflow"
                                    onClick={handleClose}
                                >
                                    eSign Workflow
                                </MenuItem>
                                <MenuItem
                                    component={RouterLink}
                                    to="/businessWorkflow"
                                    onClick={handleClose}
                                >
                                    Business Workflow
                                </MenuItem>
                                <MenuItem
                                    component={RouterLink}
                                    to="/dailyDiary"
                                    onClick={handleClose}
                                >
                                    Daily Diary
                                </MenuItem>
                            </Menu>

                            <Button
                                component={RouterLink}
                                to="/resources"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Resources
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/pricing"
                                color="inherit"
                                sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                                Pricing
                            </Button>
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

            {/* <Drawer
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
                                alignItems: 'left',
                                gap: 1,
                                transition: '0.3s ease',
                                '&:hover': {
                                    color: 'primary.main',
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            },
                        }}
                    >

                        <Button component={RouterLink} to="/" startIcon={<HomeIcon sx={{ color: 'primary.main' }} />}>Home</Button>
                        <Button component={RouterLink} to="/about" startIcon={<InfoIcon sx={{ color: 'primary.main' }} />}>About Us</Button>
                        <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} startIcon={<StarIcon sx={{ color: 'primary.main' }} />}>Products</Button>
                        <Button component={RouterLink} to="/resources" startIcon={<ContactMailIcon sx={{ color: 'primary.main' }} />}>Resources</Button>
                        <Button component={RouterLink} to="/pricing" startIcon={<MonetizationOnIcon sx={{ color: 'primary.main' }} />}>Pricing</Button>
                    </Stack>
                </Box>

               
                <Box
                    sx={{
                        padding: 2,
                        marginBottom: 2,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        color="primary"
                        sx={{ textTransform: 'none' }}
                        variant="contained"
                    >
                        Contact Us
                    </Button>
                </Box>
            </Drawer> */}
            <MyDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>


        </Box>
    );
}

export default HeaderNav;
