import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
