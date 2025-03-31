import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useMixpanel } from '../mixpanel/MixpanelContext';


function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { trackEvent } = useMixpanel()
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: isMobile ? '20px' : isTablet ? '30px' : '40px',
        boxShadow: 3,
      }}
    >
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">

        <Grid item xs={12} sm={6} md={4} lg={4} textAlign={isMobile ? 'center' : 'left'}>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'}>
            <Typography fontWeight="bold" fontSize={'25px'} mb={1} >Coalitionify</Typography>
            <Typography
              variant={'caption'}
              fontWeight={400}
              fontSize={'14px'}
              sx={{ color: '#939AAD' }}
            >
              We’re here to help! Whether you have questions about
              our services, need support, or want to discuss a potential
              project, feel free to reach out.
            </Typography>

          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={4} textAlign={isMobile ? 'center' : 'left'}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center '}>

            <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'left'} sx={{ lineHeight: 1.5 }}>
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              <span onClick={() => {
                handleLinkClick('/privacy')
                trackEvent('move to privacy policy page')
              }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Privacy Policy</span>
              <span onClick={() => {
                handleLinkClick('/terms-conditions')
                trackEvent('move to terms and conditions page')
              }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Terms & Conditions</span>
              <span onClick={() => {
                handleLinkClick('/refund-policy')
                trackEvent('move to Cancellation/Refund Policy page')
              }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Cancellation/ Refund Policy</span>
            </Box>
          </Box>
        </Grid>


        {/* <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Address</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'} sx={{ lineHeight: 1.5 }}>
            <Typography variant="body2">1234 Street Name</Typography>
            <Typography variant="body2">City, State, 12345</Typography>
            <Typography variant="body2">5678 Another St</Typography>
            <Typography variant="body2">Another City, State, 67890</Typography>
          </Box>
        </Grid> */}

        <Grid item xs={6} sm={6} md={4} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'left'}>
            {/* <Typography variant="body2">Phone: (123) 456-7890</Typography> */}
            <Typography variant="body2" onClick={()=>trackEvent('click on email')}>
            Email : {' '}
              <a href="mailto:support@coalitionify.com" style={{ textDecoration: 'none', color: 'inherit' }}>
               support@coalitionify.com
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2, borderColor: 'gray' }} />
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems="center"
        mx={10}
      >
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: '#767F8C',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          © {new Date().getFullYear()} Coalitionify Innovate Private Limited. All rights reserved.
        </Typography>
        <Box
          mt={isMobile ? 2 : 0}
          display="flex"
          gap={1}
          sx={{
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}
        >

          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://www.npmjs.com/package/coalitionify-sdk"
            target="_blank"
            onClick={() => trackEvent('Github icon clicked')}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://www.youtube.com/@CoalitionifyInnovate"
            target="_blank"
            onClick={() => trackEvent('Youtube icon clicked')}
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
