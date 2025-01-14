import React from 'react';
import { Box } from "@mui/material";
import Footer from './Footer';
import MainScreen from './MainScreen';
import CenterScreen from './CenterScreen';
import Hosting from './Hosting';
import Plans from './pricing/Plans';
import ContactForm from './ContactForm';


const LayoutNew = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <MainScreen />
            <Box
                display="flex"
                flexDirection="column"
                flex={1}
            >
               <CenterScreen/>
               <Hosting/>
               <Plans/>
               <ContactForm/>
            </Box>
            <Footer />
        </Box>
    );
}

export default LayoutNew;
