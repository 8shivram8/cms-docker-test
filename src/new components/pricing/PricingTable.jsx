import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PriceIcon from '../Custom Icons/PriceIcon';

const pricedata = [
  { feature: 'Feature 1', free: false, standard: true, premium: true },
  { feature: 'Feature 2', free: true, standard: true, premium: true },
  { feature: 'Feature 3', free: false, standard: false, premium: true },
  { feature: 'Feature 4', free: true, standard: true, premium: false },
  { feature: 'Feature 5', free: false, standard: true, premium: true },
];

const headers = [' ', 'Free', 'Standard', 'Professional'];

const PricingTable = () => {
  return (
    <Grid container spacing={3} padding={2} mt={2}>
      {/* Header Row */}
      <Grid item xs={12} mb={0}>
        <Grid container spacing={3}>
          {headers.map((header, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                mr={6}
                textAlign="right"
              >
                <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '16px' }}> 
                  {header}
                </Typography>
                {/* <PriceIcon/> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Data Rows */}
      <Grid item xs={12} mt={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              padding={2}
              border= '1px solid #e0e0e0'
              borderRadius= '12px'
              background="linear-gradient(0deg, #F5F5F5 0%, #FFFFFF 29.88%)"
              textAlign="left"
              // minHeight="200px"  // Ensure there’s height for the background to be visible
            >
              {pricedata.map((row, index) => (
                <Typography variant="body1" key={index} marginBottom={1}>
                  {row.feature}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.400"
              textAlign="center"
            >
              {pricedata.map((row, index) => (
                <Typography variant="body1" key={index} marginBottom={1}>
                  {row.free ? 'Yes' : 'No'}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.400"
              textAlign="center"
            >
              {pricedata.map((row, index) => (
                <Typography variant="body1" key={index} marginBottom={1}>
                  {row.standard ? 'Yes' : 'No'}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2.6}>
            <Box
              padding={2}
              border={1}
              borderRadius={2}
              borderColor="grey.400"
              textAlign="center"
            >
              {pricedata.map((row, index) => (
                <Typography variant="body1" key={index} marginBottom={1}>
                  {row.premium ? 'Yes' : 'No'}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PricingTable;
