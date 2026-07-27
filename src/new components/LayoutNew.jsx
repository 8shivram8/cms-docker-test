import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MainScreen from "./MainScreen";
import CenterScreen from "./CenterScreen";
import KeyFeatures from "./KeyFeatures";
import Hosting from "./Hosting";
import Plans from "./pricing/Plans";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import KeyFeaturesNew from "./KeyFeaturesNew";
import IntegrationPage from "./IntegrationPage";
import { Element } from "react-scroll";
import Security123 from "./Security";
import { useGetAdminCpsQuery } from "../payment/cpcrm.api";
const LayoutNew = () => {
  alert("LayoutNew is running");
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoicmFtZXNod2FyQGdtYWlsLmNvbSIsImNvbnRhY3QiOiI5NjczNTQ0MTA2IiwiaXNWZXJpZmllZCI6dHJ1ZSwiaXNBZG1pblRva2VuIjp0cnVlLCJpYXQiOjE3ODUxNTA0MjcsImV4cCI6MTc4NTE5MDAyN30.W6Q7-Tvi2q8R5clEFaoJuL9dtVCctn95yxPgjtbfZlk";

  const { data, isLoading, error } = useGetAdminCpsQuery(
    {
      page: 1,
      limit: 10,
      token,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  console.log("Data:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MainScreen
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <Box display="flex" flexDirection="column" flex={1}>
        {/* <KeyFeatures/> */}
        <KeyFeaturesNew />
        <CenterScreen />
        <Plans selectedCountry={selectedCountry} />
        <Hosting />
        <IntegrationPage />
        <Security />

        <Element name="contactForm" id="contactForm">
          <ContactForm />
        </Element>
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutNew;
