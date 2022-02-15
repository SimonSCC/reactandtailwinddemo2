import "./App.css";
import SideBar from "./Components/SideBar";
import MyIngredients from "./Components/MyIngredients";
import Home from "./Components/Home";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Apply global styles on outer div
function App() {
  return (
    <div className="flex w-full h-screen justify-center text-color12 bg-gradient-to-r from-color2 via-color1 to-color3">
      <Router>
        <SideBar></SideBar>
        <div className="w-full ml-48 p-5 h-full ">
          <div className=" shadow-color4 shadow-md  bg-color1 p-5 h-full bg-gradient-to-br from-color1 via-color2 to-color8/10 rounded-lg ">
            <Routes>
              <Route path="/myingredients" element={<MyIngredients />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
