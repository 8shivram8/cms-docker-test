import React from 'react'
import { Button, Typography, Box, Grid } from '@mui/material'
import ContactForm from './ContactForm'

const Mainscreen = ({ plansRef,contactFormRef,highlighted}) => {
    function scrollToPlans() {
        plansRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 6 } }} mt={4}>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 800,
                            fontSize: { xs: '28px', md: '50px' },
                            lineHeight: { xs: '38px', md: '62px' },
                            letterSpacing: '0px',
                            mb: 2,
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {`Automate Your\nApprovals & Signatures\nFaster, Smarter, and\nCompletely Paperless`}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Stop juggling manual paperwork or complex software integrations. AcoFlow lets you collect data, manage approvals, and request eSignatures in a single, AI-powered platform.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button variant="contained" size="large" sx={{ bgcolor: '#1677F7', color: 'white' }} target="_blank"
                            href="https://app.coalitionify.com/signIn">Get Started Free</Button>
                        {/* <Button variant="outlined" size="large" sx={{
                            color: 'black',
                            borderColor: '#1677F7',
                        }}
                            onClick={scrollToPlans}
                        >See Plans</Button> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm contactFormRef={contactFormRef} highlighted={highlighted}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Mainscreen
