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
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import CustomerDetail from "./CustomerDetail";


const FooterStyle = styled(Box)(({ theme }) => ({
  ".paperContainer": {
    backgroundImage: `url(${image})`,
    height: "480px",
    backgroundRepeat: "no-repeat",
    backgroundSize: " 100vw",
    marginTop: "80px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
      align: "center",
      background: "#252B42",
      marginTop: "30px",
    },
  },
}));

const TextStyle = styled(Box)(({ theme }) => ({
  ".slogan": {
    paddingTop: "100px",
    color: "#F7F7F7",
    fontFamily: "Montserrat",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "170px",
    letterSpacing: "0.2px",

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
    lineHeight: "0px",
    fontSize: "30px",
    letterSpacing: "0.1px",

    [theme.breakpoints.down("md")]: {
      letterSpacing: "0.2px",
      color: "#BDBDBD",
      lineHeight: "38px",
      paddingTop: "40px",
    },
  },
}));

const Btn = styled(Box)(({ theme }) => ({
  marginTop: "45px",
  ".btn": {
    padding: "18px 0px",
    width: "176px",
    borderRadius: "10px",
    gap: "10px",
    margin: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      backgroun: "#FA4A0C",
      
    },
  },
  ".btn1": {
    padding: "15px 0px",
    width: "176px",
    borderRadius: "10px",
    margin: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      color: "#FFFFFF",
      margin: theme.spacing(0),
       
      
    },
  },
}));

const Ftr = styled(Box)(({ theme }) => ({
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
      
    },
  },
}));

function Footer() {
  const [customerdetail,setCustomerdetail] = useState(true);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div  sx={{ marginTop: "10px" }}>
      <FooterStyle>
        <Paper
          className="paperContainer"
          elevation={0}
          sx={{ marginTop: "10px" }}
        >
          <TextStyle>
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
          </TextStyle>
          <Btn>
            {isMatch ? (
              <Typography align="center">
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
                 <Button
                 onClick={() => setCustomerdetail(!customerdetail)}
                  color="inherit"
                  variant="outlined"
                  className="btn1"
                  sx={{
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                  }}
                >
                  Form
                </Button> 
              </Typography>
            ) : (
              <Typography align="center">
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
                <Button
                onClick={() => setCustomerdetail(!customerdetail)}
                  color="inherit"
                  variant="outlined"
                  className="btn1"
                  sx={{
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                  }}
                >
                  form
                </Button>
              </Typography>
            )}
          </Btn>
        </Paper>
      </FooterStyle>

      <Ftr>
        <Toolbar className="content">
          {isMatch ? (
            ""
          ) : (
            <Typography variant="title">
              <img src={logo} width={240} height={102} alt="" />
            </Typography>
          )}

          <Typography
           sx={{ margin: "auto" }}
           >
            <YouTubeIcon className="symbol" />
            <FacebookIcon className="symbol" />
            <InstagramIcon className="symbol" />
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
            align = 'center'
            sx={{
            
              color: "#5C5C5C",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: "700",
              lineSpacing: '0.1px',
              lineHeight: '18px',
              marginBottom: '35px',
            }}
          >
            Copywright 2022 Pluto India Foods
          </Typography>
        ) : ( 
          ""
        )}
        <Dialog
        open = {!customerdetail}
        onClose = {() => {setCustomerdetail(!customerdetail)}}
        >
        <CustomerDetail customerdetail ={customerdetail} setCustomerdetail={setCustomerdetail}/>
        </Dialog>
      </Ftr>
      
    </div>
  );
}

export default Footer;
