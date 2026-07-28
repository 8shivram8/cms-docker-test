import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutesNew from "./routes/AppRoutesNew";
import { store } from "./Redux store/store";
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
    <Provider store={store}>
      <Router>
        <AppRoutesNew />
      </Router>
    </Provider>
  );
}

export default App;
