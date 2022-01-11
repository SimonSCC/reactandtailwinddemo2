import "./App.css";
import SideBar from "./Components/SideBar";
import MyIngredients from "./Components/MyIngredients";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex w-screen h-screen bg-color2 justify-center">
      <Router>
        <SideBar></SideBar>
        <Routes>
          <Route path="/myingredients" element={<MyIngredients />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
