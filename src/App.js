import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Item from "./component/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./component/Recipe";
import Menu from "./component/menu/Menu";
import StuOffer from "./component/offers/StuOffer";
import MenuCart from "./component/menu/MenuCart";
import menu from "./component/menu/MenuList";

function App() {
  const [cart, setCart] = useState(Item);
  const [show, setShow] = useState(true);
  const [menuList, setMenuList] = useState(menu);

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
          <Route path="/offer" element={<StuOffer />} />
          <Route
            path="/menu"
            element={<Menu menuList={menuList} setMenuList={setMenuList} />}
          />
          <Route
            path="/OrderPlaced"
            element={<MenuCart menuList={menuList} setMenuList={setMenuList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
