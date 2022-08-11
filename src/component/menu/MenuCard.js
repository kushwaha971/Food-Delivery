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
import {Link} from 'react-scroll'

const MenuCardStyle = styled(Box)(({ theme }) => ({
  // "."
  ".itemName":{
    position: "absolute",
    top: 10,
    left: "50%",
    color: "#212121",
    transform: "translateX(-50%)",
    fontSize: "15px",
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
          // sx={{direction: 'flex',flexDirection: 'column',justifyContent: 'space'}}
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 1, md: 1 }}
          direction="flex"
          alignItems="center"
          justifyContent="center"
          elevation={20}
        >
          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <Link to = "burger" spy={true} smooth={true}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={burger}
                    sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                  />
                  <Typography className="itemName">
                    Burger
                  </Typography>
                </div>
                </Link>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position: 'relative'}}>
                <CardMedia
                  component="img"
                  image={frenchFries}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
                <Typography className="itemName"> French Fries</Typography>
                </div>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position: "relative"}}>
                <CardMedia
                  component="img"
                  image={sandwich}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
                <Typography className="itemName">Sandwich</Typography>
                </div>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={maggie}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
                <Typography className="itemName">Maggie</Typography>
                </div>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={potatoTwister}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
               <Typography className="itemName">Potato Twister</Typography>
                </div>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={coldCoffee}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
                    <Typography className="itemName">Cold Coffee</Typography>
                </div>
              </Card>

            </Paper>
          </Grid>

          <Grid item xs={6} lg={3} md={4} spacing={1}>
            <Paper sx={{ maxWidth: 150, borderRadius: "18px" }} elevation={24}>
              <Card variant="outlined" sx={{ borderRadius: "18px" }}>
              <div style={{position:"relative"}}>
                <CardMedia
                  component="img"
                  image={hotBreverages}
                  sx={{ width: "150px", height: "60px", cursor: "pointer" }}
                />
                 <Typography className="itemName">Hot Breverages</Typography>
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MenuCardStyle>
  );
}

export default MenuCard;
