import React, { useState } from 'react';
import { Box } from "@mui/material";
import MainScreen from './MainScreen';
import CenterScreen from './CenterScreen';
import Hosting from './Hosting';
import Plans from './pricing/Plans';
import ContactForm from './ContactForm';
import Footer from './Footer';
const LayoutNew = () => {
     const [selectedCountry, setSelectedCountry] = useState('IN');
     const [anchorEl, setAnchorEl] = useState(null);
     const handleCountryChange = (value) => {
        setSelectedCountry(value);
        setAnchorEl(null);
    };
    const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        
        const handleClose = () => {
            setAnchorEl(null);
        };
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <MainScreen selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl}/>
            <Box
                display="flex"
                flexDirection="column"
                flex={1}
            >
               <CenterScreen/>
               <Hosting/>
               <Plans selectedCountry={selectedCountry}/>
               <ContactForm/>
            </Box>
            {/* <Footer/> */}
            <Footer/>
        </Box>
    );
}

export default LayoutNew;
