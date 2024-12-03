import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8200FF',  
    },
    secondary: {
      main: '#ff4081',  
    },
    background: {
      default: '#f4f4f9',  
    },
    text: {
      primary: '#333',  
      secondary: '#777', 
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Only Poppins font
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
