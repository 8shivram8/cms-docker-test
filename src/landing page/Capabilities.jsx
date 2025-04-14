import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import dashboardImg from '../assets/dashboard.jpeg'; // adjust path as needed
import MultiStep from './Icons/capability icons/MultiStep';
import Bulk from './Icons/capability icons/Bulk';
import NoCode from './Icons/capability icons/NoCode';
import Labeling from './Icons/capability icons/Labeling';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <MultiStep />,
      title: 'Multi Step Workflows',
      subtitle: 'Seamlessly route forms for approval, track changes, and notify stakeholders—all within AcoFlow.',
      color: '#1677F7',
    },
    {
      icon: <Bulk />,
      title: 'Bulk Submissions & Expiry Handling',
      subtitle: 'Collect information from hundreds of external users at once; set time-bound deadlines to keep things moving.',
      color: '#8338EC',
    },
    {
      icon: <NoCode />,
      title: 'No-Code Integration',
      subtitle: 'Connect with tools like Google Sheets, Slack, or Microsoft Teams for real-time collaboration.',
      color: '#FB5607',
    },
    {
      icon: <Labeling />,
      title: 'Full White-Labeling',
      subtitle: 'Customize branding and communication. Make every link, form, and notification truly yours in our premium plan.',
      color: '#F72585',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#ECF4FF', py: 10 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
        Key Capabilities
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center" px={{ xs: 2, md: 8 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={dashboardImg}
            alt="Capabilities"
            sx={{
              width: '100%',
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            sx={{
              maxWidth: '420px',
              ml: 'auto',
              mr: { xs: 2, md: 4 },
            }}
          >
            {capabilities.map((cap, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  bgcolor: 'white',
                  borderRadius: 2,
                  borderLeft: `6px solid ${cap.color}`,
                  p: 2.5,
                  boxShadow: 1,
                }}
              >
                <Box sx={{ mr: 2, mt: 0.5 }}>{cap.icon}</Box>
                <Box>
                  <Typography variant="body1" fontWeight={600}>
                    {cap.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cap.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Capabilities;
