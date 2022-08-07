import React from "react";
import image from "./images/Hero.svg";
import mobile from "./images/mobile.svg";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Paper, Box, styled, Typography, Button } from "@mui/material";

const btnStyle = {
  color: "#FFFFFF",
  fontSize: "16px",
  fontFamily: "Montserrat",
  fontWeight: "700",
  textTransform: "capitalize",
  cursor: "pointer",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "30px",
 background: "#FA4A0C",

};

const HeroStyle = styled(Box)(({ theme }) => ({
  ".paperContainer": {
    backgroundImage: `url(${image})`,
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: " 100vw",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
      align: "center",
    },
  },
}));

const TextStyle = styled(Box)(({ theme }) => ({
  ".food": {
    color: "#F7F7F7",
    fontFamily: "Montserrat",
    paddingTop: "70px",
    lineHeight: "36px",
    fontWeight: "700",
    fontSize: "24px",
    letterSpacing: "0.2px",

    [theme.breakpoints.down("md")]: {
      color: "#737373",
      marginBottom: "15px",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
  },

  ".slogan": {
    color: "#F7F7F7",
    fontFamily: "Poppins",
    fontSize: "58px",
    fontWeight: "700",
    lineHeight: "80px",
    letterSpacing: "0.2px",

    [theme.breakpoints.down("md")]: {
      color: "#252B42",
      fontSize: "38px",
      fontWeight: "bold",
      lineHeight: "42.5px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
    },
  },

  ".download": {
    textAlign: "center",
    color: "#F7F7F7",
    fontFamily: "Montserrat",
    fontWeight: "500",
    lineHeight: "80px",
    fontSize: "28px",
    letterSpacing: "0.1px",

    [theme.breakpoints.down("md")]: {
      letterSpacing: "0.2px",
      color: "#737373",
      lineHeight: "35px",
      paddingTop: "35px",
    },
  },
  
}));



 

const Mobile = styled(Box)(({ theme }) => ({
  ".mob1": {
    position: "absolute",
    margin: "auto",
    top: "250px",
    left: "0",
    right: "0",
    textAlign: "center",
    zIndex: "1",

    [theme.breakpoints.down("md")]: {
      top: "330px",
      width: "350px",
    },
  },
}));

function Hero() {
  return (
    <HeroStyle>
      <Paper
        className="paperContainer"
        elevation={0}
        sx={{ marginTop: "90px", marginBottom: "265px" }}
      >
        <TextStyle>
          {/* <Typography variant="h3" align="center" className="food">
            Pluto
          </Typography> */}

          <Typography variant="h1" align="center" className="slogan">
            Why stay hungry when you can order form Pluto
          </Typography>

          <Typography variant="h5" align="center" className="download">
            Coming Soon in Varanasi with lowest price & best quality in city
          </Typography>
        </TextStyle>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: 20,
           
          }}
        >
          <Button variant="contained"
           sx={btnStyle}
           >
            Order Soon
          </Button>

          <Button
            style={{ backgroundColor: "#0026ca" }}
            href="https://goo.gl/maps/1Q8qzZvVbpF5T5c76"
            target="_blank"
            variant="contained"
            className="btn"
            sx={btnStyle}
          >
            <MyLocationIcon /> location
          </Button>
        </Box>
      </Paper>
      <Mobile>
        <Typography>
          <img src={mobile} className="mob1" alt="" />
        </Typography>
      </Mobile>
    </HeroStyle>
  );
}

export default Hero;