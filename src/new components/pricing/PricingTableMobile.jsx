import React from "react";
import { Box, Grid, Typography, Card, CardContent, Divider } from "@mui/material";

const pricedata = [
  { feature: "Limited PDF Pages", free: "(max 10)", standard: "(max 10)", premium: "(max 40)" },
  { feature: "Unlimited jobs", free: true, standard: true, premium: true },
  { feature: "Unlimited projects", free: true, standard: false, premium: true },
  { feature: "Standard form fields", free: true, standard: true, premium: false },
  { feature: "Multimedia input field", free: true, standard: true, premium: true },
  { feature: "Custom branding", free: true, standard: true, premium: false },
  { feature: "Advanced analytics", free: true, standard: true, premium: true },
  { feature: "Team collaboration", free: true, standard: false, premium: true },
  { feature: "Email notifications", free: true, standard: true, premium: true },
  { feature: "API access", free: true, standard: true, premium: true },
  { feature: "24/7 support", free: true, standard: true, premium: false },
  { feature: "Priority support", free: true, standard: true, premium: true },
  { feature: "Additional storage", free: true, standard: false, premium: true },
  { feature: "Advanced security", free: true, standard: true, premium: true },
];

const renderValue = (value) => {
  if (value === true) return "✔";
  if (value === false) return "✖";
  return value;
};

const PricingTableMobile = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {["Free", "Standard", "Premium"].map((plan, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
                  {plan} Plan
                </Typography>
                <Divider />
                {pricedata.map((item, idx) => (
                  <Box key={idx} display="flex" justifyContent="space-between" my={1}>
                    <Typography variant="body2" color="text.secondary">
                      {item.feature}
                    </Typography>
                    <Typography variant="body2">{renderValue(item[plan.toLowerCase()])}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingTableMobile;
