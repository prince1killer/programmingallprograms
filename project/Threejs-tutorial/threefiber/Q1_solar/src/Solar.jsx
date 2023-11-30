import React from 'react'
import { createRoot } from 'react-dom/client'
import  { Canvas, useFrame } from '@react-three/fiber'

function Solar() {
    const myMesh = React.useRef()
    useFrame(({clock})=>{
        myMesh.current.rotation.x += 0.001;
    })
  return (
    <Canvas>
        <mesh ref={myMesh}>
            <boxGeometry position={[2,2,2]} args={[4,4,4]}/>
            <meshBasicMaterial/>
        </mesh>
    </Canvas>
  )
}

export default Solar