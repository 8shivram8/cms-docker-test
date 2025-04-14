import React from 'react';
import { Box, Typography } from '@mui/material';
import Clinical from './Icons/Clinical';
import RealEstate from './Icons/RealEstate';
import Staffing from './Icons/Staffing';
import Manufact from './Icons/Manufact';
import Logistic from './Icons/Logistic';
import Helthcare from './Icons/Helthcare';

const HorizontalBar = () => {
  const items = [
    { icon: <Clinical />, title: 'Clinical Research' },
    { icon: <RealEstate />, title: 'Real Estate' },
    { icon: <Staffing />, title: 'Staffing and HR' },
    { icon: <Manufact />, title: 'Manufacturing and Retail' },
    { icon: <Logistic />, title: 'Logistics and Transport' },
    { icon: <Helthcare />, title: 'Healthcare' },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#ECF4FF',
        px: 2,
        py: 1.5,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 3, md: 8 },
          minWidth: 'fit-content',
          ml: 3,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              minWidth: { xs: 150, md: 'auto' },
              flexShrink: 0,
            }}
          >
            <Box sx={{ width: 40, height: 40 }}>{item.icon}</Box>
            <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={500}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalBar;
