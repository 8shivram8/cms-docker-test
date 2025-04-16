import React, { useRef, useState } from 'react'
import {
    Box,
    TextField,
    MenuItem,
    Button,
    useTheme,
    useMediaQuery,
    InputAdornment,
    Tooltip,
    Typography,
    Select,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Other',
]

const ContactForm = ({ contactFormRef }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const buttonRef = useRef()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [countryCode, setCountryCode] = useState('+91'); // default India
    const countryOptions = [
        { code: '+91', label: '🇮🇳 +91' },
        { code: '+1', label: '🇺🇸 +1' },
        { code: '+44', label: '🇬🇧 +44' },
        { code: '+61', label: '🇦🇺 +61' },
    ];

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(
                /^[a-zA-Z0-9._%+-]+@(?!gmail\.com$|yahoo\.com$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Email must be a companyName/professional email (no Gmail, Yahoo allowed)'
            )
            .required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),
        companyName: Yup.string().required('companyName name is required'),
        website: Yup.string(),
        industry: Yup.string().required('Industry is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            website: '',
            industry: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const payload = {
                    ...values,
                    phoneNumber: `${countryCode}${values.phoneNumber}`,
                }

                const response = await fetch(
                    'https://api.dev.coalitionify.com/app-builder/api/admin/sheet',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                    }
                )

                if (response.ok) {
                    resetForm()
                    setIsFormSubmitted(true)
                } else {
                    console.error('API call failed')
                }
            } catch (error) {
                console.error('Error during API call:', error)
            }
        }

    })

    const fieldStyle = {
        '& .MuiOutlinedInput-root': {
            height: 48,
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
                borderColor: '#1677F7',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1677F7',
                borderWidth: '2px',
            },
        },
        '& .MuiInputLabel-root': {
            left: '3px',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#1677F7',
        },
    }

    return (
        <Box>
            {isFormSubmitted ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background:
                            'linear-gradient(215.51deg, #1677F7 0%, #63A6FF 64.27%, #D9E9FF 107.12%)',
                        borderRadius: 2,

                        // ml: !isMobile ? 40 : 0,
                        p: 3,
                        m: 3,
                        mt: 6,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <CheckCircleIcon sx={{ color: 'green', fontSize: '40px' }} />
                        <Typography mt={2} variant="h6" sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Form Submitted Successfully
                        </Typography>
                    </Box>
                    <Typography
                        mt={2}
                        variant="h6"
                        fontWeight={500}
                        fontSize={isMobile ? '14px' : '18px'}
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
                    ref={contactFormRef}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 3,
                        boxShadow: 1,
                        width: '100%',
                        maxWidth: isMobile ? '100%' : 400,
                        mx: 'auto',
                        ml: !isMobile ? 30 : 0,
                        '&:focus': {
                            borderColor: theme.palette.primary.main,
                        },
                    }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                px: isMobile ? 2 : 3,
                            }}
                        >
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                sx={{ ...fieldStyle, mt: 3 }}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.name && formik.errors.name && (
                                            <Tooltip title={formik.errors.name}>
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                sx={fieldStyle}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.email && formik.errors.email && (
                                            <Tooltip title={formik.errors.email}>
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                variant="outlined"
                                fullWidth
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                sx={{ ...fieldStyle }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                sx={{ minWidth: 70, fontSize: '1rem', height: '2.5rem' }}
                                                variant="standard"
                                                disableUnderline
                                            >
                                                {countryOptions.map((option) => (
                                                    <MenuItem key={option.code} value={option.code}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </InputAdornment>
                                    ),
                                    endAdornment:
                                        formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                            <Tooltip title={formik.errors.phoneNumber}>
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />

                            <TextField
                                label="companyName Name"
                                name="companyName"
                                variant="outlined"
                                fullWidth
                                value={formik.values.companyName}
                                onChange={formik.handleChange}
                                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                sx={fieldStyle}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.companyName && formik.errors.companyName && (
                                            <Tooltip title={formik.errors.companyName}>
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            />
                            <TextField
                                label="Website"
                                name="website"
                                variant="outlined"
                                fullWidth
                                value={formik.values.website}
                                onChange={formik.handleChange}
                                sx={fieldStyle}
                            />
                            <TextField
                                label="Industry"
                                name="industry"
                                select
                                variant="outlined"
                                fullWidth
                                value={formik.values.industry}
                                onChange={formik.handleChange}
                                error={formik.touched.industry && Boolean(formik.errors.industry)}
                                sx={fieldStyle}
                                InputProps={{
                                    endAdornment:
                                        formik.touched.industry && formik.errors.industry && (
                                            <Tooltip title={formik.errors.industry}>
                                                <InputAdornment position="end">
                                                    <WarningIcon sx={{ color: theme.palette.warning.main }} />
                                                </InputAdornment>
                                            </Tooltip>
                                        ),
                                }}
                            >
                                <MenuItem disabled value="">
                                    Select Industry
                                </MenuItem>
                                {industries.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Box sx={{ mt: 2, mb: 3 }}>
                                <Button
                                    ref={buttonRef}
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{ bgcolor: '#1677F7', color: 'white', textTransform: 'none' }}
                                >
                                    Book a Demo
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            )}
        </Box>
    )
}

export default ContactForm
