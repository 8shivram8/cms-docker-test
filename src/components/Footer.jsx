import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useMediaQuery, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      component="footer"
      sx={{ padding: isMobile ? "10px" : isTablet ? "20px" : "30px" }}
    >
      <Typography variant="body1" gutterBottom>
        Connect with us:
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }}>
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
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Colitionify. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
