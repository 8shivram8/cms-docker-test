import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.2)',  // White background with 50% opacity
    borderRadius: '8px',
    height: '40px',  // Slightly decrease the height
    '& .MuiInputBase-root': {
        border: 'none',
        height: '100%',  // Ensure the input stretches to fill the height
        display: 'flex',
        alignItems: 'center',  // Vertically center the text and placeholder
        '&::before, &::after': {
            border: 'none',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiInputAdornment-positionStart': {
        color: theme.palette.primary.main,
    },
    '& .MuiInputBase-input': {
        color: 'white',  // Text color
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'rgba(255, 255, 255, 0.6)', // Light white with 60% opacity
        textAlign: 'left',
        opacity: 1,
    },

}));

export default StyledTextField;
