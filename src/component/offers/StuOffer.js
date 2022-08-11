import React from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControal from "./FormControal";

const OffereStyle = styled(Box)(({ theme }) => ({
  padding: "10px",
  margin: "10px",
}));

function StuOffer() {
  const combolist = [
    { key: "Select Your Combo", value: "" },
    {
      key: "Classic Veg Burger + French Fries + Classic Cold Coffee",
      value: "Classic Veg Burger + French Fries + Classic Cold Coffee",
    },
    {
      key: "Classic Veg Burger + French Fries + Coke",
      value: "Classic Veg Burger + French Fries + Coke",
    },
    { key: "Maggie + Cold Coffee", value: "Maggie + Cold Coffee" },
    {
      key: "Maggie + Coke + French Fries",
      value: "Maggie + Coke + French Fries",
    },
    {
      key: "Potato Twister + Cold Coffee + Maggie",
      value: "Potato Twister + Cold Coffee + Maggie",
    },
    {
      key: "Potato Twister + Coke + Maggie",
      value: "Potato Twister + Coke + Maggie",
    },
    {
      key: "Grilled Veg Sandwich + French Fries + Coke",
      value: "Grilled Veg Sandwich + French Fries + Coke",
    },
    {
      key: "Grilled Veg Sandwich + French Fries + Cold Coffee",
      value: "Grilled Veg Sandwich + French Fries + Cold Coffee",
    },
    {
      key: "Grilled Veg Sandwich + Tea/Coffee",
      value: "Grilled Veg Sandwich + Tea/Coffee",
    },
  ];

  const validate = Yup.object({
    name: Yup.string().required("Required!"),
    mobile: Yup.string().required("Required!"),
    college: Yup.string().required("Required!"),
    combo: Yup.string().required("Required!"),
  });

  return (
    <OffereStyle>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          college: "",
          combo: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify("Your Order Placed Successfully"));
          }, 1000);
          console.log(values);
          resetForm({ values: "" });
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <>
            <DialogTitle>
              <Typography
                variant="h3"
                sx={{
                    fontFamily: "Montserrat",
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "#FA4A0C",
                }}
              >
                Free Combo Offer
              </Typography>
              <Typography sx={{
                
                fontFamily: "Robboto",
                fontSize: "20px",
                fontWeight: 700,
                color: "#5C5C5C",
                marginTop: '25px',
                marginBottom: '-10px'
              }}> for College/School Students only-</Typography>
             
            </DialogTitle>
            <Form>
              <DialogContent>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 3, ml: -0.5, width: "100%" },
                  }}
                  noValidate
                >
                  <FormControal
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                  />
                  <FormControal
                    control="input"
                    type="text"
                    label="Mobile Number"
                    name="mobile"
                  />
                  <FormControal
                    control="input"
                    type="text"
                    label="School/College Name"
                    name="college"
                  />

                  <FormControal
                    control="select"
                    label="Select your combo"
                    name="combo"
                    options={combolist}
                  />
                </Box>
              </DialogContent>
              <DialogActions style={{ marginTop: "10px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "10px",
                    backgroundColor: "#4CAF50",
                  }}
                >
                  Place Order
                </Button>
                <Button
                  variant="contained"
                  type="reset"
                  value="Reset"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "10px",
                    backgroundColor: "red",
                  }}
                >
                  Reset
                </Button>
              </DialogActions>
            </Form>
          </>
        )}
      </Formik>
    </OffereStyle>
  );
}

export default StuOffer;
