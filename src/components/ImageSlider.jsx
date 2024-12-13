import React, { useState, useEffect } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
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
        height: "100%",
      }}
    >
      <Button
        onClick={goToPrevious}
        sx={{
          position: "absolute",
          left: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "50%",
          fontSize: "18px",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        &#8249;
      </Button>

      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Button
        onClick={goToNext}
        sx={{
          position: "absolute",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "50%",
          fontSize: "18px",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        &#8250;
      </Button>
    </Box>
  );
};

export default ImageSlider;
