import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  Box,
  Button,
  IconButton
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

const ResponsiveFormDialog = ({ open, handleDialogClose }) => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitted(true);
      resetForm();
    }
  };

  const handleCancel = () => {
    resetForm();
    setIsSubmitted(false);
    handleDialogClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth maxWidth="sm">
      <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
        <Typography variant="h6" sx={{ ml: 1 }}>
          {isSubmitted ? '' : 'Fill out the form'}
        </Typography>
        <IconButton onClick={handleCancel}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        {isSubmitted ? (
          <Box textAlign="center">
            <CheckCircleRoundedIcon color="success" sx={{ fontSize: 45, mb: 1 }} />
            <Typography variant="h6">Our team will contact you soon</Typography>
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end">
              <Button onClick={handleCancel} color="primary" variant="outlined">
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
                sx={{ ml: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ResponsiveFormDialog;
