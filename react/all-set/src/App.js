import React from "react"
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Statework from "./components/Statework";
import Newsapp from "./components/Newsapp";


function App() {
  return (
    <BrowserRouter>
    <Navbar title1="Wordcounter" title2="News"/>
      <Routes>
        <Route path="/statework" element={<Statework  />}></Route>
        <Route path="/news" element={<Newsapp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
