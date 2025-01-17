import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutesNew from "./new components/AppRoutesNew";


function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Router>
      <AppRoutesNew/>
    </Router>
  );
}

export default App;
