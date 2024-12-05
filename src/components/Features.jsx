import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import digisign from '../assets/digisign.jpg';
import workflow from '../assets/workflow.jpg';
import dailydiary from '../assets/diary.jpg';

function Features() {
    const features = [
        {
            title: "Tailored Workflows for Every Need",
            description: "Design and automate workflows effortlessly! Create custom forms tailored to your requirements, enable multi-user access in a sequential manner, and seamlessly integrate collected data into your system. Simplify data collection and management like never before.",
            image: `${workflow}`,
            button: "Explore Templates"
        },
        {
            title: "Effortless Digital Signing",
            description: "Send, track, and sign documents digitally with ease. Automate workflows, save time, and ensure secure, legally-binding signatures—perfect for contracts, agreements, or approvals.",
            image: `${digisign}`,
            button: "Start Signing Now"
        },
        {
            title: "Smart Daily Diary: Simplify Your Routine",
            description: "Effortlessly track recurring data with our Daily Diary. Designed for scenarios like medical records, it integrates seamlessly with iWatch and Siri to provide reminders and hands-free input. Stay organized, save time, and ensure consistency with easy-to-use, voice-enabled updates.",
            image: `${dailydiary}`,
            button: "Start Your Diary"
        },
    ];

    return (
        <Box
            sx={{
                mt: 6,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',        // Make the parent a flex container
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center',    // Center vertically
                    // Full height of the viewport (optional, for vertical centering)
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '20px',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        textTransform: 'none',
                        padding: '3px 7px',
                        fontSize: '1.7rem',
                        mt: 1,
                        mb: 2
                    }}
                >
                    Solutions
                </Button>
            </Box>

            {features.map((feature, index) => (
                <Grid
                    container
                    spacing={3}
                    key={index}
                    direction={index % 2 === 0 ? "row" : "row-reverse"}
                    alignItems="center"
                    sx={{ mb: 5, p: 2 }}
                >
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={feature.image}
                                alt={feature.title}
                                sx={{
                                    width: '100%',
                                    height: { xs: 230, sm: 270, md: 330, lg: 390 }, // Adjust height for different breakpoints
                                    objectFit: 'cover',
                                }}
                            />
                        </Card>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} md={6}>
                        <CardContent sx={{ textAlign: 'left' }}>

                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ fontWeight: 400, color: 'black', mb: 2, fontSize: { xs: '1.5rem', sm: '1.8rem' } }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                            >
                                {feature.description}
                            </Typography>

                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: '20px',
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    textTransform: 'none',
                                    padding: '3px 7px',
                                    fontSize: '1rem',
                                    mt: 2
                                }}
                            >
                                {feature.button}
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
}

export default Features;
