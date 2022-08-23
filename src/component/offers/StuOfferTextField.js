import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function StuOfferTextField(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          fontFamily: "Montserrat",
          fontStyle: "captlize",
          textTransform: "capitalize",
          fontSize: "15px",
          marginLeft: "2px",
        }}
      >
        {label}
      </label>
      <br />
      <Field
        id={name}
        name={name}
        {...rest}
        style={{
          width: "100%",
          height: "25px",
          margin: " 0 auto",
          border: "1.8px solid #9e9e9e",
          borderRadius: "5px",
        }}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default StuOfferTextField;
