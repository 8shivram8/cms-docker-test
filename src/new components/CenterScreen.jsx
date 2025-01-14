import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, useTheme, IconButton, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DataIcon from './Custom Icons/DataIcon';
import DocumentationIcon from './Custom Icons/DocumentationIcon';
import Routing from './Custom Icons/Routing';
import SdkIcon from './Custom Icons/SdkIcon';

const BoxItem = ({ title, iconImage, onClick, data ,isSelected}) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                // padding: 2,
                borderRadius: '12px',
                border: isSelected
                ? `2px solid black` 
                : '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align left
                height: '100%',
                textAlign: 'left',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            backgroundImage: theme.palette.linearColor.gradient,
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}
                        ml={3}
                        mt={3}
                    >
                        {title}
                    </Typography>
                    {/* Gradient Line */}
                    <Box
                        sx={{
                            height: '4px', // Increase the height to make it broad
                            bgcolor: 'transparent', // Make the background transparent so the gradient is visible
                            backgroundImage: theme.palette.linearColor.gradient,
                            borderRadius: '2px', // Optional: for rounded corners
                            mt: 1, // Optional: adjust spacing from the title
                            ml: 3
                        }}
                    />
                </Box>

                <Box
                    mr={2}
                    mt={0.5}
                    sx={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {iconImage}
                </Box>
            </Box>
            <Grid container spacing={2} sx={{ m: 1, width: '100%' }}>
                {data.map((item, index) => (
                    <Grid item key={index} xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                                width: '100%',
                            }}
                        >
                            <CheckCircleIcon sx={{ color: 'black', fontSize: 18, mr: 1 }} />

                            <Typography
                                variant="body2"
                                mr={1}
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    textAlign: 'left',
                                    whiteSpace: 'normal', // Allow wrapping
                                    overflowWrap: 'break-word', // Wrap long text
                                    wordBreak: 'break-word', // Break text if necessary
                                    display: 'inline', // Ensure inline display of subtitle and text
                                    minWidth: 0, // Prevent the text from overflowing and ensure wrapping
                                    flexGrow: 1, // Allow text to take up available space without breaking the layout
                                }}
                            >
                                <strong>{item.subtitle}</strong>: {item.text}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};


const CenterScreen = () => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleBoxClick = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index); // Toggle selection
    };

    const boxesData = [
        {
            title: 'Routing Flexibility',
            iconImage: <Routing />,
            onClick: () => alert('Box 1 clicked'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
                { subtitle: 'Subtitle 2', text: 'Sed do eiusmod tempor incididunt eiusmod tempor incididunt.' },
            ],
        },
        {
            title: 'Data Collection',
            iconImage: <DataIcon />,
            onClick: () => alert('Box 2 clicked'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Ut enim ad minim veniam.' },
                { subtitle: 'Subtitle 2', text: 'Quis nostrud exercitation ullamco laboris.' },
            ],
        },
        {
            title: 'Document Flexibility',
            iconImage: <DocumentationIcon />,
            onClick: () => alert('Box 3 clicked'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Duis aute irure dolor in reprehenderit.' },
                { subtitle: 'Subtitle 2', text: 'Excepteur sint occaecat cupidatat non proident.' },
            ],
        },
        {
            title: 'SDK Integration',
            iconImage: <SdkIcon />,
            onClick: () => alert('Box 4 clicked'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Velit esse cillum dolore eu fugiat nulla pariatur.' },
                { subtitle: 'Subtitle 2', text: 'Excepteur sint occaecat cupidatat non proident.' },
            ],
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 5,
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    marginBottom: 4,
                    fontSize: { xs: '25px', sm: '30px', md: '35px' },
                    backgroundImage: theme.palette.linearColor.gradient,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                Streamline Your Workflows with Powerful Features
            </Typography>

            <Grid spacing={4} container justifyContent="center" sx={{ maxWidth: '800px' }}>
                {boxesData.map((box, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        key={index}
                        sx={{ marginBottom: 1 }}
                    >
                        <BoxItem
                            {...box}
                            isSelected={selectedIndex === index}
                            onClick={() => handleBoxClick(index)}
                        />
                    </Grid>
                ))}
            </Grid>


        </Box>
    );
};

export default CenterScreen;
