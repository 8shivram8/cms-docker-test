import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import digisign from '../assets/digisign.jpg'
import workflow from '../assets/newworkflow.jpg'
function Features() {
    const features = [
        {
            title: "Workflow",
            description: "Streamline your processes and increase productivity by creating customized workflows that adapt to your needs.",
            image: `${workflow}`, // replace with actual path to the image
        },
        {
            title: "Digital Signature",
            description: "Secure and verify documents with our integrated digital signature feature, ensuring trust and reliability.",
            image: `${digisign}`, // replace with actual path to the image
        },
        {
            title: "Daily Diary",
            description: "Keep a daily log of activities, track progress, and ensure accountability with our Daily Diary feature.",
            image: "/path-to-your-image/daily-diary.png", // replace with actual path to the image
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 5, mb: 8 }}>
            {/* Centered Button with Border */}
            <Button
                variant="outlined"
                sx={{
                    borderRadius: '20px',
                    borderColor: '#1F75FE',
                    color: '#1F75FE',
                    textTransform: 'none',
                    padding: '5px 10px',
                    fontSize: '1rem',
                    mb: 4
                }}
            >
               Features 
            </Button>

            {/* Features List Container with Border, White Background, and Increased Width */}
            <Box
                sx={{
                    border: '1px solid #e0e0e0', // Adding border to parent Box
                    bgcolor: 'white', // Setting background color to white
                    borderRadius: 2,
                    p: 4, // Adding padding inside the Box
                    boxShadow: 3,
                    // width: '100%', // Make the box full-width within the container
                    // maxWidth:"md", // Set a max width to keep content manageable
                    mx: 'auto' // Center the box within the container
                }}
            >
                {features.map((feature, index) => (
                    <Grid
                        container
                        spacing={3}
                        key={index}
                        direction={index % 2 === 0 ? "row" : "row-reverse"}
                        alignItems="center"
                        sx={{ mb: 5 }}
                    >
                        {/* Image Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{ borderRadius: 2 }}>
                                <CardMedia
                                    component="img"
                                    image={feature.image}
                                    alt={feature.title}
                                    sx={{ height: 300, objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid>

                        {/* Content Section */}
                        <Grid item xs={12} md={6}>
                            <CardContent sx={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{ fontWeight: 'bold', color: 'black', mb: 2 }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Container>
    );
}

export default Features;
