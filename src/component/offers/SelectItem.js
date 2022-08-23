import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function SelectItem(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          fontFamily: "Montserrat",
          fontSize: "15px",
          fontStyle: "captlize",
          textTransform: "capitalize",
          marginLeft: "2px",
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
        style={{
          width: "102%",
          height: "27px",
          margin: " 0 auto",
          border: "1.8px solid #9e9e9e",
          borderRadius: "5px",
        }}
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
