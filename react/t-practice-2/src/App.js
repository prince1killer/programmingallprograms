import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
// import Home from './components/Home';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<News/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
