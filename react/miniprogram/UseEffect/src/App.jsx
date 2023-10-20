import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import PosswordGen from './components/PosswordGen'
import Boubble from './components/Boubble'
import MouseGlow from './components/MouseGlow'
function App() {

  return (
    <BrowserRouter>
      <Navbar logo={"LOGO"} title1={"Counter"} title2={"Boubble"} title3={"PasswordGen"} title4={"MouseGlow"}/>
      <Routes>
        <Route path='/' element={<Counter/>}></Route>
        <Route path='/bubble' element={<Boubble/>}></Route>
        <Route path='/pass' element={<PosswordGen/>}></Route>
        <Route path='/glow' element={<MouseGlow/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
