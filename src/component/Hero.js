import React from "react";
import image from "./images/Hero.svg";
import mobile from "./images/mobile.svg";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Paper, Box, styled, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const btnStyle = {
  color: "#FFFFFF",
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "700",
  textTransform: "capitalize",
  cursor: "pointer",
  paddingLeft: "15px",
  paddingRight: "15px",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ".mob1": {
    marginTop: "-650px",
    zIndex: "1",
    [theme.breakpoints.down("md")]: {
      marginTop: "-520px",
      width: "350px",
      zIndex: "0",
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
          <Typography variant="h1" align="center" className="slogan">
            Why stay hungry when you can order from Pluto
          </Typography>

          <Typography variant="h5" align="center" className="download">
            Now in Varanasi with lowest price & best quality in city
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Montserrat",
              color: "#FA4A0C",
              fontSize: "13px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            B30,2C-5, Lanka Assi road, Varanasi - 221005
          </Typography>
        </TextStyle>

        <Box
          style={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            gap: 20,
            margin: 20,
          }}
        >
          <Button variant="contained" sx={btnStyle}>
            <Link
              to="/offer"
              style={{ textDecoration: "none", color: "#ffff" }}
            >
              Students Offers
            </Link>
          </Button>

          <Button
            style={{ backgroundColor: "#0026ca" }}
            href="https://goo.gl/maps/1Q8qzZvVbpF5T5c76"
            target="_blansk"
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
