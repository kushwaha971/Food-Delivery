import React from "react";

function FrenchFriesList({ handleCheck }) {
  const frenchFriesList = [
    "Classic French Fries",
    "Peri-Peri French Fries",
    "Cheese French Fries",
    "Masala French Fries",
  ];

  return (
    <>
      <div>
        {frenchFriesList.map((item, index) => (
          <div key={index} style={{ margin: "5px", marginLeft: "15px" }}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span
              style={{
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: "600",
                color: "#37474f",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FrenchFriesList;
