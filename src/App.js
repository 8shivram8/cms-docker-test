import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Mainlayout from "./components/Mainlayout";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import HeaderContent from "./components/HeaderContent";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      position="relative" // Required for absolute positioning of the gradient
    >
      {/* Gradient Background */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? 0 : isTablet ? 40 : 50, // Adjust top space
          left: isMobile ? 0 : isTablet ? 20 : 40, // Adjust left space
          right: isMobile ? 0 : isTablet ? 20 : 40, // Adjust right space
          zIndex: -1, // Behind the content
          background: "linear-gradient(to right, #1F75FE, #42A5F5, #A7C7E7)", //bluish
          borderRadius: isMobile ? "0px" : isTablet ? "15px" : "25px", // Rounded borders
          height: isMobile ? "600px" : isTablet ? "650px" : "800px", // Adjust height based on screen size
        }}
      />

      {/* Header Components */}
      <HeaderNav />
      <HeaderContent />

      {/* Main content layout */}
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

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;
