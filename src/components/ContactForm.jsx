import React, { useState } from 'react';
import {
    Typography,
    Grid,
    TextField,
    FormHelperText,
    Box,
    Button,
    Snackbar,
    IconButton
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = () => {
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
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
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
            // Call API on submit
            try {
                const response = await fetch('https://your-api-endpoint.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setIsSnackbarOpen(true);
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

    const handleCloseSnackbar = () => {
        setIsSnackbarOpen(false);
        setShowSuccessMessage(false);
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: 3, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ textAlign: 'center', color: 'primary.main' }}
                    >
                        Book a demo
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={Boolean(errors.name)}
                    />
                    {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Email Id"
                        type="email"
                        variant="outlined"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                    />
                    {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        fullWidth
                        label="Organization Name"
                        variant="outlined"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        error={Boolean(errors.organization)}
                    />
                    {errors.organization && <FormHelperText error>{errors.organization}</FormHelperText>}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Your Use Case"
                        multiline
                        rows={4}
                        variant="outlined"
                        required
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        error={Boolean(errors.useCase)}
                    />
                    {errors.useCase && <FormHelperText error>{errors.useCase}</FormHelperText>}
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                    <Button color="primary" variant="contained" onClick={handleSubmit} sx={{ minWidth: '166px' }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>

            {/* Success Snackbar */}
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Form submitted successfully"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleCloseSnackbar}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </Box>
    );
};

export default ContactForm;
