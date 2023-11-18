import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
    return (
        <Canvas>
            <ambientLight intensity={1.5} />
            <directionalLight color="red" />
            <mesh position={[0,0,0]} rotation={[1,1 ,0]} >
                <boxGeometry args={[3,3,3]}/>
                <meshStandardMaterial  color={'red'}/>
            </mesh>
        </Canvas>
    )
}

export default App