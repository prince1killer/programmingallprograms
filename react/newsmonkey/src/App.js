import React from 'react'
// import './Style.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navber from './components/Navber'
import Home from './components/Home'
import About from './components/About'
import { News } from './components/News'

function App() {
  return (
    <BrowserRouter>
        <Navber/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/news" element={<News/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App