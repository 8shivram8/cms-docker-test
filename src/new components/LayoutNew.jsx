import React, { useState } from 'react';
import { Box } from "@mui/material";
import Footer from './Footer';
import MainScreen from './MainScreen';
import CenterScreen from './CenterScreen';
import Hosting from './Hosting';
import Plans from './pricing/Plans';
import ContactForm from './ContactForm';

const LayoutNew = () => {
     const [selectedCountry, setSelectedCountry] = useState(null);
     const handleCountryChange = (value) => {
        console.log("value11",value)
        setSelectedCountry(value);
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <MainScreen selectedCountry={selectedCountry} handleCountryChange={handleCountryChange}/>
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
        </Box>
    );
}

export default LayoutNew;
