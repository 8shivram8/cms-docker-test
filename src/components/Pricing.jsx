import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
const Pricing = () => {
    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: '#E5E5E5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                height: 'auto',
                gap: 2,
            }}
        >
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 2,
                    minWidth: '300px',
                    alignItems: 'flex-start',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: '1.8rem',
                        fontWeight: 400,
                        lineHeight: 1.3,
                        marginBottom: 1,
                    }}
                >
                    Go paperless, save hours: Revolutionize your document signing.
                </Typography>
                <Typography
                        variant='subtitle2'
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 400,
                            lineHeight: 1.5,
                        }}
                    >
                        With Coalitionify,Transform the way you sign - quick, secure, and eco-friendly.
                    </Typography>
               
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    minWidth: '200px',
                }}
            >
                <Button
                    href='https://app.coalitionify.com/login'
                    target='_blank'
                    variant="contained"
                    color="primary"
                    endIcon=<EastIcon/>
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
            </Box>
        </Box>
    );
};

export default Pricing;
