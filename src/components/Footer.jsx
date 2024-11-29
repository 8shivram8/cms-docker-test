import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import logo from '../assets/logo.png';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 3,
        margin: isMobile ? '10px 5px' : isTablet ? '20px' : '40px 80px',
        padding: isMobile ? '20px' : isTablet ? '30px' : '40px',
        boxShadow: 3,
      }}
    >
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} sm={6} md={3} lg={3} textAlign={isMobile ? 'center' : 'left'}>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'}>
            <img src={logo} alt="Colitionify Logo" height={40} style={{ marginBottom: '10px' }} />
            <Typography variant="subtitle2" gutterBottom>
              Design, Align, Execute
            </Typography>
            <Typography variant="subtitle2">
              Uniting Ideas, Delivering Results
            </Typography>
            <Box mt={2} display="flex" gap={1} justifyContent={isMobile ? 'center' : 'flex-start'}>
              <IconButton sx={{ color: 'primary.main' }} component="a" href="https://facebook.com" target='_blank'>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'primary.main' }} component="a" href="https://twitter.com" target='_blank'>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'primary.main' }} component="a" href="https://instagram.com" target='_blank'>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'primary.main' }} component="a" href="https://github.com" target='_blank'>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'} sx={{lineHeight:1.5}}>
            <Link href="/about" color="inherit" underline="hover">About Us</Link>
            <Link href="/services" color="inherit" underline="hover">Services</Link>
            <Link href="/blog" color="inherit" underline="hover">Blog</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            <Link href="/privacy" color="inherit" underline="hover">Privacy Policy</Link>
          </Box>
        </Grid>

        {/* Address Section */}
        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Address</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'} sx={{lineHeight:1.5}}>
            <Typography variant="body2">1234 Street Name</Typography>
            <Typography variant="body2">City, State, 12345</Typography>
            <Typography variant="body2">5678 Another St</Typography>
            <Typography variant="body2">Another City, State, 67890</Typography>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={6} sm={6} md={3} textAlign={isMobile ? 'center' : 'left'}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'flex-start'}>
            <Typography variant="body2">Phone: (123) 456-7890</Typography>
            <Typography variant="body2">Email: contact@company.com</Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2, borderColor: 'gray' }} />
      <Typography variant="body2" color="#fff" align="center">
        © {new Date().getFullYear()} AYS Software Solution. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
