import React from 'react'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import Routing from './Custom Icons/Routing'
import DataIcon from './Custom Icons/DataIcon'
import cloudImage from '../assets/cloud.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const boxesData = [
    {
        title: 'Coalitionify Cloud',
        iconImage: cloudImage,
        data: [
            { subtitle: 'Platform as a Service', text: 'A fully managed solution for your e-signature needs.' },
            { subtitle: 'Highly Secure & Legally Binding', text: 'Meets the highest standards for data protection and compliance.' },
            { subtitle: 'Team Collaboration', text: 'Work seamlessly with your team on shared workflows.' },
            { subtitle: 'Ready to Start', text: 'Launch your e-signature workflows instantly without setup hassles.' },
        ],
    },
    {
        title: 'Deploy on your premise',
        iconImage: cloudImage,
        data: [
            { subtitle: 'Host on Your Cloud', text: 'Take advantage of our technology while maintaining your infrastructure.' },
            { subtitle: 'Absolute Control', text: 'Gain full control over your data and configurations.' },
            { subtitle: 'Host on Your Cloud', text: 'Take advantage of our technology while maintaining your infrastructure.' },
            // { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
        ],
    },
]

const Hosting = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 5,
            textAlign: 'center',
            padding: 2,
            background: 'linear-gradient(to bottom left, #1677F7, #FFFFFF)',
        }}>
            <Grid spacing={4} container justifyContent="center" sx={{ maxWidth: '800px' }} mb={8}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            marginBottom: 1.5,
                            fontSize: { xs: '25px', sm: '30px', md: '35px' },
                            color: 'white',
                            mt: 5
                        }}
                    >
                        Flexible Hosting Options
                    </Typography>
                    <Typography
                    variant="h1"
                    color="white"
                    sx={{
                        fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
                        fontSize: {xs : '16px',sm:'18px',md: '18px'},
                    }}
                >
                    Complete White Label Solution
                </Typography>
                </Grid>

                {boxesData.map((box, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Box
                            sx={{
                                bgcolor: index === 0 ? '#ffffff' : 'black',
                                p: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                },
                                height: '600px'

                            }}
                        >

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    backgroundImage: theme.palette.linearColor.gradient,
                                    WebkitBackgroundClip: 'text',
                                    color: index === 1 ? 'white' : 'transparent',
                                }}
                            >
                                {box.title}
                            </Typography>

                            <Grid container spacing={2} sx={{ m: 1, width: '100%' }}>
                                {box.data.map((item, index1) => (
                                    <Grid item key={index1} xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                flexDirection: 'row',
                                                width: '100%',
                                            }}
                                        >
                                            <CheckCircleIcon sx={{ color: index === 1 ? 'white' : 'black', fontSize: 18, mr: 1 }} />

                                            <Typography
                                                variant="body2"
                                                mr={1}
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '0.875rem',
                                                    textAlign: 'left',
                                                    whiteSpace: 'normal',
                                                    overflowWrap: 'break-word',
                                                    wordBreak: 'break-word',
                                                    display: 'inline',
                                                    minWidth: 0,
                                                    color: index === 1 ? 'white' : 'black',
                                                }}
                                            >
                                                <strong>{item.subtitle}</strong>: {item.text}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                <img
                                    src={box.iconImage}
                                    alt={box.title}
                                    style={{ width: '250px', height: '250px' }}
                                />
                            </Box>

                        </Box>
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}

export default Hosting
