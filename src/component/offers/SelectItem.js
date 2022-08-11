import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function SelectItem(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div style={{ width: "100%" }}>
      <label
        htmlFor={name}
        style={{
          fontFamily: "Montserrat",
          fontSize: "15px",
          fontStyle: "captlize",
          textTransform: "capitalize",
          marginBottom: "5px",
        }}
      >
        {label}
      </label>
      <br />
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        style={{ width: "100%" }}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default SelectItem;
