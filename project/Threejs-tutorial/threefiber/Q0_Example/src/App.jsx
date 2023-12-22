import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './components/Home'
import Tshirt from './components/Tshirt'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tshirt' element={<Tshirt/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
