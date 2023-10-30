import './App.css'
import Canvas from './canvas'
import Coustumizer from './pages/Coustumizer'
import Home from './pages/Home'

export default function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Coustumizer/>
    </main>
  )
}
