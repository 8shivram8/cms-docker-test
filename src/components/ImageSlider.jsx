import React, { useState, useEffect } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: isMobile ? "100%" : "60%",
        height:isMobile? "300px" : "350px",
        overflow: "hidden",
      }}
    >
      <Button
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          left: 0,
          zIndex: 2,
          color: "black",
          minWidth: "20px",
          minHeight: "20px",
          borderRadius: "50%",
          fontSize: "35px",
          boxShadow: "none",
        }}
      >
        &#8249;
      </Button>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Box>

      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "2px",
          zIndex: 2,
          color: "black",
          minWidth: "20px",
          minHeight: "20px",
          borderRadius: "50%",
          fontSize: "35px",
          boxShadow: "none",
        }}
      >
        &#8250;
      </Button>
    </Box>
  );
};

export default ImageSlider;
