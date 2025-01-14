import React, { useState } from 'react';
import {
    Typography,
    Grid,
    TextField,
    Box,
    Button,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { red } from '@mui/material/colors';

const ContactForm = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let error = '';
        if (name === 'name' && value.trim() === '') {
            error = 'Name is required';
        }
        if (name === 'email') {
            if (value.trim() === '') {
                error = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                error = 'Invalid email format';
            }
        }
        if (name === 'phone' && value.trim() !== '') { // Phone is optional
            if (!/^\+?[1-9]\d{1,14}$/.test(value.trim())) {
                error = 'Invalid phone number format';
            }
        }
        if (name === 'message' && value.trim() === '') {
            error = 'Message is required';
        }

        setErrors({ ...errors, [name]: error });
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === '' ? 'Name is required' : '',
            email:
                formData.email.trim() === ''
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                    ? 'Invalid email format'
                    : '',
            phone:
                formData.phone.trim() !== '' && !/^\+?[1-9]\d{1,14}$/.test(formData.phone.trim())
                    ? 'Invalid phone number format'
                    : '', // No error if phone is empty
            message: formData.message.trim() === '' ? 'Message is required' : ''
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setErrors({
            name: '',
            email: '',
            phone: '',
            message: ''
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
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f3f4f6',
            }}
        >
            {/* Parent Container with Grid */}
            <Grid container sx={{ maxWidth: 'lg', width: '100%' }} spacing={2} justifyContent="center" mt={2}>
                {/* Left Box */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            ml: isSmallScreen ? 2 : 5,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                backgroundImage: theme.palette.linearColor.gradient,
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Contact us
                        </Typography>
                        <Typography
                            mt={2}
                            variant="h4"
                            fontWeight={700}
                            fontSize={'42px'}
                            sx={{
                                lineHeight: '1.5',
                            }}
                        >
                            Any Questions? <br /> Write or Call us. <br /> We will write back <br /> within 12 Hrs
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Box (Form) */}
                <Grid item xs={12} md={6} bgcolor={red}>
                    {/* <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            // width: '100%',
                            m: 3,
                            background: 'linear-gradient(to bottom left, #1677F7, #FFFFFF)', 
                            borderRadius: 2,
                            
                        }}
                    >
                        <TextField
                            onChange={handleChange}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name}
                            name="name"
                            InputProps={{
                                sx: {
                                    borderColor: 'black', // default border color
                                    '&.Mui-focused': {
                                        borderColor: 'black', // focused border color
                                    },
                                },
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email}
                            name="email"
                            InputProps={{
                                sx: {
                                    borderColor: 'black',
                                    '&.Mui-focused': {
                                        borderColor: 'black', // focused border color
                                    },
                                },
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            label="Phone Number (Optional)"
                            variant="outlined"
                            type="tel"
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone}
                            name="phone"
                            InputProps={{
                                sx: {
                                    borderColor: 'black',
                                    '&.Mui-focused': {
                                        borderColor: 'black', // focused border color
                                    },
                                },
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            error={!!errors.message}
                            helperText={errors.message}
                            name="message"
                            InputProps={{
                                sx: {
                                    borderColor: 'black',
                                    '&.Mui-focused': {
                                        borderColor: 'black', // focused border color
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="black"
                            size="large"
                            sx={{
                                textTransform: 'none',
                                fontSize: '1rem',
                                backgroundColor: 'black',
                                color: 'white',
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box> */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
