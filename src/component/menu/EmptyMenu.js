import { Typography, Box, Button, styled } from "@mui/material";

const EmptyList = styled(Box)(({ theme }) => ({
  width: "20%",
  height: "80vh",
  background: "#fff",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
 
}));

const EmptyMenu = ({ open, setOpen }) => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <EmptyList>
      <Box>
        <Box style={{ textAlign: "center", paddingTop: 80 }}>
          <img
            src={imgurl}
            style={{
              width: "100%",
            }}
            alt=""
          />
          <Typography
            sx={{ fontSize: "12px", fontFamily: "Poppins", fontWeight: 600 }}
          >
            Your item list is empty!
          </Typography>
          
          <Button
            color="inherit"
            variant="contained"
            // className="continueshoppinStyle"
            sx={{
              margin: "auto",
              marginTop: "20px",
              fontSize: "11px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              background: '#e65100'
            }}
            onClick={() => setOpen(!open)}
          >
            Buy Now
          </Button>
         
        </Box>
      </Box>
    </EmptyList>
  );
};

export default EmptyMenu;
