import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import PriceIcon from '../Custom Icons/PriceIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const pricedata = [
  // { feature: 'Limited PDF Pages', free: '(max 10)', standard: '(max 10)', premium: '(max 40)' },
  { feature: 'projects', free: 'Unlimited', standard: '20 (max)', premium: 'Unlimited' },
  { feature: 'jobs', free: 'Unlimited', standard: '100 per project(max)', premium: 'Unlimited' },
  { feature: 'Standard form fields', free: true, standard: true, premium: true },
  { feature: 'Multimedia input field', free: true, standard: true, premium: true },
  { feature: 'Custom branding', free: true, standard: true, premium: true },
  { feature: 'Advanced analytics', free: true, standard: true, premium: true },
  { feature: 'Team collaboration', free: true, standard: true, premium: true },
  { feature: 'Email notifications', free: true, standard: true, premium: true },
  { feature: 'API access', free: true, standard: true, premium: true },
  { feature: '24/7 support', free: true, standard: true, premium: true },
  { feature: 'Priority support', free: true, standard: true, premium: true },
  { feature: 'Additional storage', free: true, standard: true, premium: true },
  { feature: 'Advanced security', free: true, standard: true, premium: true },
];

const headers = [' ', 'Free', 'Standard', 'Professional'];

const PricingTable = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Grid container spacing={3} padding={2} mt={1}>
      <Grid item xs={12}>
        <Grid container spacing={3} mb={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontWeight: '200', fontSize: '18px' }}></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2.6}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '18px' }}>
                Free (1 month)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2.6}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '18px' }}>
                Standard
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2.6}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '18px' }}>
                Professional
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              padding={2}
              border="1px solid #e0e0e0"
              borderRadius="12px"
              background="linear-gradient(0deg, #F5F5F5 0%, #FFFFFF 29.88%)"
              display="flex"
              flexDirection="column"
              gap={2.2}
              alignItems="flex-start"
            >
              {pricedata.slice(0, showAll ? pricedata.length : 5).map((row, index) => (
                <Box display="flex" alignItems="center" gap={2} key={index}>
                  <Typography variant="body1">{row.feature}</Typography>
                  <PriceIcon />
                </Box>
              ))}
            </Box>
          </Grid>


          {['free', 'standard', 'premium'].map((plan, planIndex) => (
            <Grid item xs={12} sm={6} md={2.6} key={planIndex}>
              <Box
                padding={2}
                border="1px solid #e0e0e0"
                borderRadius="12px"
                textAlign="center"
                display="flex"
                flexDirection="column"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                {pricedata.slice(0, showAll ? pricedata.length : 5).map((row, index) => {
                  if ((index === 0 || index === 1)) {
                    return (
                      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '12px' }} key={index}>
                        {row[plan]}
                      </Typography>
                    );
                  }
                  return row[plan] === true ? (
                    <CheckCircleIcon key={index} sx={{ fontSize: 18 }} />
                  ) : (
                    <Box key={index} sx={{ width: 18, height: 18, visibility: 'hidden' }} />
                  );
                })}
              </Box>
            </Grid>
          ))}
        </Grid>


        <Grid item xs={12} md={11.8} mt={2}>
          <Box textAlign="center">
            <Button
              variant="outlined"
              onClick={toggleShowAll}
              disableRipple
              disableFocusRipple
              sx={{
                border: 'none',
                width: '100%',
                bgcolor: '#F6F6F6',
                textTransform: 'none',
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                alignItems: 'center',
                color: 'black',
                height: '45px',
              }}
            >
              {showAll ? (
                <>
                  Show Less <ExpandLessIcon sx={{ color: 'black' }} />
                </>
              ) : (
                <>
                  Show More <ExpandMoreIcon />
                </>
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PricingTable;
