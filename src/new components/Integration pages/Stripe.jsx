import React from 'react';
import { Box, Grid, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/acoflow.png';
import { useMixpanel } from '../../mixpanel/MixpanelContext';

const Stripe = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const { trackEvent } = useMixpanel()
  const contentData = [
    {
      title: 'Seamless Payment Processing',
      subtitle:
        'Integrating Stripe into your platform enables secure and efficient payment processing. Accept a wide variety of payment methods including credit cards, debit cards, wallets, and bank transfers, all while providing a smooth checkout experience for your customers.',
    },
    {
      title: 'Global Payment Reach',
      subtitle:
        'With Stripe, you can accept payments from customers around the world. It supports a variety of currencies and payment methods, making it easy to scale your business globally. Expand your reach and manage international transactions effortlessly.',
    },
    {
      title: 'Custom Payment Workflows',
      subtitle:
        'Stripe integration allows you to customize payment workflows tailored to your business needs. Set up recurring payments, automate invoices, and manage subscriptions with ease, all while keeping the process secure and user-friendly.',
    },
  ];

  const handleNavigate = () => {
    navigate('/');
    trackEvent('move to home page')
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
                  onClick={() => {
                    navigate(-1)
                    trackEvent('Back button clicked')
                }}
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
                  Stripe Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                Enhance your payment systems with Stripe. From seamless payment processing to global reach and customizable workflows, 
                Stripe provides a powerful solution for businesses of all sizes to manage payments securely and efficiently.
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

export default Stripe;
