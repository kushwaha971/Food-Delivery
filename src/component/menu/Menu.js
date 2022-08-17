import { Box, Dialog, Fab, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuCart from "./MenuCart";
import menu from "./MenuList";

const spanStyle = {
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  color: "#37474f",
};

const MenuStyle = styled(Box)(({ theme }) => ({
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
    marginLeft: "-20px",
    marginBottom: '100px'
  },

  ".recipeHeading": {
    fontFamily: "Robboto",
    fontSize: "28px",
    fontWeight: "400",
    textTransform: "capitalize",
    color: "#424242",
    marginTop: '35px',
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
  

  const [open, setOpen] = useState(false);
  const [selectedItems, setSelecetedItems] = useState([]);

  

  const itemList = [];

   menu.map((item) =>{
    if(!item.title){
      itemList.push({
        id:item.id,
        name: item.name,
        price: item.price,
      })
    }
    return item
  })


  const handleItemUpdated = (id, checked) => {
    console.log("updated", id, checked);
    console.log("Cart before", selectedItems);
    let updatedCart = [];
    if (!checked) {
      updatedCart = selectedItems.filter((item) => parseInt(item.id) !== parseInt(id));
    } 
    else 
    {
      const selectedItem = itemList.filter((item) => parseInt(item.id) === parseInt(id));
      updatedCart = [...selectedItem, ...selectedItems];
    }

    console.log("updated cart", updatedCart);
    setSelecetedItems(updatedCart);
  };

  const handleClick = (event) => {
    const { id, checked } = event.target;
    handleItemUpdated(id, checked);
  };

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
          <div className="paperStyle">
            <Box id="burger" className="container">
              {menu.map((item) => (
                <>
                  {item.title ? (
                    <Typography
                      id={item.id}
                      variant="h5"
                      className="recipeHeading"
                    >
                      {item.name}:
                    </Typography>
                  ) : (
                    <div
                      key={item.id}
                      style={{ margin: "5px", marginLeft: "15px" }}
                    >
                      <input
                        id={item.id}
                        // value={item.name}
                        type="checkbox"
                        onChange={handleClick}
                      />
                      <span style={spanStyle}>
                        {`${item.name}- ${item.price}`}
                      </span>
                    </div>
                  )}
                </>
              ))}
            </Box>
          </div>
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
            // onClick = {() => AddToCart()}
            onClick={() => setOpen(!open)}> Place Order
          </Fab>
        </Box>
      </MenuStyle>
      <Dialog fullScreen open={open}>
        <MenuCart  items = {selectedItems} setItems = {setSelecetedItems} open = {open} setOpen = {setOpen} handleClick = {handleClick } />
      </Dialog>
    </>
  );
}

export default Menu;
