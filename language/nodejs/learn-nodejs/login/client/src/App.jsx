import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import "./App.css"

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
