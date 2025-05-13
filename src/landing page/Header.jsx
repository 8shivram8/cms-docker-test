import {
    Box, Grid, Stack, Button, IconButton, Drawer,
    useMediaQuery, Typography, List, ListItem, ListItemButton, Divider
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/acolead-crm.png';

function Header({ scrollToSection, handleScrollToForm }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinks = [
        { label: 'Home', to: 'home' },
        { label: 'About Us', to: 'why' },
        { label: 'Features', to: 'capabilities' },
        // { label: 'Pricing', to: 'pricing' },
        // { label: 'Blog', to: 'blog' },
    ];


    return (
        <Box
            position="sticky"
            top={0}
            zIndex={1000}
            display="flex"
            justifyContent="center"
            width="100%"
            // mt={3}
            bgcolor={'white'}
            height={isMobile ? 60 : 80}
        >
            <Grid container alignItems="center" justifyContent="space-between" sx={{ px: isMobile ? 1 : 1 }} maxWidth="xl" ml={isMobile ? 0 : 3} mr={3}>
                {isMobile ? (
                    <>
                        <Grid item xs={6}>
                            <Box display="flex" alignItems="left">
                                <img src={logo} alt="Coalitionify Logo" height={25} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="flex-end">
                            <IconButton
                                onClick={toggleDrawer}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 2,
                                    bgcolor: '#1677F7',
                                    color: '#ffffff',
                                    '&:hover': {
                                        bgcolor: '#125fcc',
                                    },
                                }}
                            >
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
                                        onClick={() => {
                                            scrollToSection(to)
                                        }}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item md={3} display="flex" justifyContent="flex-end" alignItems="center">
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    color: 'text.primary',
                                    fontSize: '0.9rem',
                                    mr: 2,
                                    minWidth: 'auto',
                                    border: '1px solid black'
                                }}
                                onClick={handleScrollToForm}
                            >
                                Book a Demo
                            </Button>

                            <Button
                                variant="outlined"
                                target="_blank"
                                href="https://app.crm.stage.coalitionify.com/"
                                sx={{
                                    bgcolor: '#1677F7',
                                    color: 'white',
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    minWidth: 'auto',
                                    px: 2,
                                    // borderRadius: 2
                                }}
                            >
                                Free Trial
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
                                    onClick={() => {
                                        toggleDrawer()
                                        scrollToSection(to)
                                    }}
                                >
                                    <Typography>{label}</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Box display="flex" flexDirection="column" gap={1.5} maxWidth={120}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                color: 'text.primary',
                                fontSize: '0.9rem',
                                border: '1px solid black'
                            }}
                            onClick={() => {
                                toggleDrawer()
                                handleScrollToForm()
                            }}
                        >
                            Book a Demo
                        </Button>

                        <Button
                            variant="outlined"
                            target="_blank"
                            href="https://app.crm.stage.coalitionify.com/"
                            sx={{
                                bgcolor: '#1677F7',
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '0.9rem',
                            }}
                        >
                            Free Trial
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Header;
