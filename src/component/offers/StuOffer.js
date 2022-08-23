import React from "react";
import {
  AppBar,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import swal from "sweetalert";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControal from "./FormControal";
import logo from "./../images/BellaLogo.png";
import axios from "axios";

const OffereStyle = styled(Box)(({ theme }) => ({
  margin: "10px",
  padding: "5px",
  ".StuOffer": {
    direction: "flex",
    flexDirection: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginLeft: "500px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "1px",
    },
  },
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
      <Box className="StuOffer">
        <AppBar color="inherit" elevation={0} sx={{ padding: "10px" }}>
          <Toolbar>
            <Typography variant="title">
              <img src={logo} width={182} height={64} alt="" />
            </Typography>
          </Toolbar>
        </AppBar>
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            college: "",
            combo: "",
          }}
          onSubmit={async (payload, { resetForm }) => {
            let name = payload.name;
            let mobile = payload.mobile;
            let college = payload.college;
            let combo = payload.combo;
            let timeStamp = new Date();
            let date = timeStamp?.getDate();

            const WEBAPP_URL =
              process.env.NODE_ENV === "development" ||
              window.location.href?.includes("staging")
                ? `https://script.google.com/macros/s/AKfycbwxSqJ-RZguFoEnG2WOsYct19f_eUWMnKlNKSoJnVQe1m7ziqA0IBOCV3UR_Mw-y7Ao/exec?Name=${name}&Institute=${college}&Mobile=${mobile}&Combo=${combo}&Time=${timeStamp}&Date=${date}`
                : `https://script.google.com/macros/s/AKfycbwxSqJ-RZguFoEnG2WOsYct19f_eUWMnKlNKSoJnVQe1m7ziqA0IBOCV3UR_Mw-y7Ao/exec?Name=${name}&Institute=${college}&Mobile=${mobile}&Combo=${combo}&Time=${timeStamp}&Date=${date}`;

            await axios
              .post(WEBAPP_URL)
              .then((res) => {
                setTimeout(() => {
                  swal("Your form is submitted!", "", "success");
                }, 100);
                console.log(payload);
                resetForm({ payload: "" });
              })
              .catch((error) => {
                console.log("error", error);
              });
          }}
          validationSchema={validate}
        >
          {(formik) => (
            <>
              <DialogTitle>
                <Typography
                  variant="h4"
                  sx={{
                    marginTop: "60px",
                    fontFamily: "Montserrat",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#FA4A0C",
                  }}
                >
                  Free Combo Offer
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Robboto",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#5C5C5C",
                    marginTop: "8px",
                  }}
                >
                  College/School Students only-
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginLeft: "3px",
                    color: "#3e2723",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 700,
                    marginTop: "10px",
                    marginBottom: "-37px",
                  }}
                >
                  *Only for first 100 Students who register.
                </Typography>
              </DialogTitle>
              <Form>
                <DialogContent>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 2, ml: -0.5, width: "100%" },
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
                  <Typography
                    variant="subtitle2"
                    sx={{
                      margin: "-5px",
                      marginLeft: "5px",
                      color: "#757575",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                    }}
                  >
                    *One user can register only once else duplicate one will be
                    considered cancelled
                  </Typography>
                </DialogContent>
                <DialogActions>
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
                    Register Now
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
      </Box>
    </OffereStyle>
  );
}

export default StuOffer;
