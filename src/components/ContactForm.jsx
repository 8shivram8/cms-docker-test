import React, { useState } from 'react';
import {
    Typography,
    Grid,
    TextField,
    FormHelperText,
    Box,
    Button,
    useMediaQuery,
    IconButton
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useTheme } from '@emotion/react';

const ContactForm = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        useCase: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        organization: '',
        email: '',
        useCase: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let error = '';
        if (name === 'name' && value.trim() === '') {
            error = 'Name is required';
        }
        if (name === 'organization' && value.trim() === '') {
            error = 'Organization name is required';
        }
        if (name === 'email') {
            if (value.trim() === '') {
                error = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                error = 'Invalid email format';
            }
        }
        setErrors({ ...errors, [name]: error });
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === '' ? 'Name is required' : '',
            organization: formData.organization.trim() === '' ? 'Organization name is required' : '',
            email:
                formData.email.trim() === ''
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                        ? 'Invalid email format'
                        : '',
            useCase: formData.useCase.trim() === '' ? 'Use case is required' : ''
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const resetForm = () => {
        setFormData({
            name: '',
            organization: '',
            email: '',
            useCase: ''
        });
        setErrors({
            name: '',
            organization: '',
            email: '',
            useCase: ''
        });
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch('https://your-api-endpoint.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setShowSuccessMessage(true);
                    resetForm();
                } else {
                    console.error('API call failed');
                }
            } catch (error) {
                console.error('Error during API call:', error);
            }
        }
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                width: '100%',
                gap: 2,
                mb: 5,
                mt: 3,
                backgroundColor: '#f3f4f6',
            }}
        >
            {/* Left Box */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                    ml: !isSmallScreen ? 5 : 2,

                }}
            >
                {/* <Button variant='outlined' color="primary" size="medium" sx={{ textTransform: 'none', fontSize: '1rem', alignSelf: 'flex-end', borderRadius: 10 }} endIcon=<EastIcon />>
                    Book a Demo
                </Button> */}
                <Typography
                    sx={{
                        fontSize: !isSmallScreen ? '3rem' : '2rem',
                        fontWeight: 700,
                        color: 'primary.main',
                    }}
                >
                    Let's see if we are <br /> a good fit
                </Typography>
                <Typography
                    sx={{
                        // mt: 2,
                        fontSize: !isSmallScreen ? '3rem' : '2rem',
                        fontWeight: 700,
                        color: 'black',
                    }}
                >
                    Schedule a call <br /> with our team
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        mt: 6,
                        fontSize: !isSmallScreen ? '1rem' : '0.8rem',
                    }}
                >
                    We are excited to see if we are a good fit. Expect a response within 24 hours.
                </Typography>
            </Box>

            {/* Right Box */}
            <Box
                sx={{
                   
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%',
                        maxWidth: 500,
                        m: 3,

                    }}
                >
                    <TextField onChange={handleChange} label="Name" variant="outlined" fullWidth />
                    <TextField onChange={handleChange} label="Email" variant="outlined" type="email" fullWidth />
                    <TextField onChange={handleChange} label="Organization Name" variant="outlined" fullWidth />
                    <TextField
                        onChange={handleChange}
                        label="Use Cases"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" size="large" sx={{ textTransform: 'none', fontSize: '1rem' }} onClick={handleSubmit}>
                        Book Demo
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default ContactForm;
