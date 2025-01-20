import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import FirstKey from './Custom Icons/FirstKey'
import Key from './Custom Icons/Key'
const features = [
  { title: 'Dynamic Form Builder', subtitle: 'Easily create rich forms for every use case, add multimedia input on top of your document. Build multistep wizard for data collection.' },
  { title: 'Secure E-Signatures', subtitle: 'Collect legally binding signatures with audit trails, encryption, and QR scan. Bulk trigger, bulk signing, participant group and lot more to streamline your process.' },
  { title: 'Multi-User Workflows', subtitle: 'Collaborate with teams, clients, and stakeholders. Build simple to complex workflow in a minute. Try predefined templates for all your need in one click.' },
  { title: 'SDK Integration', subtitle: 'Connect seamlessly with any system your are using. Free integration support to onboard any system you want.' }
]

const KeyFeaturesNew = () => {
  return (
    <Box bgcolor="#1677F7" py={3} mt={7} position={'relative'}>
        <Box position="absolute" top={0} left={0}>
        <FirstKey />
      </Box>
      <Box position="absolute" top={0} right={0}>
        <Key />
      </Box>
      <Typography variant="h4" align="center" color="white" sx={{ fontWeight:700}}>
        Key Features
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid container justifyContent="center" maxWidth="lg">
          {features.map((feature, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Box textAlign="left" p={3}>
                <Typography variant="h6" color="white" fontWeight={700}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="white" mt={1}>
                  {feature.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default KeyFeaturesNew
