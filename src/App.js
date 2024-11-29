import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Mainlayout from "./components/Mainlayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";


function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
    <HeaderNav/>
      {/* <Header /> */}
      <Box
        component="main"
        flexGrow={1} // Ensures the main content takes up remaining space
        mt={2}
        sx={{
          padding: isMobile ? "10px 5px" : isTablet ? "20px 10px" : "40px 20px",
        }}
      >
        <Mainlayout />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
