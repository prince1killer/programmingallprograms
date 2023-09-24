import Addition from './components/Addition';
import Api from './components/Api';
import Classtate1 from './components/Classtate1';
import Functionstate from './components/Functionstate';
import Navbar from './components/Navbar';
import Promicework from './components/Promicework';




function App() {
  return (
    <div className="App">
      <Navbar logo="LOGO" title1="Functionstate" title2="classtate" title3="Addition" title4="Promices" title5="Api"/>
      <Functionstate/>
      <Classtate1/>
      <Addition/>
      <Promicework/>
      <Api/>
    </div>
  );
}

export default App;
