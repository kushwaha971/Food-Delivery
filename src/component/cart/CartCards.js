import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Paper,
  Box,
  styled,
  CardHeader,
  Button,
  Tooltip,
  ButtonGroup,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CardStyle = styled(Box)(({ theme }) => ({
  ".totalItem": {
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
  },

  ".remove": {
    padding: "2px 70px",
    width: "0px",
    borderRadius: "10px",
    color: "#FA4A0C",
    marginLeft: "25px",
    [theme.breakpoints.down("md")]: {
      padding: "2px 55px",
      marginLeft: "50px",
    },
  },
}));

const IncDcrStyle = styled(Box)(({ theme }) => ({
  marginLeft: "7px",
  ".incrdcr": { 
    borderRadius: "10px",
    color: "#FA4A0C",
  },
}));

function CartCards({ IncreaseItem, DecreaseItem, deleteItem, cart }) {
  return (
    <CardStyle>
      <Paper sx={{ marginTop: "200px", marginLeft: "20px" }} elevation={0}>
        <Grid
          container
          rowSpacing={6}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          direction="row"
          alignItems="center" 
          justifyContent="center"
          elevation={20}
        >
          {cart.map((item, indx) => (
            <Box>
              {item.flag && (
                <>
                  <Grid item xs={9} lg={8} rowSpacing={2} key={item.id}>
                    <Paper
                      sx={{ margin: "10px", borderRadius: "20px" }}
                      elevation={24}
                    >
                      <Card
                        variant="outlined"
                        sx={{ maxWidth: 340, borderRadius: "20px" }}
                      >
                        <CardHeader
                          style={{
                            fontFamily: "Roboto",
                            color: "#252B42",
                            fontSize: "20px",
                            fontWeight: 600,
                          }}
                          avatar={item.itemName}
                          sx={{
                            fontFamily: "Roboto",
                            color: "#5C5C5C",
                          }}
                          action={
                            <Typography variant="h6">₹ {item.price}</Typography>
                          }
                        />

                        <CardMedia
                          component="img"
                          image={item.imageSrc}
                          sx={{ width: "250px", height: "130px" }}
                        />

                        <CardContent sx={{ margin: "-10px" }}>
                          <IncDcrStyle>
                            <ButtonGroup
                              sx={{
                                marginTop: "2px",
                                marginLeft: "10px",
                              }}
                            >
                              <Button
                                className="incrdcr"
                                color="inherit"
                                onClick={() => {
                                  IncreaseItem(indx);
                                }}
                              >
                                <AddBoxIcon />
                              </Button>
                              <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                  fontFamily: "Roboto",
                                  color: "#252B42",
                                  fontSize: "10px",
                                  fontWeight: 500,
                                }}
                                className="incrdcr"
                              >
                                {item.count}
                              </Button>
                              <Button
                                className="incrdcr"
                                color="inherit"
                                onClick={() => {
                                  DecreaseItem(indx);
                                }}
                              >
                                <IndeterminateCheckBoxIcon />
                              </Button>
                            </ButtonGroup>
                          </IncDcrStyle>

                          <Button
                            color="inherit"
                            className="totalItem"
                            sx={{
                              fontFamily: "Roboto",
                              color: "#252B42",
                              fontSize: "15px",
                              fontWeight: "550",
                              marginLeft: "7px",
                            }}
                          >
                            Item Subtotal: ₹
                            {Number.isInteger(item.count * item.price)
                              ? item.count * item.price
                              : (item.count * item.price).toFixed(2)}
                          </Button>

                          <Tooltip title="Remove from Cart">
                            <Button
                              variant="outlined"
                              onClick={() => {
                                deleteItem(indx);
                              }}
                              sx={{
                                borderColor: "black",
                                fontFamily: "Roboto",
                                color: "#252B42",
                                fontSize: "15px",
                                fontWeight: "700",
                              }}
                              className="remove"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </CardContent>
                      </Card>
                    </Paper>
                  </Grid>
                </>
              )}
            </Box>
          ))}
        </Grid>
      </Paper>
    </CardStyle>
  );
}

export default CartCards;
