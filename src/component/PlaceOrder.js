import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Card,
  CardMedia,
  FormControl,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import cardImage from "./images/card_img.png";
import logo from "./images/BellaLogo.png";

const NavbarStyle = styled(Box)(({ theme }) => ({
  ".links": {
    marginLeft: theme.spacing(10),
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#252B42",
    letterSpacing: "0.2px",
    fontStyle: "normal",
    textDecoration: "none",
    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: theme.spacing(5),
    },
  },
}));

const OrderStyle = styled(Box)(({ theme }) => ({
  ".container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "25px",
    },
  },
  ".inputBox": {
    margin: "5px",
  },
  ".flex": {
    display: "flex",
    gap: "15px",
  },
  ".placeOrder": {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
}));
function PlaceOrder({order,setOrder}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <NavbarStyle>
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>
          </Toolbar>
        </AppBar>
      </NavbarStyle>

      <OrderStyle>
        <Box className="container">
          <Paper elevation={0}>
            <FormControl className="inputBox" sx={{ margin: "25px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Billing Address
              </Typography>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className="inputBox"
              />
              <div className="flex">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="inputBox"
                />
                <TextField
                  id="outlined-basic"
                  label="10-digit mobile number"
                  variant="outlined"
                  className="inputBox"
                />
              </div>
              <div className="flex">
                <TextField
                  id="outlined-basic"
                  label="Pincode"
                  variant="outlined"
                  className="inputBox"
                />
                <TextField
                  id="outlined-basic"
                  label="Locality"
                  variant="outlined"
                  className="inputBox"
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Address (Area and Street)"
                variant="outlined"
                className="inputBox"
              />

              <div className="flex">
                <TextField
                  id="outlined-basic"
                  label="City/District/Town"
                  variant="outlined"
                  className="inputBox"
                />
                {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={states}
      sx={{ width: 300 }}
      label="Select State" />
    /> */}
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  className="inputBox"
                />
              </div>
              {isMatch ? (
                <></>
              ) : (
                <>
                  <Button
                    className="placeOrder"
                    variant="contained"
                    color="success"
                    sx={{
                      background: "#558b2f",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Proceed to checkOut
                  </Button>
                </>
              )}
            </FormControl>
          </Paper>
          <Paper elevation={0}>
            <FormControl sx={{ margin: "25px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Payment
              </Typography>
              <Card className="inputBox">
                <CardMedia component="img" image={cardImage} />
              </Card>
              <TextField
                id="outlined-basic"
                label="Name on Card"
                variant="outlined"
                className="inputBox"
                disabled
              />
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                className="inputBox"
                disabled
              />
              <TextField
                id="outlined-basic"
                label="Exp Monthr"
                variant="outlined"
                className="inputBox"
                disabled
              />

              <div className="flex">
                <TextField
                  id="outlined-basic"
                  label="Exp Year"
                  variant="outlined"
                  className="inputBox"
                  disabled
                />
                <TextField
                  id="outlined-basic"
                  label="CVV"
                  variant="outlined"
                  className="inputBox"
                  disabled
                />
              </div>
              {isMatch ? (
                <></>
              ) : (
                <>
                  <Button
                  onClick={() =>setOrder(!order)}
                    className="placeOrder"
                    variant="contained"
                    sx={{
                      background: "#dd2c00",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </FormControl>
          </Paper>

          {isMatch ? (
            <>
              <Button
                className="placeOrder"
                variant="contained"
                sx={{
                  background: "#558b2f",
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Proceed to checkOut
              </Button>
              <Button
                onClick={() =>setOrder(!order)}
                className="placeOrder"
                variant="contained"
                sx={{
                  background: "#dd2c00",
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <></>
          )}
        </Box>
      </OrderStyle>
    </>
  );
}

export default PlaceOrder;
