
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';
import centerimg from '../assets/centerimg.png';
// import backgroundImg from '../assets/bgimage.jpg';
import backgroundImg from '../assets/bgimage1.png';
import { Container, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import HeaderContent from './HeaderContent';
import HeaderNav from './HeaderNav';


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}

        >
        <HeaderNav/>
        <HeaderContent/>
        </Box>
    );
}

export default Header;
