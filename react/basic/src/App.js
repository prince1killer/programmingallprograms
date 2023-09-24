
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SumTwoValues from './SumTwoValues';
import Marksheet from './Marksheet';
import DynamicTextboxes from './DynamicTextboxes';
import MinMaxTextboxes from './MinMaxTextboxes';
import ShoppingList from './ShoppingList';
import OnlineExam from './OnlineExa';
import DOBDropdown from './DOBDropdown';
import Checkbox from './Checkbox';
import Listbox from './Listbox';
import Textbox from './Textbox';
import FileUpload from './FileUpload';
import SumOfEvenAndOdd from './SumOfEvenAndOdd';
import LoanCalculator from './LoanCalculator';
import Timer from './Timer';
import Encryption from './Encryption';
import CookieExample from './CookieExample';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<SumTwoValues/>}></Route>
          <Route path='/mark' element={<Marksheet/>}></Route>
          <Route path='/text' element={ <DynamicTextboxes/>}></Route>
          <Route path='/min' element={<MinMaxTextboxes/>}></Route> 
          <Route path='/shop' element={<ShoppingList/>}></Route>
          <Route path='/online' element={<OnlineExam/>}></Route>
          <Route path='/drop' element={<DOBDropdown/>}></Route>
          <Route path='/check' element={<Checkbox/>}></Route>
          <Route path='/list' element={<Listbox/>}></Route>
          <Route path='/Textbox' element={<Textbox/>}></Route>
          <Route path='/file' element={<FileUpload/>}></Route>
          <Route path='/sum' element={<SumOfEvenAndOdd/>}></Route>
          <Route path='/cal' element={<LoanCalculator/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
          <Route path='/encryp' element={<Encryption/>}></Route>
          <Route path='/cookie' element={<CookieExample/>}></Route>
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
