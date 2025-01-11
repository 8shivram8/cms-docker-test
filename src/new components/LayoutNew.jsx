import React from 'react';
import { Box } from "@mui/material";
import Footer from './Footer';
import MainScreen from './MainScreen';
import CenterScreen from './CenterScreen';


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
            >
               <CenterScreen/>
            </Box>
            {/* <Footer /> */}
        </Box>
    );
}

export default LayoutNew;
