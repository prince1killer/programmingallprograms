import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Contect from "./pages/Contect"

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/contect" element={<Contect/>}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App