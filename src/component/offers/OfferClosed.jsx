import React from "react";
import {
  AppBar,
  DialogTitle,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "./../images/BellaLogo.png";
const blank = "_blank";
const OffereStyle = styled(Box)(({ theme }) => ({
  margin: "10px",
  padding: "5px",
  ".StuOffer": {
    direction: "flex",
    flexDirection: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginLeft: "500px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "1px",
    },
  },
}));

function OfferClosed() {
  return (
    <OffereStyle>
      <Box className="StuOffer">
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{
              marginTop: "90px",
              fontFamily: "Poppins",
              fontSize: "30px",
              fontWeight: 600,
              color: "#263238",
            }}
          >
            We have reached
            <span
              style={{
                fontFamily: "Montserrat",
                color: "#ff5722",
                fontSize: "25px",
              }}
            >
              {" "}
              100*{" "}
            </span>
            people's
          </Typography>
          <Typography
            sx={{
              fontFamily: "Robboto",
              fontSize: "27px",
              fontWeight: 700,
              color: "#ff5722",
              marginTop: "30px",
            }}
          >
            We will reopen the page soon, with new exiciting offers.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "40px",
            }}
          >
            Keep connected and follow us on Instagram:{" "}
            <span>
              <a
                href="https://www.instagram.com/pluto_india_food/tagged/"
                target={blank}
                style={{
                  fontFamily: "Robboto",
                  color: "#ff5722",
                  textDecoration: "none",
                }}
              >
                {" "}
                <InstagramIcon sx={{ height: "19px", color: "red" }} />
                {"  "}
                pluto_india_food
              </a>
            </span>
          </Typography>
        </DialogTitle>
      </Box>
    </OffereStyle>
  );
}

export default OfferClosed;
