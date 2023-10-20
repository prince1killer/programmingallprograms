import React,{useState} from "react";
import "./App.css"
import Home from "./components/home/Home";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import News from "./components/news/News";
import News_page from "./components/news/News_page";
function App() {

  const [mode, setMode] = useState("light")

  
  const modechange = () => {
    
    if(mode == "light"){
      setMode("dark")
      document.getElementById("nav").style.backgroundColor = "#03082f";
      document.body.style.backgroundColor = "#03082f";
    }
    else{
      setMode("light")  
      document.getElementById("nav").style.backgroundColor = "#F9F8F8";
      document.body.style.backgroundColor = "#F9F8F8";
    }
  }

  return (
    <BrowserRouter>
    <Navebar  black="black" mode={mode} modechange={modechange}/>
    <Routes>
        <Route path="/" element={<Home  />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/newsp" element={<News_page/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
