import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei' 
import { useControls } from 'leva';
import { DirectionalLightHelper } from 'three';


const Cube = ({position,color,size}) => {
    const cubeRef = useRef();
    const [isHovered,setIsHovered] = useState(false);
    let roSpeed = isHovered ? 1 : 0.001
    useFrame((state,delta)=>{
        
        cubeRef.current.rotation.x += roSpeed;
        cubeRef.current.rotation.y += delta;
        cubeRef.current.position.z = Math.sin(state.clock.elapsedTime)*2;
    })
    return (
        <mesh position={position} ref={cubeRef} onPointerEnter={(e)=>{e.stopPropagation(), setIsHovered(true)}} onPointerLeave={()=>{setIsHovered(false)}}>
            <boxGeometry args={size}/>
            {/* <meshStandardMaterial color={isHovered ? 'white':color}/> */}
            <MeshWobbleMaterial color={'red'} factor={1}/>
            <OrbitControls/>
        </mesh>
    )
}


const Scen = () => {
    const directionalLightRef = useRef();
    const { lightColor , lightIntencity } = useControls({
        lightColor:'white',
        lightIntencity:{
            value : 0.5,
            min:0,
            max:1000,
        }
    });
    useHelper(directionalLightRef,DirectionalLightHelper,0.5,'white')
    return (
        <>
            <directionalLight 
                position={[0,4,6]} 
                color={lightColor} 
                ref={directionalLightRef}
            />
            <ambientLight/>
            <mesh  >
                <group position={[0,0,0]}>
                    <Cube position={[2,2,0]} size={[1,1,1]} color={'red'} delta={[0.01,0,0]}/>
                    <Cube position={[-2,2,0]} size={[1,1,1]} color={'red'} delta={[0.01,0,0]}/>
                    <Cube position={[2,-1,0]} size={[1,1,1]} color={'red'} delta={[0.01,0,0]}/>
                    <Cube position={[-2,-1,0]} size={[1,1,1]} color={'red'} delta={[0.01,0,0]}/>
                </group>

            </mesh>
        </>
    )
}

function First() {

    // const cubeGroupRef = useRef();
    // useFrame((state,delta)=>{
    //     cubeGroupRef.current.rotation.x += delta;
    //     // cubeRef.current.rotation.y += delta;
    //     // cubeRef.current.rotation.z += delta;
    // })
  return (
    <Canvas>
        <Scen/>
    </Canvas>
  )
}

export default First