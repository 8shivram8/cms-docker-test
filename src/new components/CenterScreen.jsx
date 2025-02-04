import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme,Button} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DataIcon from "./Custom Icons/DataIcon";
import DocumentationIcon from "./Custom Icons/DocumentationIcon";
import Routing from "./Custom Icons/Routing";
import SdkIcon from "./Custom Icons/SdkIcon";
import { useNavigate } from "react-router-dom";
import backImage from "../assets/features.png";
import { useMixpanel } from "../mixpanel/MixpanelContext";

const BoxItem = ({ title, iconImage, onClick, data, isSelected, isMobile }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "12px",
                border: isSelected ? `2px solid black` : "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: isMobile ? "360px" : "220px",
                textAlign: "left",
                cursor: "pointer",
                paddingBottom: "50px", 
            }}
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
            <Grid container spacing={2} mt={1} sx={{ px: 3, py: 1, width: "100%" }}>
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
                            <Box sx={{ textAlign: "justify", width: "100%" }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "0.875rem",
                                        whiteSpace: "normal",
                                        overflowWrap: "break-word",
                                        wordBreak: "break-word",
                                        display: "block",
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="outlined"
                sx={{
                    position: "absolute",
                    bottom: 15,
                    right: 15,
                    zIndex: 1,
                    backgroundColor: "transparent",
                    color: "black",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        color: "white",
                    },
                }}
                onClick={onClick}
            >
                Learn more
            </Button>
        </Box>

    );
};

const CenterScreen = () => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const { trackEvent } = useMixpanel()
    const handleBoxClick = (index, onClick, title) => {
        setSelectedIndex(index === selectedIndex ? null : index);
        if (onClick) onClick();
        trackEvent(`move to ${title} page`, { feature: title })
    };

    const boxesData = [
        {
            title: "Secure & Automated Multi-User Workflow",
            iconImage: <DocumentationIcon />,
            onClick: () => navigate("/multiuser-workflow"),
            data: [
                {
                    subtitle: "Multi-Step Documents",
                    text: "Manage <b>temporary contractors and engineering consultants</b> without giving them ERP access.",
                },
                {
                    subtitle: "Bulk Signing",
                    text: "Coalitionify enables <b>real-time work order submissions, progress tracking, and compliance verification</b>, ensuring faster approvals and transparent workflows.",
                },
            ],
        },
        {
            title: "Retail & Real Estate",
            iconImage: <Routing />,
            onClick: () => navigate("/retail-real-estate"),
            data: [
                {
                    subtitle: "Conditional Routing",
                    text: "Allow <b>brokers</b>, <b>distributors</b>, and <b>vendors</b> to submit leads, sales reports, and property details effortlessly.",
                },
                {
                    subtitle: "Expiry Routing",
                    text: "Coalitionify <b>verifies lead authenticity using AI</b>, preventing unqualified submissions and optimizing sales workflows. ",
                },
            ],
        },
        {
            title: "Manufacturing & Supply Chain",
            iconImage: <DataIcon />,
            onClick: () => navigate("/manufacturing-supply-chain"),
            data: [
                {
                    subtitle: "Input Fields and multi- media",
                    text: "Enable <b>temporary</b> suppliers to submit RFQs & compliance data, <b>reducing procurement delays</b> and ensuring <b>faster vendor approvals.</b>"
                },
                {
                    subtitle: "Image Capture",
                    text: "Coalitionify also helps suppliers track RFQ statuses without needing direct ERP/PLM access. ",
                },
            ],
        },
        {
            title: "HR & Employee Background Verification",
            iconImage: <SdkIcon />,
            onClick: () => navigate("/background-verification"),
            data: [
                {
                    subtitle: "Seamless Integration",
                    text: "Automate third-party background checks by integrating external agencies into your HRMS.",
                },
                {
                    subtitle: "Custom SDK",
                    text: "Coalitionify ensures secure data submission, AI-driven validation, and real-time tracking for seamless verification.",
                }
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
                mt: 20,
                textAlign: "center",
                padding: isMobile ? 2 : 0,
                maxWidth:'lg',
                margin:'auto'
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
                {/* <Grid
                    item
                    sm={12}
                    md={6}
                    // bgcolor={'#C7CCD2'}
                    sx={{
                        // height: { xs: 'auto', md: '450px' },
                        height: { xs: 'auto', md: '478px' },  
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
                                objectFit:'contain',
                                width: isMobile ? '80%' : '',
                                height: '80%',
                                borderRadius: isMobile ? '8px' : '0', // Rounded corners for mobile
                            }}
                        />
                    </Box>
                </Grid> */}

                <Grid
                    item
                    sm={12}
                    md={12}
                    sx={{
                        // padding: { xs: 2, md: 3 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                    }}
                    m={2}
                    mt={isMobile ? 2 : 0}
                >
                    <Grid container spacing={3} justifyContent="center" width="100%">
                        {boxesData.map((box, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                }}
                            >
                                <BoxItem
                                    {...box}
                                    isSelected={selectedIndex === index}
                                    onClick={() => handleBoxClick(index, box.onClick, box.title)}
                                    isMobile={isMobile}
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
