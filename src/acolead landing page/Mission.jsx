import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Stack } from '@mui/material';
import img1 from '../assets/marketing2.jpeg';
import img2 from '../assets/marketing1.jpeg';

const infoItems = [
  {
    text: 'Product-Led Efficiency',
    subtext: 'Create intuitive, cloud-first software that automates everyday sales, marketing, and operational tasks—so teams can focus ongrowth, not grunt work.',
  },
  {
    text: 'Cutting-Edge, Cost-Effective',
    subtext: 'Combine AI, analytics, and modern architectures to deliver enterprise-grade capabilities at a price point every organisation can afford.',
  },
  {
    text: 'Nationwide Empowerment',
    subtext: 'Provide Pan-India rollout, multilingual interfaces, and responsive support, ensuring technology reaches businesses of every size and region.',
  },
  {
    text: 'Continuous Innovation & Partnership',
    subtext: 'Collaborate with customers and ecosystem partners to iterate rapidly,keeping our solutions relevant, secure,and future-ready.',
  },
];

const Mission = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // ml: isMobile ? 1 : 3,
        // mr: isMobile ? 1 : 1,
        // pl:isMobile ? 1 : 3
      }}
    >
      <Box ml={ isMobile ? 2 :4}>
      {/* Title */}
      <Typography
        variant={isMobile ? 'h5' : 'h3'}
        sx={{
          fontWeight: 700,
          mb: 1,
          ml: isMobile ? 1 : 0,
        }}
      >
        Mission
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '0.8rem',
          color: '#444',
          mb: 2,
          lineHeight: 1.6,
          maxWidth: '90%',
          ml: isMobile ? 1 : 0,
        }}
      >
        To put powerful, affordable digital tools in every business owner’s hand, transforming the
        way India sells, markets, and operates.
      </Typography>

      {/* Images */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={img1}
          alt="mission1"
          sx={{
            width: isMobile ? '100%' : '40%',
            height: isMobile ? 150 : 180,
            objectFit: 'contain',
          }}
        />
        <Box
          component="img"
          src={img2}
          alt="mission2"
          sx={{
            width: isMobile ? '100%' : '40%',
            height: isMobile ? 150 : 180,
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Info Grid */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          // justifyContent: 'space-between',
          mt: 4,
          gap: 3,
        }}
      >
        {infoItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? '100%' : '48%',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: '#000',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.2rem',
                width: '108px',
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Box>
            <Stack spacing={0.5}>
              <Typography
                sx={{
                  color: '#1677F7',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Typography>
              <Typography
                sx={{
                  color: '#444',
                  fontSize: '0.8rem',
                  textAlign:'justify'
                }}
              >
                {item.subtext}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default Mission;
