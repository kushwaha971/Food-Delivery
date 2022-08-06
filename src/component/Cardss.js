import styled from "@emotion/styled";

import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/system";
import React from "react";
import logo from "./images/BellaLogo.png";

const cardNameStyle = {
  fontFamily: "Roboto",
  color: "#252B42",
  fontSize: "20px",
  fontWeight: 600,
};
const cardPriceStyle = {
  fontFamily: "Roboto",
  color: "#252B42",
  fontSize: "20px",
  fontWeight: 500,
};

const CardStyle = styled(Box)(({ theme }) => ({
  ".content": {
    padding: "5px",
  },
  " title": {
    fontFamily: "Roboto",
    color: "#5C5C5C",
  },
}));

function Cardss({ cart, setCart }) {
  const addToCart = (i) => {
    const info = cart.map((item, indx) => {
      if (i === indx) {
        return {
          ...item,
          flag: true,
          count: 1,
        };
      }
      return item;
    });

    setCart(info);
  };

  return (
    <CardStyle>
      <Container className="content" sx={{ marginTop: "380px" }}>
        <Grid
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {cart.map((probs, indx) => (
            <Grid item xs={6} lg={2.8} key={probs.id} spacing={2}>
              <Paper
                sx={{ maxWidth: 300, margin: "10px", borderRadius: "18px" }}
                elevation={24}
              >
                <Card variant="outlined" sx={{ borderRadius: "18px" }}>
                  <CardHeader
                    avatar={<Avatar src={logo} />}
                    sx={{
                      fontFamily: "Roboto",
                      color: "#5C5C5C",
                      padding: "10px",
                    }}
                    action={
                      <IconButton
                        onClick={() => {
                          addToCart(indx);
                        }}
                        sx={{ margin: "4px" }}
                      >
                        {probs.flag ? (
                          <>
                            <Tooltip title="Added in Cart">
                              <CheckIcon style={{ fill: "orange" }} />
                            </Tooltip>
                          </>
                        ) : (
                          <>
                            <Tooltip title="Add to Card">
                              <AddShoppingCartIcon style={{ fill: "green" }} />
                            </Tooltip>
                          </>
                        )}
                      </IconButton>
                    }
                  />

                  <CardMedia
                    component="img"
                    image={probs.imageSrc}
                    sx={{ width: "300px", height: "130px" }}
                  />

                  <CardHeader
                    avatar={
                      <Typography variant="h3 " sx={cardNameStyle}>
                        {probs.itemName}
                      </Typography>
                    }
                    action={
                      <Typography
                        variant="subtitle2"
                        sx={cardPriceStyle}
                        fontWeight="500"
                      >
                        ₹{probs.price}
                      </Typography>
                    }
                  />
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </CardStyle>
  );
}

export default Cardss;
