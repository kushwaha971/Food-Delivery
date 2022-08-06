import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, styled } from "@mui/material";

const ArrowStyle = styled(Box)(({theme})=>({
    ".arrow":{
        marginTop:'-160px',
        marginBottom:'330px',
        
        
    },
    ".prev": {
        color: "grey",
        cursor: "pointer",
         zIndex: "1",
         marginLeft: '40px',
        padding: "0",
        fontSize: "40px",
        fontWeight: "bold",
        borderRadius: "5px 0px 0px 5px",
        // [theme.breakpoints.dowm('md')]:{
        //     marginLeft: '10px',
        // },
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(1),
          },
        "&:hover": {
          color: "white",
          backgroundColor: "#FA4A0C",
          transition: "all 0.5 ease-in",
    
        },
    },
    '.next': {
        marginLeft: '310px',
         color: 'grey',
        cursor: 'pointer',
        zIndex: '1',
        width: 'auto',
         padding: '0',
        fontSize: '40px',
        fontWeight: 'bold',
        borderRadius: '0px 5px 5px 0px',
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(38),
          
          },
        "&:hover": {
            color: "white",
            backgroundColor: "#FA4A0C",
            transition: "all 0.5 ease-in",
      
          },
      }
}))

function Arrow({ prevSlide, nextSlide }) {
  return (
    <ArrowStyle>
    <div className="arrow">
      <span className="prev" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </span>
      <span className="next"  onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </span>
    </div>
    </ArrowStyle>
  );
}

export default Arrow;
