
import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import  islandScene  from '../assets/3d/island.glb'
import { a } from '@react-spring/three';



const Island = ({isRotating,setIsRotating,setCurrentStage,...props}) => {
  const islandRef = useRef();
  const { gl , viewport} = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  
  
  const handlPointDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  const handlPointUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
    // handlPointUp(e)
  }
  const handlPointMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(isRotating){
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;   
      // console.log(clientX)
    }
    // console.log(clientX)
  }


  const handleKeyUp = (e) => {
    if(e.key == 'ArrowLeft' || e.Key == 'ArrowRight'){
      setIsRotating(false);
    }
  }

  const handleKeyDown = (e) =>{
    if(e.key == 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01*Math.PI;
    }
    else if(e.key == 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01*Math.PI;
    }
  }

  useEffect(()=>{
    const canvas = gl.domElement;
    canvas.addEventListener('pointerup',handlPointUp);
    canvas.addEventListener('pointerdown',handlPointDown);
    canvas.addEventListener('pointermove',handlPointMove);
    document.addEventListener('keyup',handleKeyUp);
    document.addEventListener('keydown',handleKeyDown);
    return ()=>{
      canvas.removeEventListener('pointerdown',handlPointDown);
      canvas.removeEventListener('pointerup',handlPointUp);
      canvas.removeEventListener('pointermove',handlPointMove);
      document.removeEventListener('keyup',handleKeyUp);
      document.removeEventListener('keydown',handleKeyDown);
      }
  },[gl, handlPointMove, handlPointUp, handlPointDown])

    useFrame(()=>{
      if(!isRotating){
        rotationSpeed.current *= dampingFactor;
        if(Math.abs(rotationSpeed.current) < 0.001){
          rotationSpeed.current = 0
        }

        islandRef.current.rotation.y += rotationSpeed.current;     
      }
      else{
      
        const rotation = islandRef.current.rotation.y;
        const normalizeRotation = ((rotation % (2* Math.PI) + 2 * Math.PI ) % (2 * Math.PI))
        
        switch(true){
          case normalizeRotation >= 5.45 && normalizeRotation <= 5.85:
            setCurrentStage(4);
          break;
          case normalizeRotation >= 0.85 && normalizeRotation <= 1.3:
            setCurrentStage(3);
          break;
          case normalizeRotation >= 2.4 && normalizeRotation <= 2.6:
            setCurrentStage(2);
          break;
          case normalizeRotation >= 4.25 && normalizeRotation <= 4.75:
            setCurrentStage(1);
          break;
          default:
            setCurrentStage(null);
        }
      }
    });
  return (


    <a.group  ref={islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}

        />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
 
export default Island;