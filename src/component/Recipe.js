import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "./images/BellaLogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarStyle = styled(Box)(({ theme }) => ({
  ".links": {
    marginLeft: theme.spacing(25),
    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: theme.spacing(5),
    },
  },
}));

const Heading = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(25),
  marginLeft: theme.spacing(35),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(18),
    marginLeft: theme.spacing(5),
  },
  ".plutoRecipe": {
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: "600",
    color: "#424242",
  },
}));
const AccordionStyle = styled(Box)(({ theme }) => ({
  ".paperStyle": {
    margin: theme.spacing(40),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3),
      marginTop: theme.spacing(4),
    },
  },
  ".recipeHeading": {
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#263238",
  },
  ".receipeList": {
    fontFamily: "Montserrat",
    fontSize: "13px",
    fontWeight: "600",
    color: "#424242",
    "&:hover": {
      background: "#9e9e9e",
    },
  },
}));

function Recipe() {
  return (
    <>
      <NavbarStyle>
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>
          </Toolbar>
        </AppBar>
      </NavbarStyle>

      <Heading>
        <Typography variant="h5" className="plutoRecipe">
          <span style={{ color: "#FA4A0C" }}>Pluto</span> Recipe
        </Typography>
      </Heading>

      <AccordionStyle>
        <div className="paperStyle">
          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Burger
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg Burger
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Paneer Burger
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Loaded Cheese Burger
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Double Patty Veg Burger
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Pluto Special Burger
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                french fries
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic French Fries
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Peri-Peri French Fries
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Cheese French Fries
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Masala French Fries
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Sandwich
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=Yv5UfXYPmfM "
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg Sandwich
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=KVVscepDzFc "
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Creamy Malai Sandwich
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=OJc7X_FS_ek"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Masala Sandwich
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=owow9tu3L6A "
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg with loaded Chessse Sandwich
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=gN-njwlTlGM "
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Butter with Banana Sandwich
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=KdLvelT0R1A"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Pluto Special Sandwich
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Maggie
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Veg Maggie with Cheese blast
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Spicy Masala Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Plain Butter Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Hot Schezwan Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Soupy Maggie
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Potato Twister
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Masala Twister
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Peri-Peri Cheese Twister
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Hot Schezwan Twister
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Pluto Potato Twister
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Cold Coffee
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Pluto Iced Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Frappuccino
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Iced Mocha
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Cold Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Pluto Freek shake Coffee
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Hot Beverages
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Hot Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="https://www.youtube.com/watch?v=_vgCSi5WQPQ"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Filter Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Masala Ginger Tea
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: "15px", borderColor: "#FA4A0C" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">
                Combo :
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg Burger + French Fries + Classic Cold Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Classic Veg Burger + French Fries + Coke{" "}
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Maggie + Cold Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Maggie + Coke + French Fries
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Potato Twister + Cold Coffee + Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Potato Twister + Coke + Maggie
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Grilled Veg Sandwich + French Fries + Coke
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Grilled Veg Sandwich + French Fries + Cold Coffee
                  </a>
                </li>
                <li className="receipeList">
                  <a
                    href="/#"
                    style={{ textDecoration: "none", color: "#424242" }}
                  >
                    Grilled Veg Sandwich + Tea/Coffee
                  </a>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </AccordionStyle>
    </>
  );
}

export default Recipe;
