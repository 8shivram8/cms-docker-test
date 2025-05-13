import React from 'react'
import { Button, Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material'
import ContactForm from './ContactForm'
import img from '../assets/acolead landing page/centerimg.jpg'
import ScheduleForm from './ScheduleForm'

const Mainscreen = ({ plansRef, contactFormRef, highlighted }) => {
    function scrollToPlans() {
        plansRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                flexGrow: 1,
                p: { xs: 2, md: 6 },
                bgcolor: '#1677F7'
            }}
        >
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: 'white',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 900,
                                fontSize: { xs: '18px', md: '50px' },
                                lineHeight: { xs: '28px', md: '62px' },
                                letterSpacing: '0px',
                                mb: 2,
                                whiteSpace: 'pre-line',
                                mt: 2
                            }}
                        >
                            {`Channel Partners - Turn Your Enquiries Into Site Visits`}
                        </Typography>
                        {isMobile ? (
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'white',
                                    mb: 4,
                                }}
                            >
                                Manage leads. Close deals.
                                <br />
                                Build Your Presence with Acolead
                            </Typography>
                        ) : (
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    mb: 4,
                                }}
                            >
                                Manage leads. Close deals.Build Your Presence with Acolead
                            </Typography>
                        )
                        }

                        {
                            !isMobile && (
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{ bgcolor: 'white', color: 'black' }}
                                        target="_blank"
                                        href="https://app.crm.stage.coalitionify.com/"
                                    >
                                        Get Started Free
                                    </Button>
                                </Box>
                            )
                        }

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <ContactForm contactFormRef={contactFormRef} highlighted={highlighted} /> */}
                    <ScheduleForm contactFormRef={contactFormRef} highlighted={highlighted} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Mainscreen
