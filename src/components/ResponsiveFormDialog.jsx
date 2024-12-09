import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  FormHelperText
} from '@mui/material';

const ResponsiveFormDialog = ({ open, handleDialogClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    description: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      description: false // Optional: description is not required
    };

    setErrors(newErrors);

    // Return true if no errors, else false
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed with form submission logic
      console.log('Form submitted:', formData);
      handleDialogClose(); // Close the dialog after submission
    }
  };

  return (
    <Dialog open={open} onClose={handleDialogClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Grid container spacing={2}>
          <Typography variant="h6" sx={{ p: 1 }}>
            Fill out the form
          </Typography>

          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && (
              <FormHelperText error> Name is required </FormHelperText>
            )}
          </Grid>

          {/* Email Field */}
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
              error={errors.email}
            />
            {errors.email && (
              <FormHelperText error> Email is required </FormHelperText>
            )}
          </Grid>

          {/* Description Field */}
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResponsiveFormDialog;
