import {
    Box, Grid, Stack, Button, IconButton, Drawer,
    useMediaQuery, Typography, List, ListItem, ListItemButton, Divider
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/acoflow.png';

function Header({ scrollToSection }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinks = [
        { label: 'Why AcoFlow?', to: 'why' },
        { label: 'Industries', to: 'industries' },
        { label: 'Features', to: 'capabilities' },
        { label: 'Pricing', to: 'pricing' },
        { label: 'Blog', to: 'blog' },
    ];

    return (
        <Box
            position="sticky"
            top={0}
            zIndex={1000}
            display="flex"
            justifyContent="center"
            width="100%"

            mt={3}
        >
            <Grid container alignItems="center" justifyContent="space-between" sx={{ px: 1 }} maxWidth="xl" ml={3} mr={3}>
                {isMobile ? (
                    <>
                        <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                                <img src={logo} alt="Colitionify Logo" height={40} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="flex-end">
                            <IconButton onClick={toggleDrawer}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item md={3} display="flex" alignItems="center">
                            <img src={logo} alt="Colitionify Logo" height={40} />
                        </Grid>
                        <Grid item md={6} display="flex" justifyContent="center">
                            <Stack direction="row" gap={3}>
                                {navLinks.map(({ label, to }) => (
                                    <Button
                                        key={label}
                                        color="inherit"
                                        sx={{ textTransform: 'none', fontSize: '0.9rem', minWidth: 'auto' }}
                                        onClick={() => scrollToSection(to)}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item md={3} display="flex" justifyContent="flex-end" alignItems="center">
                            <Button
                                target="_blank"
                                href="https://app.coalitionify.com/signIn"
                                sx={{
                                    textTransform: 'none',
                                    color: 'text.primary',
                                    fontSize: '0.9rem',
                                    mr: 2,
                                    minWidth: 'auto'
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="outlined"
                                target="_blank"
                                href="https://app.coalitionify.com/signIn"
                                sx={{
                                    bgcolor: '#1677F7',
                                    color: 'white',
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    minWidth: 'auto',
                                    px: 2,
                                    borderRadius: 2
                                }}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </>
                )}
            </Grid>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250, p: 2 }}>
                    <img src={logo} alt="Colitionify Logo" height={40} />
                    <List sx={{ mt: 2 }}>
                        {navLinks.map(({ label, to }) => (
                            <ListItem key={label} disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to={to}
                                    onClick={toggleDrawer}
                                >
                                    <Typography>{label}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Button
                            component={RouterLink}
                            to="/login"
                            onClick={toggleDrawer}
                            sx={{
                                textTransform: 'none',
                                fontSize: '0.9rem',
                                justifyContent: 'flex-start',
                                color: 'text.primary'
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            component="a"
                            href="https://app.coalitionify.com/signIn"
                            target="_blank"
                            onClick={toggleDrawer}
                            sx={{
                                textTransform: 'none',
                                fontSize: '0.9rem',
                                justifyContent: 'flex-start',
                                color: 'text.primary'
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Header;
