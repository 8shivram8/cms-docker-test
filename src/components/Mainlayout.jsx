import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack, Card, CardContent, Grid, Grow } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupIcon from '@mui/icons-material/Group';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Features from './Features';
import Internationalization from './Internationalization';
import PricingSection from './PricingSection';
import Faqs from './Faqs';

function Mainlayout() {
    const features = [
        {
            title: "Design",
            description: "Create customized forms and workflows tailored to your project needs. Our intuitive design tools allow you to build complex forms easily.",
            icon: <DesignServicesIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
        {
            title: "Align",
            description: "Easily collaborate by assigning forms and workflows to team members. With our alignment tools, you can manage access, assign forms and fields.",
            icon: <GroupIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
        {
            title: "Execute",
            description: "Run workflows seamlessly and track form submissions in real-time. Our execution system ensures that workflows proceed smoothly, while providing tracking and notifications.",
            icon: <PlayArrowIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
    ];

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            minHeight="100vh" 
            alignItems="center" 
            justifyContent="center"
        >
            <Container maxWidth="md">
                <Stack
                    textAlign="center"
                    spacing={2}
                    sx={{
                        color: '#fff',
                        paddingX: { xs: '20px', sm: '30px', md: '40px' },
                    }}
                >
                    <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                            fontWeight: 400, 
                            color: 'black', 
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } 
                        }}
                    >
                        Why Choose Us?{' '}
                        <Typography component="span"  sx={{ 
                            fontWeight: 400, 
                            color: '#1F75FE', 
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } ,
                        }}>
                            Discover the Advantages
                        </Typography>{' '}
                        with Colitionify
                    </Typography>
                    <Typography 
                        variant="h6" 
                        paragraph 
                        sx={{ 
                            color: 'black', 
                            margin: '0 auto', 
                            fontWeight: 200, 
                            fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' } 
                        }}
                    >
                        At Colitionify, we empower you to design, align, and execute seamless workflows with ease.
                    </Typography>
                </Stack>

                {/* Responsive Card Section with Hover Floating Effect */}
                <Grid container spacing={3} sx={{ marginTop: 3 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Grow in timeout={500 + index * 300}>
                                <Card 
                                    sx={{ 
                                        height: 300, 
                                        maxWidth: 360, 
                                        margin: 'auto', 
                                        textAlign: 'center', 
                                        boxShadow: 3, 
                                        borderRadius: 2,
                                        bgcolor: '#b3e5fc',
                                        padding: 2,
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px) scale(1.05)', 
                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <CardContent>
                                        {feature.icon}
                                        <Typography 
                                            variant="h6" 
                                            component="div" 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                marginTop: 2, 
                                                color: 'black' 
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            sx={{ marginTop: 1, paddingX: 1 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
            <Features/>
            <Internationalization/>
            <PricingSection/>
            <Faqs/>
        </Box>
    );
}

export default Mainlayout;
