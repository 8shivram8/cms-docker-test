import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const Pricing = () => {
    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#E5E5E5',
            }}
        >
            <Grid 
                container 
                spacing={2} 
                alignItems="center" 
                justifyContent="center"
            >
                <Grid 
                    item 
                    xs={12} 
                    md={8} 
                    sx={{ 
                        textAlign: { xs: 'center', md: 'left' }, 
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.8rem' },
                            fontWeight: 400,
                            lineHeight: 1.3,
                            marginBottom: 1,
                        }}
                    >
                        Go paperless, save hours: Revolutionize your document signing.
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            fontWeight: 400,
                            lineHeight: 1.5,
                        }}
                    >
                        With Coalitionify, transform the way you sign - quick, secure, and eco-friendly.
                    </Typography>
                </Grid>

                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}
                >
                    <Button
                        href="https://app.coalitionify.com/login"
                        target="_blank"
                        variant="contained"
                        color="primary"
                        endIcon={<EastIcon />}
                        sx={{
                            width: '100%',
                            maxWidth: '220px',
                            height: '50px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                        }}
                    >
                        Start your free trial
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Pricing;
