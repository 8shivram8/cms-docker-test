import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
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
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? "100%" : "75%",
      }}
    >
      {/* Slider Box */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "300px" : "350px",
          overflow: "hidden",
        }}
      >
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
      </Box>

      {/* Dots Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "1px solid black",
              backgroundColor: currentIndex === index ? "black" : "white",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
