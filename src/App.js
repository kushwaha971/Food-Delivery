import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Item from "./component/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./component/Recipe";
import Menu from "./component/menu/Menu";
// import StuOffer from "./component/offers/StuOffer";
import OfferClosed from "./component/offers/OfferClosed";

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
          <Route path="/recipe" exact="true" element={<Recipe />} />
          <Route path="/offer" element={<OfferClosed />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
