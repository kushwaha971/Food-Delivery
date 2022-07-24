import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Dot from "./Dot";
import sliderItem from "./SliderItem";

import Arrow from "./Arrow";
const SliderStyle = styled(Box)(({ theme }) => ({
  marginTop: '250px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: " auto",
  marginTop: "300px",
  position: "relative",

  ".containerSlider":{
      width: '450px',
      [theme.breakpoints.down('md')]:{
        width:'600px',
      }
  },
  ".benefits": {
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "700",
  },
  ".inactive": {
    display: "none",
  },

  ".Img": {
    margin: '25px',
    marginLeft:'80px',
    [theme.breakpoints.down('md')]:{
      marginLeft: '40px',
    },
 
  },
  ".description": {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "400",
    marginTop: '15px',
    [theme.breakpoints.down('md')]:{
      width: '300px',
      marginLeft: '30px',
      
    }
  },

  ".offer": {
    fontFamily: "Montserrat",
    marginTop: '20px',
    fontSize: "16px",
    fontWeight: "500",
    [theme.breakpoints.down('md')]:{
      width: '300px',
      marginLeft: '40px',
    }
  },

  
}));

const len = sliderItem.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide= () =>{
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  }

  const nextSlide = () =>{
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
  }

  return (
    <SliderStyle>
      <Box className="containerSlider">
        <Typography
          variant="h5"
          align="center"
          className="benefits"
          style={{ lineHeight: "30px" }}
        >
          Exciting benefits and offers of buying with
          <span style={{ color: "#FA4A0C" }}> Pluto</span>
        </Typography>
        {sliderItem.map((item, indx) => {
          return (
            <div
              key={indx}
              className={indx === activeIndex ? "slides active" : "inactive"}
            >
               

           
              <img
                 align="center" 
                className="Img"
                src={item.imageSrc}
             
                style={{ height: "250px", width: "280px"}}
              />
              <Typography className="benefits" align="center">
                {item.itemName}
              </Typography> 
             
              <Typography className="description" align="center">
                {item.desc}
              </Typography>
              <Typography className="offer" align="center">
                {item.offer}
              </Typography>
            </div>
          );
        })}

        <Dot
          activeIndex={activeIndex}
          sliderItem={sliderItem}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
        <Arrow prevSlide={prevSlide} nextSlide={nextSlide} />
      </Box>
    </SliderStyle>
  );
}

export default Slider;
