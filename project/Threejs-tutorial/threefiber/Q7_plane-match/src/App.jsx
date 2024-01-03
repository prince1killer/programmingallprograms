import { Canvas } from '@react-three/fiber'
import './App.css'
import Home from './components/Home'
import { ScrollControls } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas 
        camera={{
          position: [0,0,-15.5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]}/>
        <ScrollControls pages={15} damping={0}>
        <Home/>
          
        </ScrollControls>
      </Canvas>      
    </>
  )
}

export default App
