import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


const Cube = ({position,color}) => {
    const cubeRef = useRef()
    useFrame((state,delta)=>{
        cubeRef.current.rotation.x += delta
        cubeRef.current.rotation.y += delta
        cubeRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2
        cubeRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
        console.log(state)
    })
    return(
        <mesh position={position} ref={cubeRef}>
            <boxGeometry />
            <meshBasicMaterial color={color}/>
        </mesh>
    )
}


function Circle3D() {
  return (
    <Canvas>
        <Cube position={[1,1,1]} color={'red'}/>
    </Canvas>
  )
}

export default Circle3D