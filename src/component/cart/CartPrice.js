import React from "react";
import { Typography, Box, styled, Button } from "@mui/material";
// import CustomerDetail from "../menu/CustomerDetail";

const ItemDetailed = styled(Box)(({ theme }) => ({
  margin: "20px",

  ".header": {
    padding: "15px 20px",
  },
  ".price": {
    float: "right",
  },
  ".container": {
    margin: "0px 200px",
    [theme.breakpoints.down("md")]: {
      margin: "0px 20px",
    },
  },

  ".totalamount": {
    fontSize: 18,
    fontWeight: 700,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
  ".placeOrder": {
    background: "#4caf50",
    width: "100%",
    margin: "5px",
  },
}));

function CartPrice({ totalItem, totalAmount, itemName, open,setOpen}) {
  const orderedItem = {
    Items: itemName,
    "Number of items": totalItem,
    "Total Amount": totalAmount,
  };

  const handleSubmit = (event) => {
    // console.log(orderedItem );
    // console.log(orderedItem.Items);
    // console.log(orderedItem['Number of items'])
    event.preventDefault();
    console.log(orderedItem);
  };

  return (
    <>
      <ItemDetailed>
        <Box className="container">
          <Box className="header" style={{ borderBottom: "1px solid #f0f0f0" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Roboto",
                fontSize: "20px",
              }}
            >
              PRICE DETAILS
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              Price ({totalItem} item)
              <span className="price">₹{totalAmount}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              Delivery Charges may apply<span className="price"></span>
            </Typography>

            <Typography className="totalamount">
              Total Amount
              <span className="price">₹{totalAmount}</span>
            </Typography>
          </Box>

        
          <Button
            type="submit"
            className="placeOrder"
            variant="contained"
            sx={{
              fontFamily: "Roboto",
              color: "#252B42",
              fontSize: "15px",
              fontWeight: "700",
            }}
            onClick={handleSubmit}
          >
            CHECKOUT
          </Button>
        </Box>
      </ItemDetailed>
    </>
  );
}

export default CartPrice;
