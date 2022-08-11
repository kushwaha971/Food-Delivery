import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Item from "./component/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./component/Recipe";
import Menu from "./component/menu/Menu";
import StuOffer from "./component/offers/StuOffer";

function App() {
  const [cart, setCart] = useState(Item);
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                Item={Item}
                cart={cart}
                setCart={setCart}
                show={show}
                setShow={setShow}
              />
            }
          />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/offer" element={<StuOffer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
