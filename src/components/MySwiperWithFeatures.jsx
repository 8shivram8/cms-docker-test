import React from 'react';
import ImageSlider from './ImageSlider';
import Pricing from './Pricing';
import { Box, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import img1 from '../assets/sliderImages/gogreen.webp';
import img2 from '../assets/sliderImages/savetime.webp';
import img3 from '../assets/sliderImages/gogreen.webp';
import DigisignVideo from './DigisignVideo';
import EastIcon from '@mui/icons-material/East';


const MySwiper = () => {
    const images = [img1, img2, img3];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

            <Box>
                <Pricing />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: !isMobile ? 'row' : 'column' }}>
                <ImageSlider images={images} />
                <DigisignVideo />
            </Box>

            <Box
                sx={{
                    padding: 3,
                    mt: 3,
                    backgroundColor: '#f3f4f6',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    // alignItems="center"
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
                            Empowering Business Towards IGBC Certification
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 400,
                                lineHeight: 1.5,
                            }}
                        >
                            Accelerate your IGBC certification goals by leveraging paperless, automated solutions for your business.
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Button
                                href='/IGBCCertification'
                                // target='_blank'
                                variant="contained"
                                color="primary"
                                endIcon=<EastIcon />
                                sx={{
                                    maxWidth: '220px',
                                    mt: 2,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'capitalize',
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
};

export default MySwiper;
