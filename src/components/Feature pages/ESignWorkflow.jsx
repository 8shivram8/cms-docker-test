import React, { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Container,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import sign from '../../assets/digisign.jpg'
import FlowWithProviderNew from './FeaturesNew';


const ESignWorkflow = () => {
  const [toggleValue, setToggleValue] = useState('features');

  const handleToggleChange = (event, newValue) => {
    if (newValue !== null) {
      setToggleValue(newValue);
    }
  };
  const [expanded, setExpanded] = useState(false);  // Track which accordion is expanded

  // Handle accordion expansion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ESignFeatures = [
    {
      title: "Sign Sequence",
      description: "Allow users to define the sequence in which signatures are required. This feature ensures flexibility in document signing, letting users set the order that participants must sign in, enhancing document workflow efficiency.",
      link: "#sign-sequence",
      button: "Learn More",
      image: `${sign}`,
      graphDescription: "A visual representation of the signing sequence with connected nodes showing the order of signatures."
    },
    {
      title: "Derived Participants",
      description: "Enables users to invite new participants at runtime by entering their email. This is especially useful when additional signers, like witnesses, are needed during the signing process, with an automatic email sent to the invited participant.",
      link: "#derived-participants",
      button: "Learn More",
      image: "/images/derived-participants.png",
      graphDescription: "A diagram showing how participants can be dynamically added with email inputs and invitation statuses."
    },
    {
      title: "Role-Based Participant",
      description: "Create participants by roles, such as 'Witness' or 'Tenant,' without needing specific names or emails. This feature makes documents reusable by assigning roles dynamically, enhancing the flexibility of your workflow.",
      link: "#role-based-participant",
      button: "Learn More",
      image: "/images/role-based-participant.png",
      graphDescription: "An illustration displaying reusable templates with roles dynamically assigned during the signing process."
    },
    {
      title: "Decline Workflow",
      description: "Provides users the ability to decline a document if they are unsatisfied with its terms or content. This allows the signer to reject the document without signing it, ensuring clarity and control in the process.",
      link: "#decline-workflow",
      button: "Learn More",
      image: "/images/decline-workflow.png",
      graphDescription: "A flowchart demonstrating the process of document decline and notifications to relevant stakeholders."
    },
    {
      title: "Expiry Workflow",
      description: "Users can set an expiration date for a document to ensure that the document must be signed within a specific time frame. After the expiry time, the document becomes invalid, promoting timely execution and compliance.",
      link: "#expiry-workflow",
      button: "Learn More",
      image: "/images/expiry-workflow.png",
      graphDescription: "A timeline showing the document lifecycle from creation to expiration."
    },
    {
      title: "Team Collaboration",
      description: "This feature allows clients to collaborate with your team for document design. Clients can share projects with you, grant editing access, and work together in real-time to create or modify documents, ensuring the document meets their needs effectively.",
      link: "#team-collaboration",
      button: "Learn More",
      image: "/images/team-collaboration.png",
      graphDescription: "A graphic depicting team collaboration with users working on a shared document in real-time."
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mt: 4,
          mb: 4
        }}
      >

        <Typography variant="h4" component="h1" gutterBottom>
          E-sign Workflow For Business
        </Typography>

        <Typography variant="body1" gutterBottom>
          Effortlessly manage your document signing process with our secure and legally binding e-signature solution. Streamline workflows, enhance efficiency, and ensure compliance—all while saving time. Perfect for contracts, agreements, and approvals, our digital signature platform makes it easy to send, track, and sign documents anytime, anywhere.
        </Typography>


        <Box sx={{ width: '100%', my: 4 }}>
          <ToggleButtonGroup
            value={toggleValue}
            exclusive
            onChange={handleToggleChange}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              '& .MuiToggleButton-root': {
                flex: 1,
                border: '1px solid',
                fontWeight: 600,
                bgcolor: 'background.default',
                color: 'text.primary',
                borderColor: 'divider',
                '&.custom-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                },
              },
            }}
          >
            <ToggleButton
              value="features"
              className={toggleValue === 'features' ? 'custom-selected' : ''}
            >
              Features
            </ToggleButton>
            <Divider orientation="vertical" flexItem />
            <ToggleButton
              value="useCases"
              className={toggleValue === 'useCases' ? 'custom-selected' : ''}
            >
              Use Cases
            </ToggleButton>
          </ToggleButtonGroup>

        </Box>


        {toggleValue === 'features' && (
          <Box sx={{
            display: 'flex', flexDirection: 'column', gap: 3, mt: 3, borderRadius: 2,
            boxShadow: 2, p: 3, bgcolor: '#f3f4f6'
          }}>

            {ESignFeatures.map((feature, index) => {
              const panelId = `panel-${index}`;

              return (
                <Accordion
                  key={index}
                  expanded={expanded === panelId}  // Expand the corresponding accordion
                  onChange={handleAccordionChange(panelId)}  // Handle accordion expansion
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      alignItems: 'flex-start',
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        alignItems: 'flex-start',
                        marginTop: '12px',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: 'left' }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
                      {/* Conditionally render FlowWithProviderNew when accordion is expanded */}
                      {expanded === panelId && <FlowWithProviderNew />}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}

          </Box>


        )}
        {toggleValue === 'useCases' && (
          <Box
            sx={{
              width: '100%',
              bgcolor: '#f3f4f6',
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" component="h2">
              Use Cases
            </Typography>
            <Typography variant="body2">
              Discover practical applications, such as contract signing, employee onboarding, and client agreements, powered by our workflow.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ESignWorkflow;
