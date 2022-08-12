import React from "react";

function HotBreveragesList({ handleCheck }) {
  const hotBreveragesList = [
    "Hot Coffee",
    "Filter Coffee",
    "Masala Ginger Tea",
  ];

  return (
    <>
      <div>
        {hotBreveragesList.map((item, index) => (
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

export default HotBreveragesList;
