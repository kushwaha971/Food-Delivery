import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  styled,
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../images/BellaLogo.svg";
import ClearIcon from "@mui/icons-material/Clear";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cardss from "../Cardss";
import Hero from "../Hero";
import Cart from "../Cart";
import Footer from "../Footer";
import { Link } from "react-scroll";

const NavbarStyle = styled(Box)(({ theme }) => ({
  ".links": {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#252B42",
    letterSpacing: "0.2px",
  },
}));

function DrawerComponent({ openDrawer, setOpenDrawer }) {
  
  return (
    <>
      <NavbarStyle>
        <Drawer
          open={openDrawer}
          onClick={() => setOpenDrawer(!openDrawer)}
          anchor="right"
          PaperProps={{
            sx: { width: "100%", cursor: "pointer", color: "#252B42" },
          }}
        >
          <List
            PaperProps={{
              sx: { width: "90%" },
            }}
          >
            <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
              <Toolbar>
                <Typography variant="title">
                  <img src={logo} width={182} height={64} alt="" />
                </Typography>
                <ClearIcon sx={{ marginLeft: "auto" }} />
              </Toolbar>
            </AppBar>
            <ListItemButton
              style={{
                direction: "flex",
                flexDirection: "column",
                marginTop: "100px",
              }}
            >
              <Button>
                <Link
                  exact
                  to="hero"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "#252B42",
                    letterSpacing: "0.2px",
                  }}
                >
                  Home
                </Link>
              </Button>

              <Button  >
                <Link
                   
                 exact
                 to="product"
                  onClick={() => setOpenDrawer(!openDrawer)}
                  style={{
                    marginTop: "25px",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "#252B42",
                    letterSpacing: "0.2px",
                  }}
                >
                  Products
                </Link>
              </Button>

              <Button>
                <Link
                  exact
                  to="contact"
                  style={{
                    marginTop: "25px",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "#252B42",
                    letterSpacing: "0.2px",
                  }}
                >
                  Contact
                </Link>
              </Button>

              <Button>
                <Link
                  exact
                  to="cart"
                  style={{
                    marginTop: "25px",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "#252B42",
                    letterSpacing: "0.2px",
                  }}
                >
                  <AddShoppingCartIcon />
                </Link>
              </Button>
              {/* </ListItemText> */}
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{ marginLeft: "auto" }}
        >
          <MenuIcon />
        </IconButton>
        
      </NavbarStyle>
      <section id="home">{<Hero />}</section>
      <section id="footer">{<Footer/>}</section>
      {/* <section id="product">{<Cardss />}</section>
      <section id="footer">{<Footer/>}</section>
      */}
    </>
  );
}

export default DrawerComponent;
