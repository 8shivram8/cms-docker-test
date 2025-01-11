import React from 'react'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import Routing from './Custom Icons/Routing'
import DataIcon from './Custom Icons/DataIcon'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const boxesData = [
    {
        title: 'Coalitionify Cloud',
        iconImage: <Routing />,
        onClick: () => alert('Box 1 clicked'),
        data: [
            { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet.' },
            { subtitle: 'Subtitle 2', text: 'Sed do eiusmod tempor incididunt.' },
            { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet.' },
            { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet.' },
        ],
    },
    {
        title: 'Deploy on your premise',
        iconImage: <DataIcon />,
        onClick: () => alert('Box 2 clicked'),
        data: [
            { subtitle: 'Subtitle 1', text: 'Ut enim ad minim veniam.' },
            { subtitle: 'Subtitle 2', text: 'Quis nostrud exercitation ullamco laboris.' },
            { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet.' },
            { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet.' },
        ],
    },
]

const Hosting = () => {
    const theme = useTheme()
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
            <Grid spacing={4} container justifyContent="center" sx={{ maxWidth: '800px' }}>
                {/* Title */}
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            marginBottom: 3,
                            fontSize: { xs: '25px', sm: '30px', md: '35px' },
                            color: 'white',
                            mt: 5
                        }}
                    >
                        Flexible Hosting Options
                    </Typography>
                </Grid>

                {/* Boxes */}
                {boxesData.map((box, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Box
                            sx={{
                                bgcolor: '#ffffff',
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
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={box.onClick}
                        >

                            <Typography variant="h6" sx={{
                                fontWeight: 'bold', mb: 2,
                                backgroundImage: theme.palette.linearColor.gradient,
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>
                                {box.title}
                            </Typography>
                            <Grid container spacing={2} sx={{ m: 1, width: '100%' }}>
                                {box.data.map((item, index) => (
                                    <Grid item key={index} xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                flexDirection: 'row',
                                                width: '100%',
                                            }}
                                        >
                                            <CheckCircleIcon sx={{ color: 'black', fontSize: 18, mr: 1 }} />

                                            <Typography
                                                variant="body2"
                                                mr={1}
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '0.875rem',
                                                    whiteSpace: 'normal', // Allow wrapping
                                                    overflowWrap: 'break-word', // Wrap long text
                                                    wordBreak: 'break-word', // Break text if necessary
                                                    display: 'inline', // Ensure inline display of subtitle and text
                                                    minWidth: 0, // Prevent the text from overflowing and ensure wrapping
                                                    flexGrow: 1, // Allow text to take up available space without breaking the layout
                                                }}
                                            >
                                                <strong>{item.subtitle}</strong>: {item.text}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ fontSize: 50, color: 'primary.main', mb: 2 }}>
                                {box.iconImage}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Hosting
