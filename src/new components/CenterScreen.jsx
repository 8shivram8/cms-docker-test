import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DataIcon from "./Custom Icons/DataIcon";
import DocumentationIcon from "./Custom Icons/DocumentationIcon";
import Routing from "./Custom Icons/Routing";
import SdkIcon from "./Custom Icons/SdkIcon";
import { useNavigate } from "react-router-dom";
import backImage from "../assets/features.png";

const BoxItem = ({ title, iconImage, onClick, data, isSelected }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                borderRadius: "12px",
                border: isSelected ? `2px solid black` : "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",
                textAlign: "left",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            backgroundImage: theme.palette.linearColor.gradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                        ml={3}
                        mt={3}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            height: "4px",
                            bgcolor: "transparent",
                            backgroundImage: theme.palette.linearColor.gradient,
                            borderRadius: "2px",
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
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {iconImage}
                </Box>
            </Box>
            <Grid container spacing={2} sx={{ m: 1, width: "100%" }}>
                {data.map((item, index) => (
                    <Grid item key={index} xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                flexDirection: "row",
                                width: "100%",
                            }}
                        >
                            <CheckCircleIcon sx={{ color: "black", fontSize: 18, mr: 1 }} />
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                    fontSize: "0.875rem",
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                    display: "inline",
                                    minWidth: 0,
                                    flexGrow: 1,
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
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const handleBoxClick = (index, onClick) => {
        setSelectedIndex(index === selectedIndex ? null : index);
        if (onClick) onClick();
    };

    const boxesData = [
        {
            title: "Routing Flexibility",
            iconImage: <Routing />,
            onClick: () => navigate("/routing-flexibility"),
            data: [
                {
                    subtitle: "Subtitle 1",
                    text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
                },
                {
                    subtitle: "Subtitle 2",
                    text: "Sed do eiusmod tempor incididunt eiusmod tempor incididunt.",
                },
            ],
        },
        {
            title: "Data Collection",
            iconImage: <DataIcon />,
            onClick: () => navigate("/data-collection"),
            data: [
                { subtitle: "Subtitle 1", text: "Ut enim ad minim veniam." },
                {
                    subtitle: "Subtitle 2",
                    text: "Quis nostrud exercitation ullamco laboris.",
                },
            ],
        },
        {
            title: "Document Flexibility",
            iconImage: <DocumentationIcon />,
            onClick: () => navigate("/document-flexibility"),
            data: [
                {
                    subtitle: "Subtitle 1",
                    text: "Duis aute irure dolor in reprehenderit.",
                },
                {
                    subtitle: "Subtitle 2",
                    text: "Excepteur sint occaecat cupidatat non proident.",
                },
            ],
        },
        {
            title: "SDK Integration",
            iconImage: <SdkIcon />,
            onClick: () => navigate("/sdk-integration"),
            data: [
                {
                    subtitle: "Subtitle 1",
                    text: "Velit esse cillum dolore eu fugiat nulla pariatur.",
                },
                {
                    subtitle: "Subtitle 2",
                    text: "Excepteur sint occaecat cupidatat non proident.",
                },
            ],
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                textAlign: "center",
                padding: isMobile ? 2 : 0,
                pr:2
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    marginBottom: 4,
                    fontSize: { xs: "25px", sm: "30px", md: "35px" },
                    backgroundImage: theme.palette.linearColor.gradient,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
                Streamline Your Workflows with Powerful Features
            </Typography>
            <Grid container spacing={2}>
                <Grid
                    item
                    sm={12}
                    md={6}
                    // bgcolor={'#C7CCD2'}
                    sx={{
                        height: { xs: 'auto', md: '450px' },
                        display: 'flex',
                        alignItems: { xs: 'center', md: 'stretch' },
                        justifyContent: { xs: 'center', md: 'flex-start' },

                    }}
                >
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#C7CCD2'}
                        sx={{ height: { xs: 'auto', md: '100%' }, width: '100%' }}
                    >
                        <img
                            src={backImage}
                            style={{
                                width: '80%',
                                height: '80%',
                                borderRadius: isMobile ? '8px' : '0', // Rounded corners for mobile
                            }}
                        />
                    </Box>
                </Grid>

                <Grid
                    item
                    sm={12}
                    md={6}
                    sx={{
                        paddingLeft: { xs: '0', md: '16px' },
                        display: 'flex',
                        alignItems: { xs: 'center', md: 'center' },
                        justifyContent: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                    mt={isMobile ? 2 : 0}
                >
                    <Grid container spacing={2} justifyContent="center">
                        {boxesData.map((box, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                key={index}
                                sx={{
                                    marginBottom: { xs: 2, md: 0.5 },
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <BoxItem
                                    {...box}
                                    isSelected={selectedIndex === index}
                                    onClick={() => handleBoxClick(index, box.onClick)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


        </Box>
    );
};

export default CenterScreen;
