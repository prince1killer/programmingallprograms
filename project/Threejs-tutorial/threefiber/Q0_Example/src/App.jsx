import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './components/Home'
import Pmove from './components/Pmove'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pmove' element={<Pmove/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
