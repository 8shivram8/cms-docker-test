import React from 'react'
import intro from '../assets/sliderImages/introVideo.mp4'
import { Box, Button } from "@mui/material";
const DigisignVideo = () => {
  return (
    <Box
      sx={{
        width: '40%', 
        height: '498px', 
        margin: '0 auto',
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
        Your browser does not support the video tag.
      </video>
    </Box>
  )
}

export default DigisignVideo
