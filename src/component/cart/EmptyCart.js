import { Typography, Box } from "@mui/material";

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Box
      style={{
        width: "80%",
        height: "65vh",
        background: "#fff",
        margin: "80px 140px", 
        marginTop: "100px",
      }}
    >
      <Box style={{ textAlign: "center", paddingTop: 70 }}>
        <img
          src={imgurl}
          style={{
            width: "15%",
          }}
          alt=""
        />
        <Typography>Your cart is empty!</Typography>
        <span>Add items to it now.</span>
      </Box>
    </Box>
  );
};

export default EmptyCart;
