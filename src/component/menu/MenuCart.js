import { AppBar, Box, Button, styled, Toolbar, Typography } from '@mui/material';
import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link} from 'react-router-dom'
import EmptyCart from '../cart/EmptyCart';
import CartItem from './CartItem';
import MenuCartPrice from './MenuCartPrice';


const MenuCartStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    // marginLeft: theme.spacing(7),
    // marginRight: "-25px",
    align: "center",
  },
}));

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

const MenuStyle = styled(Box)(({ theme }) => ({
  marginTop: '100px',
  display: "flex",
  alignItems: "center",
  justifyContent: "coloumn",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

function MenuCart({menuList,setMenuList}) {

   // Increase Item in cart list
   const IncreaseItem = (i) => {
    const info = menuList.map((item, indx) => {
      if (indx === i && item.flag === true) {
        return {
          ...item,
          count: item.count + 1,
        }; 
      }
      console.log(i, item);
      return item;
    });
    setMenuList(info);
  };

   // Remove Item from Cart
   const deleteItem = (i) => {
    const info = menuList.map((item, indx) => {
      if (indx === i && item.flag === true) {
        return {
          ...item,
          flag: false,
          count: 0,
        };
      }
      return item;
    });

    setMenuList(info);
  };

  // Decrease Item in Cart list 
   
  const DecreaseItem = (i) => {
    const info = menuList.map((item, indx) => {
      if (i === indx && item.flag === true && item.count > 1) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });

    setMenuList(info);
  };

  // count no. item in cart
  const countCartItem = menuList.reduce(
    (countCartItem, item) => countCartItem + 1,
    0
  );


   // Total Item
   const totalAmount = menuList.reduce(
    (totalAmount, item) => totalAmount + item.price,
    0 
  );


  return (
    <>
       <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Button variant="primary" kind="flat" size="big" colorMode="light">
             <Link to="/menu">
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

        
      {countCartItem === -1 ? (
        <EmptyCart />
      ) : (
        <>
          <MenuStyle>
            <MenuCartStyle>
              <CartItem
                IncreaseItem={IncreaseItem}
                DecreaseItem={DecreaseItem}
                deleteItem={deleteItem}
                menuList={menuList}
                countCartItem={countCartItem}
              />
            </MenuCartStyle>

            <ItemDetailed>
              <MenuCartPrice
                countCartItem={countCartItem}
                totalAmount={totalAmount}
              />
            </ItemDetailed>
          </MenuStyle>
        </>
      )}
    
    </>
  )
}

export default MenuCart