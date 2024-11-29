import React, { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Resources', href: '#resources' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'white',
                borderBottom: '1px solid #ddd',
                Width:'100%',
                zIndex: 1100,
                height: '62px', // Keep the header height small
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 16px',
                    height: '100%',
                }}
            >
                {/* Mobile View: Menu Icon, Logo, Sign In button */}
                {isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        {/* Menu Icon on the left */}
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>

                        {/* Logo in the middle */}
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={logo}  // Replace with your logo URL
                                alt="Logo"
                                style={{
                                    height: '40px', // Adjust logo size
                                    width: 'auto', // Maintain aspect ratio
                                }}
                            />
                        </Box>

                        {/* Sign In Button on the right */}
                        <Button
                            color="inherit"
                            sx={{ marginLeft: 2,textTransform:'none'}} // Add space between logo and button
                            variant="outlined"
                            href="#signin"

                        >
                            Sign In
                        </Button>
                    </Box>
                )}

                {/* Desktop and Tablet View: Logo on the Left, Links in the Middle */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        {/* Logo on the Left */}
                        <Box sx={{ marginRight: 'auto' }}>
                            <img
                                src={logo}  // Replace with your logo URL
                                alt="Logo"
                                style={{
                                    height: '40px', // Adjust logo size
                                    width: 'auto', // Maintain aspect ratio
                                }}
                            />
                        </Box>

                        {/* Links in the Center */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                            {links.slice(0, -1).map((link, index) => (
                                <Button
                                    key={index}
                                    color="inherit"
                                    sx={{ margin: 1 }}
                                    href={link.href}
                                >
                                    {link.name}
                                </Button>
                            ))}
                        </Box>

                        {/* Sign In Button on the Right */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                key="contact"
                                color="inherit"
                                sx={{ margin: 1 }}
                                href="#contact"
                            >
                                Contact Us
                            </Button>
                            <Button
                                key="sign-in"
                                color="inherit"
                                sx={{ margin: 1 }}
                                variant="outlined"
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                variant="temporary"
            >
                <List sx={{ width: 250 }}>
                    {links.map((link, index) => (
                        <ListItem button key={index} onClick={handleDrawerToggle}>
                            <ListItemText primary={link.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Header;
