import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import acosign from "../assets/AcoSignFavIcon.png";
import { useNavigate } from "react-router-dom";

const Products = ({ img1, img2, img3 }) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" fontWeight="700">
                    Explore Our Exclusive Products
                </Typography>
                <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" }, mt: 3 }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "left", md: "left" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box component="img" src={acosign} alt="AcoFlow" sx={{ height: 30 }} />
                            <Typography variant="h4" fontWeight={700}>
                                AcoFlow
                            </Typography>
                        </Box>
                        <Typography variant="h6" color="text.secondary" gutterBottom mt={1}>
                            Streamline Your Workflow Effortlessly
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left", display: "inline-block", maxWidth: "100%" }}>
                            AcoFlow helps you design and automate seamless workflows for form submissions. Whether you need to collect data, route approvals, or manage processes, AcoFlow provides an intuitive interface to build workflows tailored to your needs, ensuring every submission reaches the right destination.
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ mt: 2, borderRadius: "20px", textTransform: "none", bgcolor: "#1677F7", color: "white" }}
                            onClick={() => navigate("/acoFlow")}
                        >
                            Explore AcoFlow
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={img1} alt="AcoFlow" sx={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                </Grid>

                <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "left", md: "left" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box component="img" src={acosign} alt="AcoFlow" sx={{ height: 30 }} />
                            <Typography variant="h4" fontWeight={700}>
                                Document Library
                            </Typography>
                        </Box>
                        <Typography variant="h6" color="text.secondary" gutterBottom mt={1}>
                            Organize and Access Your Documents Easily
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left", display: "inline-block", maxWidth: "100%" }}>
                            The Document Library allows you to store, manage, and share documents securely. Keep all your important files in one place and access them whenever needed. With powerful search and categorization features, finding the right document has never been easier.
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ mt: 2, borderRadius: "20px", textTransform: "none", bgcolor: "#1677F7", color: "white" }}
                            // onClick={() => navigate("/document-library")}
                            component="a"
                            href='https://app.coalitionify.com/builder'
                            target='_blank'
                        >
                            Explore Document Library
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={img3} alt="AcoFlow" sx={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                </Grid>

                {/* <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "left", md: "left" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box component="img" src={acosign} alt="AcoSign" sx={{ height: 30 }} />
                            <Typography variant="h4" fontWeight={700}>
                                AcoSign
                            </Typography>
                        </Box>
                        <Typography variant="h6" color="text.secondary" gutterBottom mt={1}>
                            Digitally Sign Documents with Ease
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            AcoSign simplifies the document signing process, making it easy to create signature workflows. Whether you need to get contracts signed or manage compliance, AcoSign offers a secure and efficient way to handle digital signatures with legally binding authentication.
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ mt: 2, borderRadius: "20px", textTransform: "none", bgcolor: "#1677F7", color: "white" }}
                            onClick={() => navigate("/acoSign")}
                        >
                            Explore AcoSign
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={img2} alt="AcoSign" sx={{ width: "100%", borderRadius: "12px" }} />
                    </Grid>
                </Grid> */}
            </Box>
        </Container>
    );
};

export default Products;
