import React from "react";

function BurgerList({handleCheck}) {

  const burgerList = [
    " Classic Veg Burger",
    "Classic Paneer Burger",
    "Loaded Cheese Burger",
    "Double Patty Veg Burger",
    "Pluto Special Burger",
  ];
  
  return (
    <>
      <div>
        {burgerList.map((item, index) => (
          <div key={index} style={{margin: '5px',marginLeft: '15px'}}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span
              style={{
                
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: "600",
                color: '#37474f',
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

export default BurgerList;
