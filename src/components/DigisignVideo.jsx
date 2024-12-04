import React from 'react'
import intro from '../assets/sliderImages/introVideo.mp4'
import { Box, Button,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DigisignVideo = () => {

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '40%',
      }}
    >
      <video
        style={{
          width: '100%',
          height: '100%',  
          objectFit: 'cover', 
        }}
        autoPlay
        muted
        loop 
      >
        <source src={intro} type="video/mp4" />
      </video>
    </Box>
  )
}

export default DigisignVideo
