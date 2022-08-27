import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Drawer,
  styled,
  ListItemButton,
  Box,
  List,
  useMediaQuery,
  useTheme,
  IconButton,
  Dialog,
  Button,
} from "@mui/material";

import { Link } from "react-scroll";
import React, { useState } from "react";
import logo from "./../images/BellaLogo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Hero from "./../Hero";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../Footer";
import ClearIcon from "@mui/icons-material/Clear";
import Cart from "../cart/Cart";
import Slider from "../slider/Slider";

const drwerStyle = {
  marginTop: "25px",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: "#252B42",
  letterSpacing: "0.2px",
};

const NavbarStyle = styled(Box)(({ theme }) => ({
  ".links": {
    marginLeft: theme.spacing(10),
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#252B42",
    letterSpacing: "0px",
    fontStyle: "normal",
    textDecoration: "none",

    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: theme.spacing(5),
    },
  },
}));

function Navbar({ Item, cart, setCart, show, setShow }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    //....................................... Implementation of Dialog MUI..................................................................
    <>
      <Dialog
        fullScreen
        open={!show}
        onClose={() => {
          setShow(show);
        }}
        //  TransitionComponent={Transition}
      >
        <Cart
          Item={Item}
          cart={cart}
          setCart={setCart}
          show={show}
          setShow={setShow}
        />
      </Dialog>
      {/* ....................................................................................................... */}
      <NavbarStyle>
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>

            {/*....................... Implementation of Drawer........................................... */}
            {isMatch ? (
              <>
                <IconButton
                  onClick={() => setOpenDrawer(!openDrawer)}
                  sx={{ marginLeft: "auto" }}
                ></IconButton>
                <IconButton
                  onClick={() => setOpenDrawer(!openDrawer)}
                  sx={{ marginLeft: "auto" }}
                >
                  <MenuIcon />
                </IconButton>

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
                      sx: { width: "100%" },
                    }}
                  >
                    <AppBar
                      color="inherit"
                      elevation={0}
                      sx={{ padding: "10px" }}
                    >
                      <Toolbar>
                        <Typography variant="title">
                          <img src={logo} width={182} height={64} alt="" />
                        </Typography>
                        <ClearIcon sx={{ marginLeft: "auto" }} />
                      </Toolbar>
                    </AppBar>
                    <ListItemButton
                      // disableElevation
                      // disableRipple
                      // sx={{
                      //   ml: 1,
                      //   "&.MuiButtonBase-root:hover": {
                      //     bgcolor: "transparent",
                      //   },
                      // }}
                      style={{
                        direction: "flex",
                        flexDirection: "column",
                        marginTop: "100px",
                      }}
                    >
                      <Button
                        variant="primary"
                        kind="flat"
                        size="big"
                        colorMode="light"
                        disableElevation
                        disableRipple
                        sx={{
                          ml: 1,
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        <Link
                          exact
                          spy={true}
                          smooth={true}
                          to="home"
                          onClick={() => setOpenDrawer(!openDrawer)}
                          style={drwerStyle}
                        >
                          Home
                        </Link>
                      </Button>

                      {/* <Button
                         variant="primary"
                        kind="flat"
                       size="big"
                        colorMode="light"
                        >
                    <Link
                      exact
                      to="product"
                      onClick={() => setOpenDrawer(!openDrawer)}
                      style={drwerStyle}
                    >
                      Products
                    </Link>
                  </Button> */}
                      <Button
                        variant="primary"
                        kind="flat"
                        size="big"
                        colorMode="light"
                        disableElevation
                        disableRipple
                        sx={{
                          ml: 1,
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        <Link
                          exact
                          spy={true}
                          smooth={true}
                          to="footer"
                          onClick={() => setOpenDrawer(!openDrawer)}
                          style={drwerStyle}
                        >
                          Contact
                        </Link>
                      </Button>
                      {/* <Button
                         variant="primary"
                        kind="flat"
                        size="small"
                        colorMode="light"
                        >
                    <Link
                      className="links"
                      onClick={() => setShow(!show)}
                      style={drwerStyle}
                    >
                      <ShoppingCartIcon  style={{fill: "orange" , fontSize: 30}}/> 
                    </Link>
                  </Button> */}
                    </ListItemButton>
                  </List>
                </Drawer>
                {/* ........................................................................................................ */}
              </>
            ) : (
              <>
                {/*......................................... Implementation of NavBar........................................ */}
                <Tabs
                  dislabled
                  sx={{ marginLeft: "auto", marginRight: "80px" }}
                  TabIndicatorProps={{
                    style: {
                      display: "none",
                    },
                  }}
                  value={0}
                >
                  <Button
                    variant="primary"
                    kind="flat"
                    size="small"
                    colorMode="light"
                    disableElevation
                    disableRipple
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    <Link
                      exact
                      to="home"
                      spy={true}
                      smooth={true}
                      className="links"
                    >
                      Home
                    </Link>
                  </Button>
                  <Button
                    variant="primary"
                    kind="flat"
                    size="small"
                    colorMode="light"
                    disableElevation
                    disableRipple
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    <Link
                      exact
                      to="product"
                      spy={true}
                      smooth={true}
                      className="links"
                    >
                      Product
                    </Link>
                  </Button>
                  <Button
                    variant="primary"
                    kind="flat"
                    size="small"
                    colorMode="light"
                    disableElevation
                    disableRipple
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    <Link
                      exact
                      to="footer"
                      spy={true}
                      smooth={true}
                      className="links"
                    >
                      Contact
                    </Link>
                  </Button>
                  {/* <Button
                    variant="primary"
                    kind="flat"
                    size="small"
                    colorMode="light"
                    disableElevation
                    disableRipple
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    <Link
                      className="links"
                      spy={true}
                      smooth={true}
                      onClick={() => setShow(!show)}
                    >
                      <ShoppingCartIcon
                        style={{ fill: "orange", fontSize: 30 }}
                      />
                    </Link>
                  </Button> */}
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </NavbarStyle>
      {/* ........................................................................................................... */}
      <section id="home">{<Hero />}</section>
      <section id="product">{<Slider />}</section>
      <section id="footer">{<Footer />}</section>
    </>
  );
}

export default Navbar;
