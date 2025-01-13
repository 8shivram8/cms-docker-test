import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#21BDD5',  
    },
    secondary: {
      main: '#031E50',  
    },
    background: {
      gradient: 'linear-gradient(to bottom right, #1677F7, #FFFFFF)', 
    },
    
    linearColor: {
      gradient: 'linear-gradient(89.96deg, #000000 43.62%, #010306 49.9%, #1677F7 90.42%, #FFFFFF 106.14%);',
    },
    text: {
      primary: '#333',  
      secondary: '#777', 
    },
  },
  typography: {
    fontFamily: "'Poppins'", // Only Poppins font
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#9c27b0', 
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#9c27b0',
    },
  },
});

export default theme;
