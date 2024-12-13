import { useState } from 'react';
import { Box, Button, Divider, Drawer, Stack, Collapse } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const MyDrawer = ({ drawerOpen, handleDrawerToggle }) => {
    const [isProductsOpen, setProductsOpen] = useState(false);

    const handleProductsToggle = () => {
        setProductsOpen((prev) => !prev);
    };

    return (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 240,
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
                        src={logo}
                        alt="Company Logo"
                        style={{
                            width: '125px',
                            height: 'auto',
                            cursor: 'pointer',
                        }}
                        onClick={handleDrawerToggle}
                    />
                </Box>
                <Divider />

                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        padding: 2,
                        alignItems: 'flex-start',
                        '& .MuiButton-root': {
                            width: '100%',
                            justifyContent: 'flex-start',
                            color: 'black',
                            textTransform: 'none',
                            fontSize: '1rem',
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


                    <Button
                        onClick={handleProductsToggle}
                        endIcon={isProductsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        startIcon={<StarIcon sx={{ color: 'primary.main' }} />}
                    >
                        Products
                    </Button>
                    <Collapse in={isProductsOpen} timeout="auto" unmountOnExit>
                        <Stack
                            spacing={1}
                            sx={{
                                pl: 4,
                                '& .MuiButton-root': {
                                    width: 'auto',
                                    justifyContent: 'flex-start',
                                },
                            }}
                        >
                            <Button component={RouterLink} to="/esignWorkflow">
                                eSign Workflow
                            </Button>
                            <Button component={RouterLink} to="/businessWorkflow">
                                Business Workflow
                            </Button>
                            <Button component={RouterLink} to="/dailyDiary">
                                Daily Diary
                            </Button>
                        </Stack>
                    </Collapse>

                    <Button component={RouterLink} to="/resources" startIcon={<ContactMailIcon sx={{ color: 'primary.main' }} />}>Resources</Button>
                    <Button component={RouterLink} to="/pricing" startIcon={<MonetizationOnIcon sx={{ color: 'primary.main' }} />}>Pricing</Button>
                </Stack>
            </Box>

            {/* Contact Us Button */}
            <Box
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    easing="easeInOutQuart"
                >
                    <Button
                        color="primary"
                        sx={{ textTransform: 'none' }}
                        variant="contained"
                    >
                        Book Demo
                    </Button>
                </Link>
            </Box>
        </Drawer>
    );
};

export default MyDrawer;
