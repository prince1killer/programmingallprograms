import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cube from './components/Cube';
import Line from './components/Line';
import Maintheo from './components/Maintheo';
// import Objloader from './components/Objloader';

function App() {
  
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cube/>}></Route>
        <Route path='/line' element={<Line/>}></Route>
        {/* <Route path='/obj' element={<Objloader/>}></Route> */}
        <Route path='/main' element={<Maintheo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App