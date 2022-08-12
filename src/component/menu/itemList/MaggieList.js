import React from "react";

function MaggieList({ handleCheck }) {
  const maggieList = [
    "Classic Veg Maggie",
    "Veg Maggie with Cheese blast",
    "Spicy Masala Maggie",
    "Plain Butter Maggie",
    "Hot Schezwan Maggie",
    "Soupy Maggie",
  ];

  return (
    <>
      <div>
        {maggieList.map((item, index) => (
          <div key={index} style={{ margin: "5px", marginLeft: "10px" }}>
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

export default MaggieList;
