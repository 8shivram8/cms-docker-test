import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Transform = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        py: { xs: 8, md: 5 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{ bgcolor: '#81C784', }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h4" fontWeight={700} color="white" mt={2}>
            Ready to Transform Your Workflows?
          </Typography>
          <Typography variant="body1" color="white" maxWidth={600}>
            Join organizations worldwide that cut paperwork, automate approvals, and secure sign-offs in record time.
          </Typography>
          <Button
            variant="contained"
            target="_blank"
            href="https://app.coalitionify.com/signIn"
            sx={{
              mb: 2,
              // bgcolor: 'white',
              background: '#1677F7',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              mt: 2,
              '&:hover': {
                bgcolor: '#1677F7',
              },
            }}

          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Transform;
