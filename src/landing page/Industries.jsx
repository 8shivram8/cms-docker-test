import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import AiPowered from './Icons/feature icons/AiPowered';
import Colaborate from './Icons/feature icons/Colaborate';
import WorkflowAuto from './Icons/feature icons/WorkflowAuto';
import RichData from './Icons/feature icons/RichData';
import Operations from './Icons/Industries icons/Operations';
import Procurment from './Icons/Industries icons/Procurment';
import ItIndustries from './Icons/Industries icons/ItIndustries';
import Founders from './Icons/Industries icons/Founders';

const Industries = () => {
  const data = [
    {
      icon: <Operations />,
      title: 'Operations / HR / Compliance Managers',
      subtitle: 'Eliminate manual tasks, reduce errors, and speed up onboarding and approvals.',
    },
    {
      icon: <Procurment />,
      title: 'Procurement / Vendor Managers',
      subtitle: 'Collect vendor documents and verification info effortlessly without requiring vendor logins.',
    },
    {
      icon: <ItIndustries />,
      title: 'IT / Digital Transformation Leaders',
      subtitle: 'Launch AI-powered workflows in hours, not weeks—without the hassle of building custom',
    },
    {
      icon: <Founders />,
      title: 'Founders / SMEs / CXOs',
      subtitle: 'Get the agility and visibility you need. Cut delays, track progress, and focus on growing your business.',
    },
  ];

  return (
    <Box width="100%" mt={10} mb={10}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
          Industries
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box
                sx={{
                  border: '0.5px solid #5B5B5D',
                  borderRadius: 4,
                  height: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  pt: 3,
                  px: 3,
                  bgcolor: 'white',
                }}
              >
                <Box>{item.icon}</Box>
                <Typography variant="h6" fontWeight={600} ml={1}>
                  {item.title}
                </Typography>
                <Typography fontSize={14} color="text.secondary" mt={1} ml={1}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries;
