import React from 'react'
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HeaderNav from './HeaderNav';
import MySwiper from './MySwiperWithFeatures';
import Mainlayout from './Mainlayout';
import Footer from './Footer';
import Features from './Features';

const MainPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            {/* <HeaderNav /> */}
            <MySwiper />
            <Features />
            <Box
                component="main"
                flexGrow={1}
                mt={2}
                sx={{
                    padding: isMobile ? "10px 5px" : isTablet ? "20px 10px" : "40px 20px",
                }}
            >
                <Mainlayout />
            </Box>

            {/* <Footer /> */}
        </Box>
    )
}

export default MainPage
