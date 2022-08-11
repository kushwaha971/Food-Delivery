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
          marginBottom: "5px",
          fontSize: "15px",
          borderRadius: "50%",
        }}
      >
        {name}
      </label>
      <br />
      <Field
        id={name}
        name={name}
        {...rest}
        style={{ width: "100%", height: "25px" }}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default StuOfferTextField;
