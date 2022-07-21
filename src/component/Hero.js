import React from "react";
import image from "./images/Hero.svg";
import mobile from "./images/mobile.svg";

import { Paper, Box, styled, Typography, Button } from "@mui/material";

const btnStyle = 
  {
    color: "#FFFFFF",
    fontSize: "16px",
    fontFamily: "Montserrat0",
    fontWeight: "700",
    textTransform: "capitalize",
  }

const HeroStyle = styled(Box)(({ theme }) => ({
  ".paperContainer": {
    backgroundImage: `url(${image})`,
    height: "619px",
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

const Btn = styled(Box)(({ theme }) => ({
  ".btn": {
    padding: "10px 90px",
    width: "36px",
    borderRadius: "30px",
    margin: theme.spacing(2),
    marginTop: theme.spacing(12),
    background: "#FA4A0C",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
    },
  },
  ".btn1": {
    padding: "10px 90px",
    width: "36px",
    borderRadius: "30px",
    margin: theme.spacing(2),
    marginTop: theme.spacing(12),
    color: "#FA4A0C",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(1),
    },
  },
}));

const Mobile = styled(Box)(({ theme }) => ({
  ".mob1": {
    position: "absolute",
    margin: "auto",
    top: "470px",
    left: "0",
    right: "0",
    textAlign: "center",
    zIndex: "1",

    [theme.breakpoints.down("md")]: {
      top: "520px",
      width: "350px"
    },
  },
}));





function Hero() {
  return (
    <HeroStyle>
      <Paper
        className="paperContainer"
        elevation={0}
        sx={{ marginTop: "90px" }}
      >
        <TextStyle>
          <Typography variant="h3" align="center" className="food">
            Pluto
          </Typography>

          <Typography variant="h1" align="center" className="slogan">
            Why stay hungry when you can order form Bella Onojie
          </Typography>

          <Typography variant="h5" align="center" className="download">
            Download the bella onoje’s food app now on
          </Typography>
        </TextStyle>

        <Btn>
          <Typography align="center">
            <Button
              variant="contained"
              className="btn"
              sx={btnStyle}
            >
              Playstore
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className="btn1"
              sx={btnStyle}
            >
              AppStore
            </Button>
          </Typography>
        </Btn>
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
