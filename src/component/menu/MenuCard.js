import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import burger from "./menuImages/burger.jpg";
import frenchFries from "./menuImages/frenchfries.jpg";
import sandwich from "./menuImages/sandwich.jpg";
import maggie from "./menuImages/maggie.jpg";
import potatoTwister from "./menuImages/potatoTwister.jpg";
import coldCoffee from "./menuImages/coldcoffee.jpg";
import hotBreverages from "./menuImages/hotbrevages.jpg";
import combo from './menuImages/combo.jpg'
import {Link} from 'react-scroll'


const MenuCardStyle = styled(Box)(({ theme }) => ({

  ".itemName":{
    position: "absolute",
    top: 3,
    left: "50%",
    color: "#212121",
    transform: "translateX(-50%)",
    fontSize: "12px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    cursor:"pointer",
  },
}));

function MenuCard() {
  return (
    <MenuCardStyle>
      <Container>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 2, md: 1 }}
          direction="flex"
          alignItems="center"
          justifyContent="center"
          elevation={20}
        >
          <Grid item xs={4} lg={2} md={2} spacing={0}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "1" spy={true} smooth={true}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={burger}
                    sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                  />
                  <Typography className="itemName">
                    Burger
                  </Typography>
                 
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={0}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "7" spy={true} smooth={true}>
              <div style={{position: 'relative'}}>
                <CardMedia
                  component="img"
                  image={frenchFries}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                <Typography className="itemName">French Fries</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={0}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "12" spy={true} smooth={true}>
              <div style={{position: "relative"}}>
                <CardMedia
                  component="img"
                  image={sandwich}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                <Typography className="itemName">Sandwich</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={0}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "19" spy={true} smooth={true}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={maggie}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                <Typography className="itemName">Maggie</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={0}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "27" spy={true} smooth={true}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={potatoTwister}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
               <Typography className="itemName">Potato Twister</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "32" spy={true} smooth={true}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={coldCoffee}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                    <Typography className="itemName">Cold Coffee</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "38" spy={true} smooth={true}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={hotBreverages}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                 <Typography className="itemName">Hot Breverages</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} lg={2} md={2} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "10px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "10px" }}>
              <Link to = "42" spy={true} smooth={true}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={combo}
                  sx={{ width: "150px", height: "40px", cursor: "pointer" }}
                />
                 <Typography className="itemName">Combo</Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MenuCardStyle>
  );
}

export default MenuCard;
