import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber';

function Bird() {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef)

    useEffect(()=>{
      actions['Take 001'].play();
      // actions
    });
    useFrame(({clock , camera})=>{
      // birdRef.current.rotation.X = 0.15 + delta;
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2 ;
      // console.log("sposition "+birdRef.current.position.y)
      if(birdRef.current.position.x > camera.position.x + 10){
        birdRef.current.rotation.y = Math.PI;
      }
      else if(birdRef.current.position.x < camera.position.x - 10){
        birdRef.current.rotation.y = 0
      }
      if(birdRef.current.rotation.y === 0){
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      }
      else{
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;  
      }
    })
  return (
    <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird