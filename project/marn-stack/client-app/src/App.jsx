import React, { Profiler } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Sighin from './pages/Sighin'
import Signup from './pages/Signup'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/signin' element={<Sighin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
