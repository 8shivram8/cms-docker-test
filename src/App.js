import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
