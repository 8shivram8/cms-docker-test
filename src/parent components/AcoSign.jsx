import React from 'react'
import { Typography, Box } from '@mui/material'

const AcoSign = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Coming Soon...
      </Typography>
      <Box
        sx={{
          display: 'inline-block',
          width: '80px',
          borderBottom: '4px solid #1976d2',
          animation: 'underlineAnimation 1.5s infinite'
        }}
      />
      <Typography variant="body1" sx={{ color: '#555', mt: 3 }}>
        We're working hard to bring you something amazing! Stay tuned.
      </Typography>
      <style>
        {`
          @keyframes underlineAnimation {
            0% { width: 80px; }
            50% { width: 120px; }
            100% { width: 80px; }
          }
        `}
      </style>
    </Box>
  )
}

export default AcoSign
