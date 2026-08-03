import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const data = [
  { percentage: '+100%', label: 'Zero Data Leaks' },
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
          flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          px: 1,
          gap: isMobile ? 2 : 10,
          minWidth: '100%',
          overflowX: 'auto',
        }}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                flex: isMobile ? '1 1 0' : 'none',
                minWidth: isMobile ? 0 : 100,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
                {item.percentage}
              </Typography>
              <Typography
  variant="body2"
  sx={{
    color: "#fff",
    mt: 0.5,
    fontSize: { xs: "10px", sm: "15px" },
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
>
  {item.label}
</Typography>
            </Box>
            {index < data.length - 1 && (
              <Box
                sx={{
                  width: '1px',
                  height: 40,
                  bgcolor: "#ffffff66",
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
