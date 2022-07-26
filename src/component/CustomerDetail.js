import React from "react";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import {
  Button,
  InputField,
  HorizontalDivider,
} from "@cred/neopop-web/lib/components";
import { useState } from "react";

const DetailStyle = styled(Box)(({ theme }) => ({
  ".detail-container": {
    margin: "20px",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "15px",
    },
  },
}));

function CustomerDetail({ customerdetail, setCustomerdetail }) {

  const [detail,setDetail] = useState({
    name: " ",
    mobile: " ",
    adhar: " ",
    pan: " ",
    address: " ",
  });

    const [records,setRecords] = useState([]);
  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setDetail({ ...detail, [name] : value});
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      const newRecord = {...detail, id: new Date().getTime().toString }
      setRecords([...records, newRecord])
      console.log(records)
       setDetail({name: "",mobile:"",adhar: "",pan:"",address:""})

  }





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
        <DialogContent>
        <form action="" >
          <div style={{ margin: "5px" }}>
            <InputField
              autoFocus
              colorConfig={{
                labelColor: "#0d0d0d",
                textColor: "#000000",
              }}
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "18px",
              }}
              type="text"
              label="Name"
              placeholder="Enter your name"
              value={detail.name}
               onChange={handleInput}
              id="name"
              name="name"
            />
            <HorizontalDivider
              color="#8A8A8A"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <div style={{ margin: "5px" }}>
            <InputField
              autoFocus
              colorConfig={{
                labelColor: "#0d0d0d",
                textColor: "#000000",
              }}
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "18px",
              }}
              type="text"
              label="Mobile Number"
              placeholder="Enter mobile name"
              value={detail.mobile}
              onChange={handleInput}
              id="number"
              name="mobile"
            />
            <HorizontalDivider
              color="#8A8A8A"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <div style={{ margin: "5px" }}>
            <InputField
              autoFocus
              colorConfig={{
                labelColor: "#0d0d0d",
                textColor: "#000000",
              }}
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "18px",
              }}
              type="text"
              label="Adhar Number"
              placeholder="Enter adhar number"
               value={detail.adhar}
              onChange={handleInput}
              id="adhar"
              name="adhar"
            />
            <HorizontalDivider
              color="#8A8A8A"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <div style={{ margin: "5px" }}>
            <InputField
              autoFocus
              colorConfig={{
                labelColor: "#0d0d0d",
                textColor: "#252B42",
              }}
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "20px",
              }}
              type="text"
              label="PAN Card Number"
              placeholder="Enter PAN Card number"
              value={detail.pan}
              onChange={handleInput}
              id="pancard"
              name="pan"
            />
            <HorizontalDivider
              color="#8A8A8A"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <div style={{ margin: "5px" }}>
            <InputField
              autoFocus
              colorConfig={{
                labelColor: "#0d0d0d",
                textColor: "#000000",
              }}
              style={{
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "18px",
              }}
              type="text"
              label=" Address"
              placeholder="Enter Your Address"
              value={detail.address}
              onChange={handleInput}
              id="address"
              name="address"
            />
            <HorizontalDivider
              color="#8A8A8A"
              style={{ marginBottom: "20px" }}
            />
          </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            textStyle={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "20px",
            }}
            colorConfig={{ backgroundColor: "#FA4A0C" }}
             onClick={handleSubmit}
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
      </div>
    </DetailStyle>
  );
}

export default CustomerDetail;
