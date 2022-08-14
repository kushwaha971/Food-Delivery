import { Box, Fab, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";


const spanStyle = {
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  color: "#37474f",
}

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

function Menu({menuList,setMenuList}) {

  const addToCart = (i) => {
    const info = menuList.map((item, indx) => {
      if (i === indx) {
        return { 
          ...item,
          flag: true,
          count: 1,
        }; 
      }
      return item;
    });

    setMenuList(info); 
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

              <Typography variant="h5" className="recipeHeading">
                Burger:
              </Typography>
              <div key={menuList[0].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[0].name} type="checkbox" onClick={() =>{addToCart(0)}}/>
                <span style={spanStyle}> {`${menuList[0].name}- ${menuList[0].price}`}  </span>
              </div>

              <div key={menuList[1].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[1].name} type="checkbox" onClick={() =>{addToCart(1)}}/>
                <span style={spanStyle}> {`${menuList[1].name}- ${menuList[1].price}`}  </span>
              </div>

              <div key={menuList[2].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[2].name} type="checkbox" onClick={() =>{addToCart(2)}}/>
                <span style={spanStyle}> {`${menuList[2].name}- ${menuList[2].price}`}  </span>
              </div>

              <div key={menuList[3].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[3].name} type="checkbox" onClick={() =>{addToCart(3)}}/>
                <span style={spanStyle}> {`${menuList[3].name}- ${menuList[3].price}`}  </span>
              </div>

              <div key={menuList[4].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[4].name} type="checkbox" onClick={() =>{addToCart(4)}}/>
                <span style={spanStyle}> {`${menuList[4].name}- ${menuList[4].price}`}  </span>
              </div>
            
            </Box>

            <Box id="fenchfries" className="container">
              <Typography variant="h5" className="recipeHeading">
                French Fries:
              </Typography>
              <div key={menuList[5].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[5].name} type="checkbox" onClick={() =>{addToCart(5)}}/>
                <span style={spanStyle}> {`${menuList[5].name}- ${menuList[6].price}`}  </span>
              </div>

              <div key={menuList[6].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[6].name} type="checkbox" onClick={() =>{addToCart(6)}}/>
                <span style={spanStyle}> {`${menuList[6].name}- ${menuList[6].price}`}  </span>
              </div>

              <div key={menuList[7].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[7].name} type="checkbox" onClick={() =>{addToCart(7)}}/>
                <span style={spanStyle}> {`${menuList[7].name}- ${menuList[7].price}`}  </span>
              </div>

              <div key={menuList[8].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[8].name} type="checkbox" onClick={() =>{addToCart(8)}}/>
                <span style={spanStyle}> {`${menuList[8].name}- ${menuList[8].price}`}  </span>
              </div>
            </Box>

            <Box id="sandwich" className="container">
              <Typography variant="h5" className="recipeHeading">
                Sandwich:
              </Typography>
              <div key={menuList[9].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[9].name} type="checkbox" onClick={() =>{addToCart(9)}}/>
                <span style={spanStyle}> {`${menuList[9].name}- ${menuList[9].price}`}  </span>
              </div>

              <div key={menuList[10].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[10].name} type="checkbox" onClick={() =>{addToCart(10)}}/>
                <span style={spanStyle}> {`${menuList[10].name}- ${menuList[10].price}`}  </span>
              </div>

              <div key={menuList[11].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[11].name} type="checkbox" onClick={() =>{addToCart(11)}}/>
                <span style={spanStyle}> {`${menuList[11].name}- ${menuList[11].price}`}  </span>
              </div>

              <div key={menuList[12].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[12].name} type="checkbox" onClick={() =>{addToCart(12)}}/>
                <span style={spanStyle}> {`${menuList[12].name}- ${menuList[12].price}`}  </span>
              </div>

              <div key={menuList[13].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[13].name} type="checkbox" onClick={() =>{addToCart(13)}}/>
                <span style={spanStyle}> {`${menuList[13].name}- ${menuList[13].price}`}  </span>
              </div>

              <div key={menuList[14].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[14].name} type="checkbox" onClick={() =>{addToCart(14)}}/>
                <span style={spanStyle}> {`${menuList[14].name}- ${menuList[14].price}`}  </span>
              </div>
            </Box>

            <Box id="maggie" className="container">
              <Typography variant="h5" className="recipeHeading">
                Maggie:
              </Typography>
              <div key={menuList[15].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[15].name} type="checkbox" onClick={() =>{addToCart(15)}}/>
                <span style={spanStyle}> {`${menuList[15].name}- ${menuList[15].price}`}  </span>
              </div>

              <div key={menuList[16].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[16].name} type="checkbox" onClick={() =>{addToCart(16)}}/>
                <span style={spanStyle}> {`${menuList[16].name}- ${menuList[16].price}`}  </span>
              </div>

              <div key={menuList[17].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[17].name} type="checkbox" onClick={() =>{addToCart(17)}}/>
                <span style={spanStyle}> {`${menuList[17].name}- ${menuList[17].price}`}  </span>
              </div>

              <div key={menuList[18].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[18].name} type="checkbox" onClick={() =>{addToCart(18)}}/>
                <span style={spanStyle}> {`${menuList[18].name}- ${menuList[18].price}`}  </span>
              </div>

              <div key={menuList[19].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[19].name} type="checkbox" onClick={() =>{addToCart(19)}}/>
                <span style={spanStyle}> {`${menuList[19].name}- ${menuList[19].price}`}  </span>
              </div>

              <div key={menuList[20].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[20].name} type="checkbox" onClick={() =>{addToCart(20)}}/>
                <span style={spanStyle}> {`${menuList[20].name}- ${menuList[20].price}`}  </span>
              </div>

              <div key={menuList[21].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[21].name} type="checkbox" onClick={() =>{addToCart(21)}}/>
                <span style={spanStyle}> {`${menuList[21].name}- ${menuList[21].price}`}  </span>
              </div>
            </Box>

            <Box id="potatoTwister" className="container">
              <Typography variant="h5" className="recipeHeading">
                Potato Twister:
              </Typography>
              <div key={menuList[22].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[22].name} type="checkbox" onClick={() =>{addToCart(22)}}/>
                <span style={spanStyle}> {`${menuList[22].name}- ${menuList[22].price}`}  </span>
              </div>

              <div key={menuList[23].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[23].name} type="checkbox" onClick={() =>{addToCart(23)}}/>
                <span style={spanStyle}> {`${menuList[23].name}- ${menuList[23].price}`}  </span>
              </div>

              <div key={menuList[24].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[24].name} type="checkbox" onClick={() =>{addToCart(24)}}/>
                <span style={spanStyle}> {`${menuList[24].name}- ${menuList[24].price}`}  </span>
              </div>

              <div key={menuList[25].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[25].name} type="checkbox" onClick={() =>{addToCart(25)}}/>
                <span style={spanStyle}> {`${menuList[25].name}- ${menuList[25].price}`}  </span>
              </div>
            </Box>

            <Box id="coldCoffee" className="container">
              <Typography variant="h5" className="recipeHeading">
                Cold Coffee:
              </Typography>
              
              <div key={menuList[26].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[26].name} type="checkbox" onClick={() =>{addToCart(26)}}/>
                <span style={spanStyle}> {`${menuList[26].name}- ${menuList[26].price}`}  </span>
              </div>

              <div key={menuList[27].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[27].name} type="checkbox" onClick={() =>{addToCart(27)}}/>
                <span style={spanStyle}> {`${menuList[27].name}- ${menuList[27].price}`}  </span>
              </div>

              <div key={menuList[28].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[28].name} type="checkbox" onClick={() =>{addToCart(28)}}/>
                <span style={spanStyle}> {`${menuList[28].name}- ${menuList[28].price}`}  </span>
              </div>

              <div key={menuList[29].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[29].name} type="checkbox" onClick={() =>{addToCart(29)}}/>
                <span style={spanStyle}> {`${menuList[29].name}- ${menuList[29].price}`}  </span>
              </div>

              <div key={menuList[30].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[30].name} type="checkbox" onClick={() =>{addToCart(30)}}/>
                <span style={spanStyle}> {`${menuList[30].name}- ${menuList[30].price}`}  </span>
              </div>
            </Box>

            <Box id="hotBeverages" className="container">
              <Typography variant="h5" className="recipeHeading">
                Hot Beverages:
              </Typography>

              <div key={menuList[31].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[31].name} type="checkbox" onClick={() =>{addToCart(31)}}/>
                <span style={spanStyle}> {`${menuList[31].name}- ${menuList[31].price}`}  </span>
              </div>
              <div key={menuList[32].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[32].name} type="checkbox" onClick={() =>{addToCart(32)}}/>
                <span style={spanStyle}> {`${menuList[32].name}- ${menuList[32].price}`}  </span>
              </div>
              <div key={menuList[33].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[33].name} type="checkbox" onClick={() =>{addToCart(33)}}/>
                <span style={spanStyle}> {`${menuList[33].name}- ${menuList[33].price}`}  </span>
              </div>
            </Box>

            <Box id="combo" className="container">
              <Typography variant="h5" className="recipeHeading">
                Combo:
              </Typography>
              <div key={menuList[34].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[34].name} type="checkbox" onClick={() =>{addToCart(34)}}/>
                <span style={spanStyle}> {`${menuList[34].name}- ${menuList[34].price}`}  </span>
              </div>

              <div key={menuList[35].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[35].name} type="checkbox" onClick={() =>{addToCart(35)}}/>
                <span style={spanStyle}> {`${menuList[35].name}- ${menuList[35].price}`}  </span>
              </div>

              <div key={menuList[36].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[36].name} type="checkbox" onClick={() =>{addToCart(36)}}/>
                <span style={spanStyle}> {`${menuList[36].name}- ${menuList[36].price}`}  </span>
              </div>

              <div key={menuList[37].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[37].name} type="checkbox" onClick={() =>{addToCart(37)}}/>
                <span style={spanStyle}> {`${menuList[37].name}- ${menuList[37].price}`}  </span>
              </div>

              <div key={menuList[38].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[38].name} type="checkbox" onClick={() =>{addToCart(38)}}/>
                <span style={spanStyle}> {`${menuList[38].name}- ${menuList[38].price}`}  </span>
              </div>

              <div key={menuList[39].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[39].name} type="checkbox" onClick={() =>{addToCart(39)}}/>
                <span style={spanStyle}> {`${menuList[39].name}- ${menuList[39].price}`}  </span>
              </div>

              <div key={menuList[40].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[40].name} type="checkbox" onClick={() =>{addToCart(40)}}/>
                <span style={spanStyle}> {`${menuList[40].name}- ${menuList[40].price}`}  </span>
              </div>

              <div key={menuList[41].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[41].name} type="checkbox" onClick={() =>{addToCart(41)}}/>
                <span style={spanStyle}> {`${menuList[41].name}- ${menuList[41].price}`}  </span>
              </div>

              <div key={menuList[42].id} style={{ margin: "5px", marginLeft: "15px" }}>
                <input value={menuList[42].name} type="checkbox" onClick={() =>{addToCart(42)}}/>
                <span style={spanStyle}> {`${menuList[42].name}- ${menuList[42].price}`}  </span>
              </div>
              
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
          >
            <Link
              to="/OrderPlaced"
              style={{ textDecoration: "none", color: "#ffff" }}
            >
              Place Order
            </Link>
          </Fab>
        </Box>
      </MenuStyle>
    </>
  );
}

export default Menu;
