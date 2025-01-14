import { styled, TextField } from "@mui/material";

const StyledTextfield = styled(TextField)(({ theme }) => ({
    '& .MuiInputLabel-root': {
        color: 'white',                     // Label color
        fontSize: '0.8rem',                 // Reduced font size
        transform: 'translate(14px, 12px) scale(1)', // Positioning label at the center
        textAlign: 'center',                // Center the label text
    },
    '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)', // Position the label when shrunk (focused or filled)
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',                // Border radius
        height: '40px',                     // Reduced height of the text field
    },
}));

export default StyledTextfield;
