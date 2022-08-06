import React from "react";
import { Typography, Box, styled, Button, Dialog } from "@mui/material";
import { useState } from "react";
import PlaceOrder from "../PlaceOrder";

const ItemDetailed = styled(Box)(({ theme }) => ({
  ".header": {
    padding: "15px 20px",
  },
  ".price": {
    float: "right",
  },

  ".totalamount": {
    fontSize: 18,
    fontWeight: 700,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
  ".placeOrder": {
    background: "#f44336",
    width: "100%",
    margin: "5px",
  },
}));

function CartPrice({ countCartItem, totalAmount }) {
  const [order, setOrder] = useState(true);
  return (
    <>
      {/* ...................................................................................... */}
      <Dialog
        fullScreen
        open={!order}
        onClose={() => {
          setOrder(order);
        }}
        //  TransitionComponent={Transition}
      >
        <PlaceOrder order={order} setOrder={setOrder} />
      </Dialog>
      {/* ...................................................................................... */}

      <ItemDetailed>
        <Box>
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
              Price ({countCartItem} item)
              <span className="price">₹{totalAmount}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              Discount<span className="price">-₹{0}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontFamily: "Roboto",
                fontSize: "16px",
              }}
            >
              Delivery Charges<span className="price">₹40</span>
            </Typography>
            <Typography className="totalamount">
              Total Amount
              <span className="price">₹{totalAmount - 0 + 40}</span>
            </Typography>
            <Typography sx={{ fontSize: 16, color: "green" }}>
              You will save ₹{0} on this order
            </Typography>
          </Box>
          <Button
            onClick={() => {
              setOrder(!order);
            }}
            className="placeOrder"
            variant="contained"
            sx={{
              fontFamily: "Roboto",
              color: "#252B42",
              fontSize: "15px",
              fontWeight: "700",
            }}
          >
            Place Order
          </Button>
        </Box>
      </ItemDetailed>
    </>
  );
}

export default CartPrice;
