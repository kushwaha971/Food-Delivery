import React from "react";

function ColdCoffeList({ handleCheck }) {
  const coldCoffeeList = [
    "Pluto Iced Coffee",
    "Frappuccino",
    " Iced Mocha",
    "Classic Cold Coffee",
    "Pluto Freek shake Coffee",
  ];

  return (
    <>
      <div>
        {coldCoffeeList.map((item, index) => (
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

export default ColdCoffeList;
