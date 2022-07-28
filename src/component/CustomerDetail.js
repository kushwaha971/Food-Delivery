import React from "react";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  TextField,
} from "@mui/material";
import { Button, HorizontalDivider } from "@cred/neopop-web/lib/components";
import { useState } from "react";

const DetailStyle = styled(Box)(({ theme }) => ({
  ".detail-container": {
    margin: "20px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "15px",
    },
  },
  ".textField":{
    fontFamily: "Montserrat",
    fontSize: "22px",
    fontWeight: 600,
    color: "#FA4A0C",
  }
}));

function CustomerDetail({ customerdetail, setCustomerdetail }) {
  const [detail, setDetail] = useState({
    name: "",
    mobile: "",
    adhar: "",
    pan: "",
    address: "",
  });
 
  const handleInput = (event) => {
    setDetail((prevState) =>(
      {...prevState,
      [event.target.name]: event.target.value
     }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(detail);
    alert("submitted successfuly")
  };

  return (
    <DetailStyle>
      <div className="detail-container">
     
        <DialogTitle
          sx={{
            fontFamily: "Montserrat",
            fontSize: "22px",
            fontWeight: 600,
            color: "#FA4A0C",
          }}
        >
          Customer Detail
        </DialogTitle>
        <HorizontalDivider color="#8A8A8A" />
        <form 
          onSubmit={handleSubmit}
          >
        <DialogContent>
         
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80%" },
              }}
              noValidate
            >
              <TextField
              required
             
                value={detail.name}
                onChange={handleInput}
                id="name"
                label="Name"
                name="name"
                variant="standard"
              />
              <TextField
                required
                value={detail.mobile}
                onChange={handleInput}
                id="mobile"
                name="mobile"
                label="Mobile Number"
                variant="standard"
              />
              <TextField
                 required
                id="adhar"
                value={detail.adhar}
                onChange={handleInput}
                label="Adhar"
                name="adhar"
                variant="standard"
              />
              <TextField
                required             
                value={detail.pan}
                onChange={handleInput}
                name="pan"
                id="pan"
                label="PanCard Number"
                variant="standard"
              />
              <TextField
                 required               
                value={detail.address}
                onChange={handleInput}
                name="address"
                id="address"
                label="Address"
                variant="standard"
              />
            </Box>
         
        </DialogContent>
        <DialogActions>
          <Button
            textStyle={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "20px",
            }}
            colorConfig={{ backgroundColor: "#FA4A0C" }}
            onClick={() => {
              setCustomerdetail(!customerdetail);
            }}
            type="submit"
          >
            Submit
          </Button>
          <Button
            textStyle={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "20px",
            }}
            colorConfig={{ backgroundColor: "#3D3D3D" }}
            onClick={() => {
              setCustomerdetail(!customerdetail);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
        </form>
      </div>
      
    </DetailStyle>
  );
}

export default CustomerDetail;
