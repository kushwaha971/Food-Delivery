import React from "react";

function PotatoTwisterList({ handleCheck }) {
  const potatoTwisterList = [
    "Masala Twister",
    "Peri-Peri Cheese Twister",
    "Hot Schezwan Twister",
    "Pluto Potato Twister",
  ];

  return (
    <>
      <div>
        {potatoTwisterList.map((item, index) => (
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

export default PotatoTwisterList;
