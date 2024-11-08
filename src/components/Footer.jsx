import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';  // Added GitHub icon
import { useMediaQuery, useTheme } from '@mui/material';

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
        borderRadius: 2,
        padding: isMobile ? '20px' : isTablet ? '30px' : '40px',
        boxShadow: 3,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img 
          src="/path/to/logo.png" 
          alt="Company Logo" 
          style={{ width: isMobile ? '100px' : '150px' }}
        />
      </Box>

      <Typography variant="h6" gutterBottom align="center">
        Connect with us:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: 'white' }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Link href="tel:+1234567890" color="inherit" sx={{ mx: 2 }}>
          +1 (234) 567-890
        </Link>
        <Link href="mailto:info@company.com" color="inherit" sx={{ mx: 2 }}>
          info@company.com
        </Link>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
        © {new Date().getFullYear()} Colitionify. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
