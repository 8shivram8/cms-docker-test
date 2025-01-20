import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
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
       
        <Grid item xs={12} sm={6} md={3} lg={3} textAlign={isMobile ? 'center' : 'left'}>
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

        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'} sx={{ lineHeight: 1.5 }}>
            <span onClick={() => handleLinkClick('/privacy')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Privacy Policy</span>
            <span onClick={() => handleLinkClick('/terms-conditions')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Terms & Conditions</span>
            <span onClick={() => handleLinkClick('/refund-policy')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Cancellation/ Refund Policy</span>
          </Box>
        </Grid>

       
        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Address</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'} sx={{ lineHeight: 1.5 }}>
            <Typography variant="body2">1234 Street Name</Typography>
            <Typography variant="body2">City, State, 12345</Typography>
            <Typography variant="body2">5678 Another St</Typography>
            <Typography variant="body2">Another City, State, 67890</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'}>
            {/* <Typography variant="body2">Phone: (123) 456-7890</Typography> */}
            <Typography variant="body2">Email: support@coalitionify.com</Typography>
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
            href="https://github.com"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://www.youtube.com/channel/UCGjNgPkRGyU0AHQMkFrjdeg"
            target="_blank"
          >
             <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
