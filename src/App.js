import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Item from "./component/Item";

function App() {
  const [cart, setCart] = useState(Item);
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Navbar
        Item={Item}
        cart={cart}
        setCart={setCart}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
