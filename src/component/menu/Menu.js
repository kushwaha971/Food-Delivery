import { Box, Fab, styled, Typography } from "@mui/material";
import React from "react";
import MenuCard from "./MenuCard";
import MenuItemList from "./MenuItemList";

const MenuStyle = styled(Box)(({ theme }) => ({
  ".itemStyle": {
    marginTop: "50px",
    marginLeft: "150px",
    fontSize: "30px",
    fontFamily: "Poppins",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#5C5C5C",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
    },
  },
  ".fab": {
    position: "sticky",
    display: "flex",
    justifyContent: "flex-end",
    // backgrundColor: '#ff7043',
    marginRight: "750px",
    bottom: "5rem",

    [theme.breakpoints.down("md")]: {
      marginRight: "5px",
      marginBottom: "10px",
      bottom: "0.5rem",
      right: "0.5rem",
    },
  },
}));

function Menu() {
  return (
    <>
      <MenuStyle>
        <Typography variant="h5" className="itemStyle">
          <span style={{ color: "#FA4A0C" }}> Pluto</span> Item
        </Typography>

        <Box style={{ margin: "25px" }}>
          <MenuCard />
        </Box>
        <Box style={{ margin: "25px", marginTop: "130px" }}>
          <MenuItemList />
        </Box>
        <Box className="fab">
          <Fab
            variant="extended"
            sx={{
              backgroundColor: "#FA4A0C",
              fontSize: "12px",
              fontFamily: "Montserrat",
              fontWeight: "700",
            }}
          >
            Place Order
          </Fab>
        </Box>
      </MenuStyle>
    </>
  );
}

export default Menu;
