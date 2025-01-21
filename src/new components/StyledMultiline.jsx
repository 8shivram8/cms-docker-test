import { styled, TextField } from "@mui/material";

const StyledMultiline = styled(TextField)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Background with opacity
    borderRadius: '8px',
    '& .MuiInputBase-root': {
        border: 'none',
        padding: theme.spacing(1),
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiInputBase-input': {
        color: 'black',
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'white',
        opacity: 1,
    },
    '&.MuiOutlinedInput-multiline': {
        '& .MuiInputBase-input': {
            lineHeight: 1.5, // Ensure proper spacing for multiline
            minHeight: 'unset', // Let rows control height
        },
        '& .MuiInputBase-root': {
            alignItems: 'flex-start', // Align content to the top for multiline
        },
    },
}));

export default StyledMultiline;
