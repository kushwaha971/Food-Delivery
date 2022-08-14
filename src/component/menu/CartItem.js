import { Box, Button, ButtonGroup, Paper, styled, Typography } from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CartItemStyle = styled(Box)(({ theme }) => ({

    '.itemStyle':{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '50px',
        width: '300px',
        border: '1px solid black'

    },
    '.btnGroup':{
        margin: '15px',
        // padding: '-5px',
        //  width: '10px'
    },
    '.nameStyle':{
        fontSize: "12px",
        fontFamily: "Montserrat",
        fontWeight: "600",
        color: '#424242',
        width: '150px',
    },

}));

function CartItem({ DecreaseItem, IncreaseItem, deleteItem, menuList,countCartItem }) {
  return (
    <CartItemStyle>
      {menuList.map((item, index) => (
        <Box>
          {item.flag && (
            <>
              <Box
                key={index}
                className="itemStyle"
               
              >
                <Typography variant = 'h6' className="nameStyle">{item.name}</Typography>
                <Typography variant="h6">₹  {item.price  }</Typography>   
                <ButtonGroup className="btnGroup">
                    <Button  color="inherit"  onClick={() => {IncreaseItem(index); }}>
                    <AddBoxIcon />
                    </Button>
                    <Button>{item.count}</Button>
                    <Button color = "inherit" onClick = {() => {DecreaseItem(index)}}>
                    <IndeterminateCheckBoxIcon />
                    </Button>
                </ButtonGroup>

                <Button onClick={deleteItem}>Remove</Button>

               
              </Box>
            </>
          )}
        </Box>
      ))}
    </CartItemStyle>
  );
}

export default CartItem;
