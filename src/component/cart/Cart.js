import React from "react";
import {
  Typography,
  Box,
  styled,
  AppBar,
  Toolbar,
  Link,
  Button,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmptyCart from "./EmptyCart";
import CartPrice from "./CartPrice";
import CartCards from "./CartCards";

const ItemDetailed = styled(Box)(({ theme }) => ({
  width: "550px",
  padding: "25px",
  background: "#ede7f6",
  [theme.breakpoints.down("md")]: {
    width: "250px",
    marginBottom: "25px",
    marginTop: "25px",
    background: "none",
  },
}));

const Caart = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CardStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(7),
    marginRight: "-25px",
    align: "center",
  },
}));

function Cart({ Item, cart, setCart, show, setShow }) {
  // Increase Item in cart list
  const IncreaseItem = (i) => {
    const info = cart.map((item, indx) => {
      if (indx === i && item.flag === true) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      console.log(i, Item);
      return item;
    });
    setCart(info);
  };

  // Decrease Item in Cart list
  const DecreaseItem = (i) => {
    const info = cart.map((item, indx) => {
      if (i === indx && item.flag === true && item.count > 1) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });

    setCart(info);
  };

  // Remove Item from Cart
  const deleteItem = (i) => {
    const info = cart.map((item, indx) => {
      if (indx === i && item.flag === true) {
        return {
          ...item,
          flag: false,
          count: 0,
        };
      }
      return item;
    });
    setCart(info);
  };

  // count no. item in cart
  const countCartItem = cart.reduce(
    (countCartItem, item) => countCartItem + item.count,
    0
  );

  // Total Item
  const totalAmount = cart.reduce(
    (totalAmount, item) => totalAmount + item.price * item.count,
    0
  );

  return (
    <>
      <>
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Button variant="primary" kind="flat" size="big" colorMode="light">
              <Link className="links" onClick={() => setShow(!show)}>
                <ArrowBackIcon style={{ fill: "black", fontSize: "30px" }} />
              </Link>
            </Button>
            <Button variant="primary" kind="flat" size="big" colorMode="light">
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  color: "#252B42",
                  textTransform: "capitalize",
                  fontSize: "25px",
                  fontWeight: 700,
                }}
              >
                My Cart
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </>
      {countCartItem === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Caart>
            <CardStyle>
              <CartCards
                IncreaseItem={IncreaseItem}
                DecreaseItem={DecreaseItem}
                deleteItem={deleteItem}
                cart={cart}
              />
            </CardStyle>

            <ItemDetailed>
              <CartPrice
                countCartItem={countCartItem}
                totalAmount={totalAmount}
              />
            </ItemDetailed>
          </Caart>
        </>
      )}
    </>
  );
}

export default Cart;
