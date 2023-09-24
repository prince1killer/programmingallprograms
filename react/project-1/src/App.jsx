import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import Description from "./components/Description";
import Home from "./components/Home";
import Alert from "./components/Alert";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";

const App = () => {
  const [modes, setModes] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, text) => {
    setAlert({
      mes: message,
      txt: text,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (modes === "light") {
      setModes("dark");
      showAlert("You had sucessfully enable light mode", "success");
    } else {
      setModes("light");
      showAlert("You had sucessfully enable dark mode", "success");
    }
  };
  const colorMode = {
    color: modes === "light" ? "White" : "black",
    backgroundColor: modes === "dark" ? "white" : "#130032",
  };
  return (
    <BrowserRouter>
        <Navbar title="IntBlog" aboutText="About" colorMode={colorMode} mode={modes} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        {/* <div className="container my-3"> */}
          <Routes>
            <Route  exact path="/Home" element={<Home/>}>
              {/* <Home /> */}
            </Route>
            <Route  exact path="/about" element={<About heading="About" colorMode={colorMode} mode={modes} />}>
              {/* <About heading="About" colorMode={colorMode} mode={modes} /> */}
            </Route>
            <Route  exact path="/word" element={<Textarea heading="Word Counter" colorMode={colorMode} mode={modes}/>}>
              {/* <Textarea heading="Word Counter" colorMode={colorMode} mode={modes}/> */}
            </Route>
            <Route  exact path="/description" element={<Description colorMode={colorMode} mode={modes} />}>
              {/* <Description colorMode={colorMode} mode={modes} /> */}
            </Route>
          </Routes>
        {/* </div> */}
    </BrowserRouter> 
  );
};

export default App;