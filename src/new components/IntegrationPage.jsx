import React from 'react'
import { Grid, Typography, Box, IconButton, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Teams from './Custom Icons/Teams'
import Slag from './Custom Icons/Slag'
import Salesforce from './Custom Icons/Salesforce'
import HubIcon from './Custom Icons/HubIcon'
import Razor from './Custom Icons/Razor'
import { Stripe } from './Custom Icons/Stripe'

const integrationData = [
    { icon: <Teams />, name: 'Teams Integration' },
    { icon: <Slag />, name: 'Slack Integration' },
    { icon: <Salesforce />, name: 'Salesforce Integration' },
    { icon: <HubIcon />, name: 'HubSpot Integration' },
    { icon: <Razor />, name: 'razorpay Integration' },
    { icon: <Stripe />, name: 'Stripe Integration' }
]

const IntegrationPage = () => {
    const theme = useTheme()
    return (
        <Box bgcolor="white" py={4} mt={3} mx={2}>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: 700,
                        marginBottom: 4,
                        fontSize: { xs: "25px", sm: "30px", md: "35px" },
                        backgroundImage: theme.palette.linearColor.gradient,
                        backgroundImage: theme.palette.linearColor.gradient,
                        WebkitBackgroundClip: 'text',
                        color: "transparent",
                    }}
                >
                    Work Smarter Together
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" width="100%">
                <Grid container spacing={3} justifyContent="center" alignItems="center" maxWidth="md">
                    {integrationData.map((item, index) => (
                        <Grid item xs={6} sm={6} md={4} key={index} gap={2}>
                            <Box
                                bgcolor="white"
                                p={2}
                                display="flex"
                                flexDirection="column"
                                alignItems="left"
                                justifyContent="space-between"
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '5px',
                                }}
                            >
                                <Typography variant="h4">{item.icon}</Typography>
                                <Typography variant="body2" mt={1} align="left" fontWeight={700} fontSize={'18px'}>
                                    {item.name}
                                </Typography>
                                <IconButton
                                    sx={{ alignSelf: 'flex-end', mt: 1 }}
                                    size="large"
                                >
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    )
}

export default IntegrationPage
