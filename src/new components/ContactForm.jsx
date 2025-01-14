import React, { useState } from 'react';
import {
    Typography,
    Grid,
    TextField,
    FormHelperText,
    Box,
    Button,
    useMediaQuery,
    IconButton,
    useTheme
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';

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
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f3f4f6',
                py: 5
            }}
        >
            {/* Parent Container with Grid */}
            <Grid container sx={{ maxWidth: 'lg', width: '100%' }} spacing={2} justifyContent="center">
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
                            variant='h6'
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
                            variant="h4" fontWeight={700} fontSize={'42px'}
                            sx={{
                                lineHeight: '1.5',

                            }}
                        >
                            Any Questions ? <br /> Write or Call us. <br /> We will right back <br /> within 12 Hrs
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Box (Form) */}
                <Grid item xs={12} md={6}>
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
                        {/* <TextField
                            onChange={handleChange}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name}
                            name="name"
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
                        />
                        <TextField
                            onChange={handleChange}
                            label="Organization Name"
                            variant="outlined"
                            fullWidth
                            error={!!errors.organization}
                            helperText={errors.organization}
                            name="organization"
                        />
                        <TextField
                            onChange={handleChange}
                            label="Use Cases"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            error={!!errors.useCase}
                            helperText={errors.useCase}
                            name="useCase"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ textTransform: 'none', fontSize: '1rem' }}
                            onClick={handleSubmit}
                        >
                            Book Demo
                        </Button> */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
