import { Box, Grid, Stack, Typography, Button, Container } from '@mui/material';
import centerimg from '../assets/centerimg.png';
import Features from './Features';
import FlowWithProvider from './Features';

function HeaderContent() {
    return (
        <Box
            id="home"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: 'auto',
                borderRadius: 9,
                // Add gradient background instead of the image
                // background: 'linear-gradient(to right, #00c6ff, #0072ff)', // You can adjust these colors
                // zIndex: -1,
            }}
        >
            <Container maxWidth="md">
                <Stack
                    textAlign="center"
                    sx={{
                        color: '#fff',
                        padding: { xs: '40px 10px', sm: '50px 15px', md: '60px 20px' },
                    }}
                >
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 500, color: 'black', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                        Streamline Your Projects Efficiently with Colitionify
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ color: 'black', margin: '0 auto', fontWeight: 300, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                        Create forms and manage workflows effortlessly. Colitionify centralizes collaboration with digital signatures and real-time updates.
                    </Typography>
                    {/* <Grid item xs={6} md={3} display="flex" justifyContent='center' mt={3}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                backgroundColor: 'black',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#007BFF',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Grid> */}
                </Stack>
            </Container>
            {/* <Features/> */}
            {/* <FlowWithProvider/> */}
            {/* <Box display="flex" justifyContent="center" alignItems="center" maxWidth={600} mt={0}>
                <img
                    src={centerimg}
                    alt="Demo Display Image"
                    style={{
                        borderRadius: '10px',
                        width: '100%',
                        height: 'auto',
                    }}
                    sizes="(max-width: 400px) 100vw, (max-width: 800px) 80vw, 500px"
                />
            </Box> */}
        </Box>
    );
}

export default HeaderContent;
