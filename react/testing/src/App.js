import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import PasswordGen from './components/PasswordGen';
import Bubble from './components/Bubble';


function App() {
  return (
    <BrowserRouter>
    <Navbar  logo={"LOGO"} title1={"Counter"} title2={"Bubble"} title3={"Password"}/>
       <Routes>
        <Route path='/' element={<Counter />}></Route>
        <Route path='/pass' element={<PasswordGen />}></Route>
        <Route path='/bubble' element={<Bubble />}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
