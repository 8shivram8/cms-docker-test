import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Button,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StyledTextfield from './StyledTextfield';
import StyledMultiline from './StyledMultiline';
import ArrowIcon from './Custom Icons/ArrowIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
            .nullable(),
        message: Yup.string().nullable(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch('https://api.coalitionify.com/app-builder/api/v1/auth/user-query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    resetForm();
                    setIsFormSubmitted(true);
                } else {
                    console.error('API call failed');
                }
            } catch (error) {
                console.error('Error during API call:', error);
            }
        },
    });

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f3f4f6',
                mt: 2,

            }}
        >
            <Grid container sx={{ maxWidth: 'lg', width: '100%' }} spacing={2} justifyContent="center" mt={2}>
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
                            fontSize={isSmallScreen ? '35px' : '42px'}
                            sx={{
                                lineHeight: '1.5',
                            }}
                        >
                            Any Questions? <br /> Write or Call us. <br /> We will write back <br /> within 12 Hrs
                        </Typography>
                        <Box
                            mb={isSmallScreen ? 3 : 3}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 6,
                            }}
                        >
                            <a href="mailto:info@coalitionify.com" style={{ textDecoration: 'none' }}>
                                <EmailIcon
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        color: '#1677F7',
                                        cursor: 'pointer',
                                    }}
                                />
                            </a>
                            <Typography
                                variant="body2"
                                fontWeight="light"
                                color="text.secondary"
                                ml={isSmallScreen ? 1 : 1}
                            >
                                <a href="mailto:info@coalitionify.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    info@coalitionify.com
                                </a>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    {isFormSubmitted ? (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'linear-gradient(215.51deg, #1677F7 0%, #63A6FF 64.27%, #D9E9FF 107.12%)',
                                borderRadius: 2,
                                p: 3,
                                m: 3,
                                mt: 6
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                <CheckCircleIcon sx={{ color: 'green', fontSize: '40px' }} />
                                <Typography
                                    mt={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        textAlign: 'center',
                                    }}
                                >
                                    Form Submitted Successfully
                                </Typography>
                            </Box>
                            <Typography
                                mt={2}
                                variant="h6"
                                fontWeight={500}
                                fontSize={isSmallScreen ? '14px' : '18px'}
                                sx={{
                                    lineHeight: '1.5',
                                    textAlign: 'center',
                                    color: 'black',
                                    maxWidth: '500px',
                                }}
                            >
                                Your request has been received, and our team is currently reviewing it. We will get back to you within 12 hours.
                            </Typography>
                        </Box>
                    ) : (
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 3,
                                background: 'linear-gradient(215.51deg, #1677F7 0%, #63A6FF 64.27%, #D9E9FF 107.12%)',
                                borderRadius: 2,
                            }}
                            onSubmit={formik.handleSubmit}
                        >
                            <Box m={3} gap={2} display={'flex'} flexDirection={'column'}>
                                <StyledTextfield
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    sx={{ mb: 1 }}
                                />
                                <StyledTextfield
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{ mb: 1 }}
                                />
                                <StyledTextfield
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number (Optional)"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    sx={{ mb: 1 }}
                                />
                                <StyledMultiline
                                    name="message"
                                    multiline
                                    rows={4}
                                    placeholder="Message (Optional)"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                    sx={{ mb: 1 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="black"
                                    size="large"
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
