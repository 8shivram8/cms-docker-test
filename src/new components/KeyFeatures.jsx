import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DataIcon from './Custom Icons/DataIcon';
import DocumentationIcon from './Custom Icons/DocumentationIcon';
import Routing from './Custom Icons/Routing';
import SdkIcon from './Custom Icons/SdkIcon';
import { useNavigate } from 'react-router-dom';

const BoxItem = ({ title, iconImage, onClick, data, isSelected }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%',
                textAlign: 'left',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography
                        variant="h8"
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: '25px', sm: '30px', md: '35px' },
                            
                        }}
                        ml={3}
                        mt={3}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            height: '2px',
                            bgcolor: 'transparent',
                            backgroundImage: theme.palette.linearColor.gradient,
                            borderRadius: '2px',
                            mt: 1,
                            ml: 3,
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
                    }}
                >
                    {/* {iconImage} */}
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
                            {/* <CheckCircleIcon sx={{ color: 'black', fontSize: 18, mr: 1 }} /> */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    display: 'inline',
                                    minWidth: 0,
                                    flexGrow: 1,
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const KeyFeatures = () => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();

    const handleBoxClick = (index, onClick) => {
        setSelectedIndex(index === selectedIndex ? null : index);
        if (onClick) onClick();
    };

    const boxesData = [
        {
            title: 'Dynamic Form Builder',
            iconImage: <Routing />,
            onClick: () => navigate('/routing-flexibility'),
            data: [
                { subtitle: '', text: 'Easily create rich forms for every use case, add multimedia input on top of your document. Build multistep wizard for data collection.' }
            ],
        },
        {
            title: 'Secure E-Signatures',
            iconImage: <DataIcon />,
            onClick: () => navigate('/data-collection'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Collect legally binding signatures with audit trails, encryption, and QR scan. Bulk trigger, bulk signing, participant group and lot more to streamline your process. ' }
            ],
        },
        {
            title: 'Multi-User Workflows',
            iconImage: <DocumentationIcon />,
            onClick: () => navigate('/document-flexibility'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Collaborate with teams, clients, and stakeholders. Build simple to complex workflow in a minute. Try predefined templates for all your need in one click.' },
            ],
        },
        {
            title: 'SDK Integration',
            iconImage: <SdkIcon />,
            onClick: () => navigate('/sdk-integration'),
            data: [
                { subtitle: 'Subtitle 1', text: 'Connect seamlessly with any system your are using. Free integration support to onboard any system you want.' }
            ],
        },
    ];

    return (
        
            <Container>
                <Grid spacing={4} container justifyContent="center">
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
                            onClick={() => handleBoxClick(index, box.onClick)}
                        />
                    </Grid>
                ))}
            </Grid>
            </Container>

            
    );
};

export default KeyFeatures;
