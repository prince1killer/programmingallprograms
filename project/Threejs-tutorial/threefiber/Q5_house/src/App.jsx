import { Canvas } from '@react-three/fiber'
import './App.css'
import Exprence from './components/Exprence'


function App() {

  return (
    <>
      <Canvas camera={{
        fov:64,
        position: [2.3,1.5,1.5]
      }}>
        <Exprence/>
      </Canvas>
    </>
  )
}

export default App
