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

const ResponsiveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: ''
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
      email:
        formData.email.trim() === ''
          ? 'Email is required'
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
          ? 'Invalid email format'
          : '',
      description: ''
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      description: ''
    });
    setErrors({
      name: '',
      email: '',
      description: ''
    });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSnackbarOpen(true);
      setShowSuccessMessage(true);
      resetForm();
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
          <Typography variant="h5" gutterBottom>
            Fill out the form
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
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
            label="Email"
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {showSuccessMessage && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <CheckCircleRoundedIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="body1" color="textSecondary">
                Our team will contact you soon
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} container justifyContent="flex-end">
          <Button color="primary" variant="contained" onClick={handleSubmit} sx={{minWidth:'166px'}}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveForm;
