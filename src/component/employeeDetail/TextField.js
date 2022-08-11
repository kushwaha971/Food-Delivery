import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
     
      {field.name === "address" ? (<>
        <label
        htmlFor={field.name}
        style={{ fontFamily: "Montserrat" }}
      >
        {label}:
      </label><textarea
        style={{ height: "60px", width: "100%" }}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        rows={5}
        cols={5}
      /></> 
      ):(
       <> <label
        htmlFor={field.name}
        style={{ fontFamily: "Montserrat" }}
      >
        {label}:
      </label> <input
        style={{ height: "25px", width: "100%" }}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      /></>)}
   

      <ErrorMessage
        component="div"
        name={field.name}
        style={{
          position: "absolute",
          color: "red",
          fontSize: ".6rem",
        }} 
      />
    </div>
  );
}

export default TextField;
