import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import digisign from '../assets/digisign.jpg';
import workflow from '../assets/workflow.jpg';
import dailydiary from '../assets/diary.jpg';
import EastIcon from '@mui/icons-material/East';
import { useTheme } from '@emotion/react';

function Features() {
    const features = [
        {
            title: "E-sign Workflow For Business",
            description: [
                "Digital Signatures Made Easy: Send, track, and sign documents effortlessly.",
                "Automated Workflows: Save time by streamlining your document processes.",
                "Secure and Legally Binding: Ensure every signature meets compliance standards.",
                "Perfect for Every Need: Ideal for contracts, agreements, and approvals."
            ],
            image: `${digisign}`,
            button: "Explore More",
            link: "/esignWorkflow"  // Sample route
        },
        {
            title: "Business Workflow Automation",
            description: [
                "Effortless Workflow Design: Create custom forms tailored to your unique requirements with ease.",
                "Multi-User Access: Enable sequential access for multiple users to collaborate seamlessly.",
                "Data Integration: Automatically integrate collected data into your system for efficient management.",
                "Simplified Management: Streamline your data collection and workflows like never before."
            ],
            image: `${workflow}`,
            button: "Explore More",
            link: "/businessWorkflow"
        },
        {
            title: "Daily Diary",
            description: [
                "Stay Consistent: Effortlessly track recurring data like medical records with ease.",
                "Smart Integration: Seamlessly connect with iWatch and Siri for reminders and updates.",
                "Hands-Free Convenience: Use voice-enabled input to save time and stay organized.",
                "Time-Saving Solution: Designed for hassle-free, consistent data management."
            ],
            image: `${dailydiary}`,
            button: "Explore More",
            link: "/dailyDiary"
        },
    ];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));



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
                }}
            >
                <Typography
                    variant="outlined"
                    sx={{
                        color: 'primary.main',
                        textTransform: 'none',
                        padding: '3px 7px',
                        fontSize: '2.5rem',
                        mt: 1,
                        mb: 2
                    }}
                >
                    Solutions
                </Typography>
            </Box>

            {features.map((feature, index) => (
                <Grid
                    container
                    spacing={3}
                    key={index}
                    direction={index % 2 === 0 ? "row" : "row-reverse"}
                    // alignItems="center"
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

                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        <CardContent sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ fontWeight: 400, color: 'black', mb: 2, fontSize: { xs: '1.5rem', sm: '1.8rem' } }}
                            >
                                {feature.title}
                            </Typography>

                            <Typography variant="body1" color="text.secondary" component="ul" sx={{ paddingLeft: 2, listStyleType: "none", padding: 0, mt: 2 }}>
                                {feature.description.map((point, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap' }}>
                                        <EastIcon sx={{ marginRight: 1, minWidth: '24px' }} /> {/* Icon for bullet */}
                                        <span style={{ flex: 1 }}>{point}</span> {/* Ensure point text stays aligned next to the icon */}
                                    </li>
                                ))}
                            </Typography>
                        </CardContent>

                        {/* Positioned button at the bottom right */}
                        <Button
                            variant="outlined"
                            endIcon={<EastIcon />}
                            sx={{
                                position: 'absolute',
                                bottom: isMobile ? 0 : 10,
                                right: 10,
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                textTransform: 'none',
                                padding: '3px 7px',
                                fontSize: '1rem',
                            }}
                        >
                            <a
                                href={feature.link} // React Router paths like /esign-workflow
                                target="_blank" // Opens in a new tab
                                rel="noopener noreferrer" // Security best practice
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {feature.button}
                            </a>
                        </Button>


                    </Grid>


                </Grid>
            ))}
        </Box>
    );
}

export default Features;
