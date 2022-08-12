import React from "react";

function SandwichList({ handleCheck }) {
  const sandwichList = [
    " Classic Veg Sandwich",
    " Creamy Malai Sandwich",
    "Masala Sandwich",
    "Classic Veg with loaded Chessse Sandwich",
    "Butter with Banana Sandwich",
    "Pluto Special Sandwich",
  ];

  return (
    <>
      <div>
        {sandwichList.map((item, index) => (
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

export default SandwichList;
