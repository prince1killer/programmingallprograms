import React,{useState} from "react";
import "./App.css"
import Home from "./components/home/Home";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
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
    <div className="app" >
    <Navebar  black="black" mode={mode} modechange={modechange}/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
