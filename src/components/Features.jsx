import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import digisign from '../assets/digisign.jpg'
// import workflow from '../assets/newworkflow.jpg'
import workflow from '../assets/workflow.jpg'
import dailydiary from '../assets/diary.jpg'
// import dailydiary from '../assets/diary1.jpg'
function Features() {
    const features = [
        {
            title: "Workflow",
            description: "Boost productivity by creating custom workflows that automate tasks, set priorities, and improve team collaboration. Track project stages and streamline processes for efficient completion.",
            image: `${workflow}`,
        },
        {
            title: "Digital Signature",
            description: "Sign, share, and authenticate documents securely with legally binding digital signatures. Ensure trust and compliance with multi-layer security for remote approvals.",
            image: `${digisign}`,
        },
        {
            title: "Daily Diary",
            description: "Organize and track daily activities to enhance accountability. Perfect for managers and teams, this feature logs progress and highlights key actions to ensure continuous improvement.",
            image: `${dailydiary}`,
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
                            <CardContent sx={{ textAlign: 'left' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '20px',
                                        borderColor: '#1F75FE',
                                        color: '#1F75FE',
                                        textTransform: 'none',
                                        padding: '3px 7px',
                                        fontSize: '0.8rem',
                                        mb: 2
                                    }}
                                >
                                    How It Work
                                </Button>
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
