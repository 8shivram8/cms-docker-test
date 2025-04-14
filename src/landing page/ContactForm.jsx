import React from 'react'
import {
  Box,
  TextField,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useFormik } from 'formik'

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Other',
]

const ContactForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      website: '',
      industry: '',
    },
    onSubmit: (values) => {
      console.log('Form Submitted:', values)
    },
  })

  const fieldStyle = {
    '& .MuiOutlinedInput-root': {
      height: 44,
      alignItems: 'center',
      '& input': {
        padding: '10px 14px',
      },
    },
    '& .MuiInputLabel-root': {
      top: '-2px',
    },
  }

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        boxShadow: 1,
        width: '100%',
        maxWidth: isMobile ? '100%' :400,
        mx: 'auto',
        ml:!isMobile ? 30 : 0,
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
            sx={{ ...fieldStyle, mt: 3 }}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            sx={fieldStyle}
          />
          <TextField
            label="Company Name"
            name="company"
            variant="outlined"
            fullWidth
            value={formik.values.company}
            onChange={formik.handleChange}
            sx={fieldStyle}
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
            sx={fieldStyle}
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
  )
}

export default ContactForm
