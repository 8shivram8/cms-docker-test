import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Mainlayout from "./components/Mainlayout";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MySwiperWithFeatures from "./components/MySwiperWithFeatures";
import ImageSlider from "./components/ImageSlider";
import Features from "./components/Features";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./components/AppRoutes";


function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
