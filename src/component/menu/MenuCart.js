import { Button, styled, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CartPrice from "../cart/CartPrice";

const buttonStyle = {
  fontFamily: "Roboto",
  fontSize: "10px",
  fontWeight: 500,
  padding: "-10px",
};

const MenuCartStyle = styled(Box)(({ theme }) => ({
  ".cart": {
    fontFamily: "Robboto",
    fontWeight: 700,
  },
  ".itemlist": {
    display: "flex",
    borderBottom: "1px dotted grey",
    margin: "0px 250px",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "5px",

    [theme.breakpoints.down("md")]: {
      margin: "0px 20px",
    },
  },

  ".continueshoppinStyle": {
    background: "#00c853",
  },
  ".nameStyle": {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: 700,
    width: "130px",
  },

  ".btn": {
    borderRadius: "7px",
    background: "#f4511e",
    color: "white",
    margin: "0px 10px",
  },
}));

function MenuCart({ items, setItems, open, setOpen }) {
  items.map((item) => {
    item["quantity"] = 1;
    return item;
  });
  const [listedItem, setListedItem] = useState(items);

  // Increase Quantity
  const IncreaseQuantity = (id) => {
    const info = listedItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setListedItem(info);
  };

  // Decrease Quantity
  const DecreaseQuantity = (id) => {
    const info = listedItem.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setListedItem(info);
  };

  // Total item name
  const itemName = listedItem.reduce(
    (itemList, item) => itemList + item.name + "(" + item.quantity + ") , ",
    []
  );

  //Total item in cart
  const totalItem = listedItem.reduce(
    (countCartItem, item) => countCartItem + item.quantity,
    0
  );

  // Total Item
  const totalAmount = listedItem.reduce(
    (totalAmount, item) => totalAmount + item.price * item.quantity,
    0
  );

  return (
    <MenuCartStyle>
      <Toolbar sx={{ marginBottom: "50px" }}>
        <Typography variant="h5" className="cart">
          My Cart
        </Typography>
        <Tabs
          dislabled
          sx={{ marginLeft: "auto" }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={0}
        >
          <Button
            color="inherit"
            variant="contained"
            className="continueshoppinStyle"
            sx={{
              marginLeft: "auto",
              marginTop: "10px",
              fontSize: "7px",
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
            onClick={() => setOpen(!open)}
          >
            View Full Menu
          </Button>
        </Tabs>
      </Toolbar>
      {listedItem.map((item) => (
        <>
          {item.quantity > 0 && (
            <Box className="itemlist" sx={{ margin: "50px" }}>
              <Typography id={item.id} className="nameStyle">
                {item.name}
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <button
                  sx={buttonStyle}
                  variant="outlined"
                  className="btn"
                  onClick={() => DecreaseQuantity(item.id)}
                >
                  {<RemoveIcon sx={{ fontSize: "15px" }} />}
                </button>

                <Typography id={item.id} sx={{ color: "#f4511e" }}>
                  {item.quantity}
                </Typography>
                <button
                  className="btn"
                  variant="outlined"
                  sx={buttonStyle}
                  onClick={() => IncreaseQuantity(item.id)}
                >
                  {<AddIcon sx={{ fontSize: "15px" }} />}
                </button>
              </div>
              <Typography id={item.id} sx={{ fontFamily: "Poppins" }}>
                ₹{item.price * item.quantity}
              </Typography>
            </Box>
          )}
        </>
      ))}
      <CartPrice
        totalItem={totalItem}
        totalAmount={totalAmount}
        itemName={itemName}
      />
    </MenuCartStyle>
  );
}

export default MenuCart;
