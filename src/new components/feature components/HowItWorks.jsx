import React from "react";
import { Container, Grid, Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const leadRouting = {
  title: "AI-Based Lead Routing & CRM Integration",
  details: [
    "OpenAI-powered intent detection identifies serious buyers.",
    "Vector search matches new leads against past successful buyers.",
  ]
};

const leadScoring1 = {
  title: "Score breakdown:",
  details: [
    "Financial Eligibility (30 pts) → Budget, credit check.",
    "Lead Intent (30 pts) → Urgency, interest.",
    "Engagement & Behavior (20 pts) → CRM activity, inquiries.",
    "Market Factors (20 pts) → Location demand, trends."
  ]
};

const leadSubmission = {
  title: "AI-Powered Lead Submission & Qualification",
  details: [
    "External brokers submit leads via secure links (no CRM access required).",
    "AI auto-fills missing data and detects anomalies.",
    "Financial details, property preferences, and history are validated instantly."
  ]
};

const leadRouting2 = {
  title: "AI-Based Lead Routing & CRM Integration",
  details: [
    "High-scoring leads (80+) are auto-routed to sales teams.",
    "Medium-scoring leads (50-80) go to pre-sales nurturing.",
    "CRM-agnostic → Integrates with Salesforce, HubSpot, or custom CRMs."
  ]
};

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm", "xs"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box textAlign="center" py={3}>
            <Typography variant="h4" fontWeight={600}>
              How It Works
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" border={'1px solid black'}>
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} width="88%" sx={{ minHeight: "150px" }} mt={2}>
          <Box p={2} flex={1} textAlign="left" sx={{ pr: isMobile ? 0 : 2, width: "100%" }}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              {leadRouting.title}
            </Typography>
            <List dense>
              {leadRouting.details.map((item, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                    <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: "body2" }}
                    sx={{ textAlign: "left", ml: 0.5 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {isMobile ? (
            <Divider sx={{ bgcolor: "grey.400", my: 2 }} />
          ) : (
            <Divider orientation="vertical" flexItem sx={{ bgcolor: "grey.400", height: "150px", alignSelf: "center" }} />
          )}

          <Box p={2} flex={1} textAlign="left" sx={{ pl: isMobile ? 0 : 4, width: "100%" }}>
            <Typography variant="h6" fontWeight={400} mb={1}>
              {leadScoring1.title}
            </Typography>
            <List dense>
              {leadScoring1.details.map((item, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                    <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: "body2" }}
                    sx={{ textAlign: "left", ml: 0.5 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Grid>
        <Grid container item xs={12} spacing={3} alignItems="stretch" justifyContent="space-between" mt={0.2}>
          <Grid item xs={12} md={6}>
            <Box p={3} height="80%" border={'1px solid black'}>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {leadSubmission.title}
              </Typography>
              <List dense>
                {leadSubmission.details.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                      sx={{ textAlign: "left", ml: 0.5 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          {/* <Divider orientation="vertical" flexItem sx={{ bgcolor: "grey.400", height: "60%", alignSelf: "center" }} /> */}
          <Grid item xs={12} md={6}>
            <Box p={3} height="80%" border={'1px solid black'}>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {leadRouting2.title}
              </Typography>
              <List dense>
                {leadRouting2.details.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: "black", fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                      sx={{ textAlign: "left", ml: 0.5 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
