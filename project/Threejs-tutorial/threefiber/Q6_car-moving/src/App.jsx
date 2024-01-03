import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

function CarShow(){
  return (
    <>
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
    <color args={[0,0,0]} attach="background"/>
    <boxGeometry color={"red"}/>
    <spotLight color={[1,0.95,0.7]} intensity={1.5} angle={0.6} penumbra={[5,5,0]} castShadow shadow-bias={0.0001}/>
    </>
  )
}


function App() {

  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  )
}

export default App
