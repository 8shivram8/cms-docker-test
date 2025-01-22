import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/AcoSignLogo.png';

const Hubspot = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contentData = [
    {
      title: 'Centralized Marketing and Sales',
      subtitle:
        'Integrate Hubspot to centralize your marketing and sales efforts. Access all your contacts, leads, and deals in one platform while ensuring seamless synchronization with your workflows. Save time and enhance efficiency by eliminating the need for manual data entry.',
    },
    {
      title: 'Real-Time Analytics',
      subtitle:
        'Leverage Hubspot integration to gain real-time insights into your marketing campaigns and sales performance. Monitor metrics, track conversions, and make data-driven decisions with ease. This integration keeps you ahead by providing actionable insights right when you need them.',
    },
    {
      title: 'Custom Workflow Automation',
      subtitle:
        'Simplify and automate your marketing and sales processes with Hubspot integration. Automate lead nurturing, task assignments, and follow-ups directly within your workflows. Focus on building relationships while the system handles repetitive tasks efficiently.',
    },
  ];

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, ml: !isMobile ? 5 : 0, mr: 5, mt: 2 }}>
        <img
          src={logo}
          width="150"
          height="auto"
          alt="Logo"
          style={{ cursor: 'pointer' }}
          onClick={handleNavigate}
        />
      </Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    color: '#99A2AC',
                    p: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  disableRipple
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="body1" sx={{ ml: 1, color: '#99A2AC' }}>
                  Back
                </Typography>
              </Box>
              <Box display="flex">
                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    fontWeight: 600,
                    backgroundImage: theme.palette.linearColor.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hubspot Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                Enhance your marketing and sales strategies with Hubspot integration. Automate tasks, track analytics, and centralize customer data for improved efficiency and decision-making. 
                Experience seamless workflows designed for modern businesses.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <video
                controls
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <source src="your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mt: 4 }}>
              {contentData.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'black',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      color: theme.palette.text.secondary,
                      wordWrap: 'break-word',
                      lineHeight: 1.6,
                      mt: 1,
                      textAlign: 'left',
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hubspot;
