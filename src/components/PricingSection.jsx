import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid, Card, CardContent, Button, Stack, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

function PricingSection() {
    const plans = [
        {
            name: "Basic",
            price: "$0",
            description: "Great for individuals just getting started.",
            features: ["5 Projects", "Basic Support", "Community Access"],
            isPopular: false,
        },
        {
            name: "Pro",
            price: "$19/month",
            description: "Ideal for professionals and growing teams.",
            features: ["Unlimited Projects", "Priority Support", "Access to All Features"],
            isPopular: true,
        },
        {
            name: "Enterprise",
            price: "Contact Us",
            description: "Advanced solutions for large organizations.",
            features: ["Custom Projects", "Dedicated Support", "Full Suite of Features", "Onboarding Assistance"],
            isPopular: false,
        },
    ];

    return (
        <Box 
            component="section" 
            sx={{ 
                bgcolor: '#f3f4f6', 
                paddingY: 6,
                marginTop: 5,
            }}
        >
            <Container maxWidth="lg">
                <Stack 
                    spacing={2} 
                    textAlign="center" 
                    sx={{
                        color: 'black',
                        marginBottom: 4,
                    }}
                >
                    <Typography 
                        variant="h5" 
                        sx={{ fontWeight: 'bold', color: 'black' }}
                    >
                        Pricing Plans
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}
                    >
                        Choose a plan that suits your needs and take your experience to the next level.
                    </Typography>
                </Stack>

                <Grid container spacing={4} justifyContent="center">
                    {plans.map((plan, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                sx={{ 
                                    textAlign: 'center', 
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    bgcolor: plan.isPopular ? '#e8f5fe' : '#fff',
                                    border: plan.isPopular ? '2px solid #1F75FE' : 'none',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box 
                                    sx={{ 
                                        padding: 3, 
                                        height: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        justifyContent: 'space-between' 
                                    }}
                                >
                                    <CardContent>
                                        {/* Popular Badge */}
                                        {plan.isPopular && (
                                            <Typography 
                                                variant="subtitle2" 
                                                sx={{ 
                                                    bgcolor: '#1F75FE', 
                                                    color: '#fff', 
                                                    padding: '4px 8px', 
                                                    borderRadius: 1, 
                                                    fontWeight: 'bold', 
                                                    display: 'inline-block', 
                                                    marginBottom: 2 
                                                }}
                                            >
                                                <StarIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                                                Popular Choice
                                            </Typography>
                                        )}
                                        
                                        {/* Plan Name and Price */}
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                color: 'black', 
                                                marginBottom: 1 
                                            }}
                                        >
                                            {plan.name}
                                        </Typography>
                                        <Typography 
                                            variant="h4" 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                color: '#1F75FE', 
                                                marginBottom: 1 
                                            }}
                                        >
                                            {plan.price}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: 'text.secondary', 
                                                marginBottom: 2 
                                            }}
                                        >
                                            {plan.description}
                                        </Typography>

                                        {/* Divider */}
                                        <Divider sx={{ marginY: 2 }} />

                                        {/* Features List */}
                                        <Stack spacing={1} sx={{ marginBottom: 3 }}>
                                            {plan.features.map((feature, idx) => (
                                                <Box 
                                                    key={idx} 
                                                    display="flex" 
                                                    alignItems="center" 
                                                    justifyContent="center"
                                                >
                                                    <CheckCircleIcon 
                                                        sx={{ color: '#1F75FE', marginRight: 1 }} 
                                                    />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </CardContent>

                                    {/* Action Button */}
                                    <Button 
                                        variant={plan.isPopular ? "contained" : "outlined"} 
                                        color="primary" 
                                        fullWidth 
                                        sx={{
                                            paddingY: 1.5,
                                            fontWeight: 'bold',
                                            marginTop: 2
                                        }}
                                    >
                                        {plan.isPopular ? "Get Started" : "Learn More"}
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default PricingSection;
