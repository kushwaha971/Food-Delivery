import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import BurgerList from "./itemList/BurgerList";
import ColdCoffeList from "./itemList/ColdCoffeeList";
import FrenchFriesList from "./itemList/FrenchFriesList";
import HotBreveragesList from "./itemList/HotBreveragesList";
import MaggieList from "./itemList/MaggieList";
import PotatoTwisterList from "./itemList/PotatoTwisterList";
import SandwichList from "./itemList/SandwichList";

const AccordionStyle = styled(Box)(({ theme }) => ({
  ".paperStyle": {
    margin: theme.spacing(40),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  },
  ".container": {
    padding: "10px",
    margin: "10px",
    marginLeft: '-20px',
  },

  ".recipeHeading": {
    fontFamily: "Robboto",
    fontSize: "28px",
    fontWeight: "400",
    textTransform: "capitalize",
    color: "#424242",
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

function MenuItemList() {
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate a string of List Item
  const chekedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + "," + item;
      })
    : "";
  console.log(chekedItems);
  return (
    <>
      <AccordionStyle>
        <div className="paperStyle">
          <Box id="burger" className="container">
            <Typography variant="h5" className="recipeHeading">
              Burger:
            </Typography>
            <BurgerList handleCheck={handleCheck} />
          </Box>

          <Box id="fenchfries" className="container">
            <Typography variant="h5" className="recipeHeading">
              French Fries:
            </Typography>
            <FrenchFriesList handleCheck={handleCheck} />
          </Box>

          <Box id="sandwich" className="container">
            <Typography variant="h5" className="recipeHeading">
              Sandwich:
            </Typography>
            <SandwichList handleCheck={handleCheck} />
          </Box>

          <Box id="maggie" className="container">
            <Typography variant="h5" className="recipeHeading">
              Maggie:
            </Typography>
            <MaggieList handleCheck={handleCheck} />
          </Box>

          <Box id="potatoTwister" className="container">
            <Typography variant="h5" className="recipeHeading">
              Potato Twister:
            </Typography>
            <PotatoTwisterList handleCheck={handleCheck} />
          </Box>

          <Box id="coldCoffee" className="container">
            <Typography variant="h5" className="recipeHeading">
              Cold Coffee:
            </Typography>
            <ColdCoffeList handleCheck={handleCheck} />
          </Box>

          <Box id="hotBeverages" className="container">
            <Typography variant="h5" className="recipeHeading">
              Hot Beverages:
            </Typography>
            <HotBreveragesList handleCheck={handleCheck} />
          </Box>
        </div>
      </AccordionStyle>
    </>
  );
}

export default MenuItemList;
