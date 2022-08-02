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
    marginLeft: theme.spacing(10),
    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: theme.spacing(5),
    },
  },
}));

const AccordionStyle = styled(Box)(({ theme }) => ({
  ".paperStyle": {
    margin: theme.spacing(13),
   marginTop: theme.spacing(20),
   [theme.breakpoints.down("md")]:{
    margin: theme.spacing(3),
    marginTop: theme.spacing(20),
   },
  },
  ".recipeHeading":{
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#263238",
   },
   ".receipeList":{
    fontFamily: "Montserrat",
    fontSize: "13px",
    fontWeight: "600",
    color: "#424242",
   }
}));

function Recipe() {
  return (
    <>
      <NavbarStyle>
        <AppBar color="inherit" elevation={0} sx={{ padding: "30px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>
          </Toolbar>
        </AppBar>
      </NavbarStyle>

      <AccordionStyle>
        <div className="paperStyle">
          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Burger</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Classic Veg Burger</li>
                <li className="receipeList">Classic Paneer Burger</li>
                <li className="receipeList">Loaded Cheese Burger</li>
                <li className="receipeList">Double Patty Veg Burger</li>
                <li className="receipeList">Pluto Special Burger</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">french fries</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Classic French Fries</li>
                <li className="receipeList">Peri-Peri French Fries</li>
                <li className="receipeList"> Cheese French Fries</li>
                <li className="receipeList">Masala French Fries</li>
            
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Sandwich</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Classic Veg Sandwich</li>
                <li className="receipeList">Creamy Malai Sandwich</li>
                <li className="receipeList">Masala Sandwich</li>
                <li className="receipeList">Classic Veg with loaded Chessse Sandwich</li>
                <li className="receipeList">Butter with Banana Sandwich</li>
                <li className="receipeList">Pluto Special Sandwich</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Maggie</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Classic Veg Maggie</li>
                <li className="receipeList">Veg Maggie with Cheese blast</li>
                <li className="receipeList">Spicy Masala Maggie</li>
                <li className="receipeList">Plain Butter Maggie </li>
                <li className="receipeList">Hot Schezwan Maggie</li>
                <li className="receipeList">Soupy Maggie</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Potato Twister</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Masala Twister</li>
                <li className="receipeList">Peri-Peri Cheese Twister</li>
                <li className="receipeList">Hot Schezwan Twister</li>
                <li className="receipeList">Pluto Potato Twister</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Cold Coffee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Pluto Iced Coffee</li>
                <li className="receipeList">Frappuccino</li>
                <li className="receipeList">Iced Mocha </li>
                <li className="receipeList">Classic Cold Coffee</li>
                <li className="receipeList">Pluto Freek shake Coffee</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Hot Beverages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Hot Coffee</li>
                <li className="receipeList">Filter Coffee</li>
                <li className="receipeList">Masala Ginger Tea</li>              
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Combo :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Classic Veg Burger + French Fries + Classic Cold Coffee</li>
                <li className="receipeList">Classic Veg Burger + French Fries + Coke </li>
                <li className="receipeList"> Maggie + Cold Coffee</li>
                <li className="receipeList"> Maggie + Coke + French Fries</li>
                <li className="receipeList"> Potato Twister + Cold Coffee + Maggie</li>
                <li className="receipeList"> Potato Twister + Coke + Maggie</li>
                <li className="receipeList"> Grilled Veg Sandwich + French Fries + Coke</li>
                <li className="receipeList">Grilled Veg Sandwich + French Fries + Cold Coffee</li>
                <li className="receipeList">Grilled Veg Sandwich + Tea/Coffee</li>
               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Classic Veg Burger:22(35)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Bun: 8</li>
                <li className="receipeList">Veggies: 5</li>
                <li className="receipeList">Tikkie: 7</li>
                <li className="receipeList">Sauces: 2</li>              
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="recipeHeading">Cold Coffee: 17(30)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li className="receipeList">Milk: 6</li>
                <li className="receipeList">Coffee + Ice+ Suger: 3</li>
                <li className="receipeList">Ice-Cream + cream: 8</li>               
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary>
              <Typography variant="subtitle" className="recipeHeading">French Fries: 12(25)</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion sx={{margin: '15px',borderColor:'#FA4A0C'}}>
            <AccordionSummary>
              <Typography variant="h6" className="recipeHeading">Maggie with veggie: 14 + 5 + 5 (24)</Typography>
            </AccordionSummary>
          </Accordion>
          
        </div>
        
      </AccordionStyle>
    </>
  );
}

export default Recipe;
