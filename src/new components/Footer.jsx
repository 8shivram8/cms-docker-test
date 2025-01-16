import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';

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
        padding: isMobile ? '20px' : isTablet ? '30px' : '40px',
        boxShadow: 3,
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'center' : 'flex-start'}
        gap={isMobile ? 2 : 4}
      >
        {/* Left Section */}
        <Box ml={isMobile ? 2 : isTablet ? 5 : 10} textAlign={isMobile ? 'left' : 'left'} display={'flex'} flexDirection={'column'} gap={2}>
          <Typography fontWeight="bold" fontSize={'25px'} >Coalitionify</Typography>
          {!isMobile ? (
            <Typography
              variant={'caption'}
              fontWeight={400}
              fontSize={'14px'}
              sx={{ color: '#939AAD' }}
            >
              We’re here to help! Whether you have questions about <br />
              our services, need support, or want to discuss a potential <br />
              project, feel free to reach out.
            </Typography>
          ) :
            (
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
            )
          }

        </Box>

        {/* Right Section */}
        <Box mr={isMobile ? 2 : isTablet ? 5 : 10} textAlign={!isMobile ? 'left' : 'center'}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Box>
            <Typography variant="body2">Phone: (123) 456-7890</Typography>
            <Typography variant="body2" mt={1}>Email: contact@company.com</Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mt: 3, borderColor: 'gray',mb:isMobile ? 2 :1 }} />

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
            color: '#767F8C', // New color for Typography
            fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
          }}
        >
          © {new Date().getFullYear()} AYS Software Solution. All rights reserved.
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
            href="https://facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#767E94' }}
            component="a"
            href="https://github.com"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
}

export default Footer;
