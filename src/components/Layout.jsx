import React from 'react';
import HeaderNav from './HeaderNav';
import Footer from '../new components/Footer';
import { Box } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <HeaderNav />

            <Box 
                component="main" 
                flexGrow={1} 
                display="flex" 
                flexDirection="column"
            >
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default Layout;
