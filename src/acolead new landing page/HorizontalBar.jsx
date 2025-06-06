import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const data = [
  { percentage: '+100 %', label: 'Zero Data Leaks' },
  { percentage: '+63%', label: 'Operational Efficiency' },
  { percentage: '+50%', label: 'Work-Life Balance' },
];

const HorizontalBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#1677F7',
        py: 2,
        overflowX: isMobile ? 'auto' : 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'flex-start' : 'center',
          alignItems: 'center',
          px: 2,
          gap:isMobile ? 4 : 10,
          minWidth: isMobile ? 'max-content' : 'auto',
        }}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                textAlign: 'center',
                minWidth: 100,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff' }}>
                {item.percentage}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#fff', fontSize: 12, mt: 0.5 }}
              >
                {item.label}
              </Typography>
            </Box>
            {index < data.length - 1 && (
              <Box
                sx={{
                  width: '1px',
                  height: 40,
                  bgcolor: '#e0e0e0',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalBar;
