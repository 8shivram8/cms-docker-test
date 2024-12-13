import React from 'react'
import { Box, Typography } from '@mui/material'

const BusinessWorkflow = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        // height:'auto'
        flex:1
      }}
    >
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 'bold', 
          textAlign: 'center',
          color: 'primary.main'
        }}
      >
        Coming Soon...
      </Typography>
    </Box>
  )
}

export default BusinessWorkflow
