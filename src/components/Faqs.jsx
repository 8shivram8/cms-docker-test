import React, { useState } from 'react';
import { Box, Button, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function Faqs() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            question: "What is the purpose of this application?",
            answer: "This application allows users to manage projects, track progress, and collaborate with teams in a seamless environment.",
        },
        {
            question: "How can I upgrade to a premium membership?",
            answer: "You can upgrade to a premium membership by navigating to the 'Pricing' section and selecting the premium plan that best suits your needs.",
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 7-day free trial for all new users to explore our premium features before making any commitments.",
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time directly from your account settings. No hidden fees or commitments.",
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page, and we'll send you a reset link via email.",
        },
    ];

    return (
        <Box component="section" sx={{ paddingY: 6, bgcolor: '#fff' }}>
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{ marginBottom: 4 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            textTransform: 'none',
                            padding: '3px 7px',
                            fontSize: '0.8rem',
                            mb: 2
                        }}
                    >
                        FAQ
                    </Button>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        Frequently Asked Questions
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            minWidth: '300px',
                            maxWidth: '700px',
                            mx: 'auto',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                color: 'text.secondary',
                                mt: 1,
                                lineHeight: 1.5,
                                whiteSpace: 'normal',
                                wordWrap: 'break-word',
                            }}
                        >
                            Explore answers to common queries about Colitionify and our services. If you have any further questions, feel free to reach out to our team for assistance.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ marginTop: 4 }}>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            sx={{
                                marginBottom: 2,
                                borderRadius: '8px',
                                border: '1px solid rgba(0, 0, 0, 0.2)', // Faint black border
                                boxShadow: 'none',
                                '&:before': {
                                    display: 'none', // Removes the default divider line
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === index ? (
                                        <CloseIcon sx={{ color: '#1F75FE' }} />
                                    ) : (
                                        <AddIcon sx={{ color: '#1F75FE' }} />
                                    )
                                }
                                aria-controls={`panel${index}a-content`}
                                id={`panel${index}a-header`}
                            >
                                <Typography variant="h7" sx={{ fontWeight: 'bold' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Faqs;
