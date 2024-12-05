import React from 'react';
import ImageSlider from './ImageSlider';
import Pricing from './Pricing';
import { Box, Typography, Button ,Grid,useMediaQuery} from '@mui/material';
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
            <Box sx={{ width: '100%', display: 'flex', flexDirection: !isMobile ? 'row' :'column'}}>  
                <ImageSlider images={images} />
                <DigisignVideo />
            </Box>

            {/* <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h6">
                    Free every month - Try Now
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Pay as you go. No credit card required.
                </Typography>
                <Button
                    href='https://app.coalitionify.com/login'
                    target='_blank'
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
                    Free trial
                </Button>
            </Box> */}

        </Box>
    );
};

export default MySwiper;
