import React from "react";
import image from "./images/footer.svg";
import {
  styled,
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Toolbar,
  Dialog,
} from "@mui/material";
import logo from "./images/BellaLogo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
// import CustomerDetail from "./CustomerDetail";
import Empoloyee from "./employeeDetail/Empoloyee";

const FooterStyle = styled(Box)(({ theme }) => ({
  ".paperContainer": {
    backgroundImage: `url(${image})`,
    height: "480px",
    backgroundRepeat: "no-repeat",
    backgroundSize: " 100vw",
    marginTop: "-170px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
      align: "center",
      background: "#252B42",
    },
  },
  ".btn": {
    padding: "5px",
    width: "120px",
    borderRadius: "15px",
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      backgroun: "#FA4A0C",
    },
  },
  ".slogan": {
    paddingTop: "100px",
    color: "#F7F7F7",
    fontFamily: "Montserrat",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",
    letterSpacing: "1px",

    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      lineHeight: "40px",
      color: "#FFFFFF",
    },
  },

  ".download": {
    textAlign: "center",
    color: "#F7F7F7",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "100px",
    letterSpacing: "1px",

    [theme.breakpoints.down("md")]: {
      letterSpacing: "0.2px",
      color: "#BDBDBD",
      lineHeight: "38px",
      paddingTop: "40px",
    },
  },
  ".regInfo": {
    marginLeft: "50px",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      marginTop: "0px",
    },
  },
  ".career": {
    marginTop: "10px",
    marginLeft: "18px",
    color: "#263238",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      color: "#bdbdbd",
      fontSize: "15px",
    },
  },
  ".employe":{
    marginTop: "5px",
    marginLeft: "18px",
    textTransform: "capitalize",
    color: "#263238",
    fontSize: "15px",
    fontFamily: "Montserrat",
    fontWeight: "600",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      color: "#90a4ae",
      fontSize: "12px",
    },
  }
}));

const Ftr = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundImage: "none",
    align: "center",
  },
  ".content": {
    marginLeft: "20px",
    marginRight: "25px",
  },

  logoo: {
    width: "220",
    height: "102",
  },

  ".symbol": {
    marginLeft: "20px",
    width: "45px",
    height: "40px",
    color: "#FA4A0C",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      marginTop: "0px",
    },
  },
}));

function Footer() {
  const [employeeDetail, setEmployeeDetail] = useState(true);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div sx={{ marginTop: "10px" }}>
      <FooterStyle>
        <Paper
          className="paperContainer"
          elevation={0}
          sx={{ marginTop: "10px" }}
        >
          <Typography variant="h2" align="center" className="slogan">
            Will be live in August 2022
          </Typography>
          {isMatch ? (
            <Typography variant="h4" align="center" className="download">
              It’s time to score on hunger with imperceptible prices
            </Typography>
          ) : (
            <Typography variant="h4" align="center" className="download">
              Keep visiting to for craziest opening day offers
            </Typography>
          )}

          {isMatch ? (
            <div align="center">
              <Button
                variant="contained"
                className="btn"
                sx={{
                  textTransform: "capitalize",
                  background: "#FA4A0C",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                Order Soon
              </Button>
            </div>
          ) : (
            <Typography align="center">
              <Button
                variant="contained"
                className="btn"
                sx={{
                  textTransform: "capitalize",
                  background: "#FA4A0C",
                  fontSize: "14px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                Order Soon
              </Button>
            </Typography>
          )}

          <div className="regInfo">
            <Typography variant="h6" className="career">
              Career
            </Typography>
            <Typography
              onClick={() => setEmployeeDetail(!employeeDetail)}
              className = "employe">
              Employee Registration
            </Typography>
          </div>
        </Paper>
      </FooterStyle>

      <Ftr>
        <Toolbar className="content">
          {isMatch ? (
            ""
          ) : (
            <Typography variant="title">
              <img src={logo} width={240} height={80} alt="" />
            </Typography>
          )}

          <Typography sx={{ margin: "auto" }}>
            <YouTubeIcon className="symbol" />
            <FacebookIcon className="symbol" />
            <a href="https://www.instagram.com/pluto_india_food/tagged/">
              <InstagramIcon className="symbol" />
            </a>
          </Typography>
          {isMatch ? (
            ""
          ) : (
            <Typography
              variant="subtitle1"
              sx={{
                marginLeft: "auto",
                color: "#5C5C5C",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Copywright 2022 Pluto India Foods
            </Typography>
          )}
        </Toolbar>
        {isMatch ? (
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: "#5C5C5C",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: "700",
              lineSpacing: "1px",
              lineHeight: "18px",
              paddingBottom: "5px",
            }}
          >
            Copywright 2022 Pluto India Foods
          </Typography>
        ) : (
          ""
        )}
        <Dialog
          open={!employeeDetail}
          onClose={() => {
            setEmployeeDetail(!employeeDetail);
          }}
        >
          <Empoloyee
            employeeDetail={employeeDetail}
            setEmployeeDetail={setEmployeeDetail}
          />
        </Dialog>
      </Ftr>
    </div>
  );
}

export default Footer;
