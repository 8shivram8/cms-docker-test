import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo1 from '../assets/logo1.png'; // Ensure this path is correct
import ResponsiveFormDialog from './ResponsiveFormDialog';

const Certification = () => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'grey.100',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: '900px',
          bgcolor: 'white',
          padding: 4,
          borderLeft: '3px solid #ccc',
          borderRight: '3px solid #ccc',
          boxShadow: 3,
          position: 'relative', // For watermark positioning
          overflow: 'hidden',
        }}
      >
        {/* Watermark image */}
        <Box
          component="img"
          src={logo1}
          alt="Watermark"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: 'auto',
            opacity: 0.3,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            How Our Solutions Help Achieve IGBC Certification
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Paperless Operations at the Core
            </Typography>
            <Typography variant="body2">
              Traditional workflows often rely heavily on printed documents, leading to significant
              paper consumption. By adopting our digital solutions, businesses can eliminate this
              dependency entirely. Whether it's contracts, forms, or daily logs, everything is
              digitized for your convenience and sustainability.
            </Typography>
          </Box>

          {/* Other sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              End-to-End Automation
            </Typography>
            <Typography variant="body2">
              Our platform enables seamless automation of workflows, ensuring that no additional
              resources are wasted. From form creation to data collection and document signing,
              every step is optimized for minimal environmental impact.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Enhanced Digital Signatures
            </Typography>
            <Typography variant="body2">
              With our secure e-signature feature, you can approve documents instantly without
              printing a single sheet. This not only saves paper but also accelerates your business
              operations.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Eco-Friendly Data Management
            </Typography>
            <Typography variant="body2">
              Collect, store, and analyze data electronically. Our integration with user systems
              ensures that data remains accessible without the need for physical storage. This
              contributes to reducing paper waste significantly.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Contribution to Green Building Standards
            </Typography>
            <Typography variant="body2">
              The IGBC certification emphasizes resource conservation, including paper reduction.
              By using our platform, businesses directly align with these standards, gaining a
              competitive edge in achieving certification.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Real-Time Tracking and Insights
            </Typography>
            <Typography variant="body2">
              Our analytics tools provide a detailed view of your environmental savings, including
              metrics like paper reduction and carbon footprint. Share these insights to showcase
              your organization’s commitment to sustainability.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Customized Solutions for Your Industry
            </Typography>
            <Typography variant="body2">
              We understand that every business is unique. That’s why our platform offers flexible
              workflows and features tailored to various industries, such as healthcare, legal, and
              education, all contributing to sustainable practices.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Positive Impact on Employee and Customer Engagement
            </Typography>
            <Typography variant="body2">
              Employees and customers alike appreciate organizations that prioritize sustainability.
              By adopting our solutions, you’re not just improving your processes—you’re building
              a brand that cares about the environment.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 4, 
            }}
          >
            <Button variant="contained" color="primary" onClick={handleDialogOpen}>
              contact
            </Button>
          </Box>
        </Box>
          <ResponsiveFormDialog open={open} handleDialogClose={handleDialogClose}/>
      </Box>
      </Box>
      );
};

      export default Certification;
