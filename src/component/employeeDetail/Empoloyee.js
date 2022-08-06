import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextField from "./TextField";

const EmployeeStyle = styled(Box)(({ theme }) => ({
  padding: "20px",
  margin: "5px",
}));

function Empoloyee({ employeeDetail, setEmployeeDetail }) {
  const validate = Yup.object({
    name: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    adhar: Yup.string().required("Required"),
    pan: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });
  return (
    <EmployeeStyle>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          adhar: "",
          pan: "",
          address: "",
        }}
        validationSchema={validate}
        onSubmit={async (payload) => {
          let name = payload.name;
          let mobile = payload.mobile;
          let adhar = payload.adhar;
          let pan = payload.pan;
          let address = payload.address;
          console.log(name);
          console.log(mobile);
          console.log(adhar);
          console.log(address);

          let timeStamp = new Date();
          let date = timeStamp?.getDate();
          let utm_info = localStorage?.getItem("urlParams") ?? "organic";

          const WEBAPP_URL =
            process.env.NODE_ENV === "development" ||
            window.location.href?.includes("staging")
              ? `https://script.google.com/macros/s/AKfycbwoiTuHtPPM50moZFsFU_UIBUDh7Q5xFxVNW3dP0P2SCCrC90mmxmJyWCGcAWsbaHq3/exec?Name=${name}&Mobile=${mobile}&Aadhar=${adhar}&PAN=${pan}&Address=${address}&Date=${date}`
              : `https://script.google.com/macros/s/AKfycbw01j6TmHQH9UvLouuzpLv-l2J-yESH9-QENpN1leVQ-HPnACmy-h5T7E6n4QL84GqnRA/exec?Date=${date}&UTM=${utm_info}&Action=${payload?.action}&Timestamp=${timeStamp}`;

          await axios
            .post(WEBAPP_URL)
            .then((res) => {
              if (res.status === 200) {
                setEmployeeDetail(!employeeDetail);
                alert("Form Subbmitted Successfully");
              }
              console.log("res", res);
            })
            .catch((error) => {
              console.log("error", error);
            });
        }}
      >
        {(formik) => (
          <>
            <DialogTitle
              sx={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 700,
                color: "#5C5C5C",
              }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: 700, color: "#FA4A0C" }}
              >
                Pluto
              </span>
              <br /> Employee Registration
            </DialogTitle>
            <Form>
              <DialogContent>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 2, width: "100%" },
                  }}
                  noValidate
                >
                  <TextField label="Name" name="name" type="text" />
                  <TextField label="Mobile Number" name="mobile" type="text" />
                  <TextField label="Adhar Number" name="adhar" type="text" />
                  <TextField label="PAN Number" name="pan" type="text" />
                  <TextField label="Address" name="address" type="text" />
                </Box>
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
                  Submit
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "10px",
                    backgroundColor: "red",
                  }}
                  onClick={() => {
                    setEmployeeDetail(!employeeDetail);
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          </>
        )}
      </Formik>
    </EmployeeStyle>
  );
}

export default Empoloyee;
