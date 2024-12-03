import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid, Card, CardContent, Stack, Avatar, Divider } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

function Internationalization() {
    const languages = [
        { name: "English", code: "EN", description: "Primary language for global communication." },
        { name: "Spanish", code: "ES", description: "Spoken by over 460 million people worldwide." },
        { name: "French", code: "FR", description: "Official language in 29 countries." },
        { name: "German", code: "DE", description: "Widely used in the European Union." },
        { name: "Japanese", code: "JA", description: "Key language in East Asia with unique script." },
    ];

    return (
        <Box 
            component="section" 
            sx={{ 
                paddingY: 6,
            }}
        >
            <Container maxWidth="md">
                <Stack 
                    spacing={2} 
                    textAlign="center" 
                    sx={{
                        color: 'black',
                        marginBottom: 4,
                    }}
                >
                    {/* Centered Icon */}
                    <Box display="flex" justifyContent="center">
                        <LanguageIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                    </Box>
                    
                    <Typography 
                        variant="h4" 
                        sx={{ fontWeight: 'bold', color: 'black' }}
                    >
                        Internationalization
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}
                    >
                        Our application supports multiple languages, enabling users worldwide to engage seamlessly. Currently, we support the following languages:
                    </Typography>
                </Stack>

                <Grid container spacing={3} justifyContent="center">
                    {languages.map((language, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Card 
                                sx={{ 
                                    textAlign: 'center', 
                                    padding: 2, 
                                    bgcolor: '#bbdefb',
                                    boxShadow: 2,
                                    borderRadius: 2,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                    maxWidth: 240,
                                    height: 150, // Ensuring a uniform height
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <CardContent>
                                    {/* Horizontal Avatar and Language Name */}
                                    <Box 
                                        display="flex" 
                                        alignItems="center" 
                                        justifyContent="center" 
                                        sx={{ marginBottom: 1 }}
                                    >
                                        <Avatar 
                                            sx={{ 
                                                bgcolor: 'primary.main', 
                                                width: 32, 
                                                height: 32,
                                                fontSize: '0.9rem',
                                                fontWeight: 'bold',
                                                color: '#fff',
                                                marginRight: 1,
                                            }}
                                        >
                                            {language.code}
                                        </Avatar>
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                color: 'black' 
                                            }}
                                        >
                                            {language.name}
                                        </Typography>
                                    </Box>
                                    
                                    <Divider 
                                        sx={{ 
                                            marginY: 1.5, 
                                            backgroundColor: '#1F75FE' 
                                        }} 
                                    />
                                    
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary" 
                                        sx={{ paddingX: 1 }}
                                    >
                                        {language.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Internationalization;
