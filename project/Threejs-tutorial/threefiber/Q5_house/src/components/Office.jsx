import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb')
  const tl = useRef();
  const ref=useRef();
  const libref = useRef();
  const atticref = useRef();
  const scroll = useScroll();
  useLayoutEffect(()=>{
    tl.current = gsap.timeline();
    
    //Vertical animation
    tl.current.to(ref.current.position,{duration:2,y: -FLOOR_HEIGHT * (NB_FLOORS - 1)},0)
    console.log(tl.current.to)
    
    //Library animation
    tl.current.from(libref.current.position,{duration:0.5, x:2},0.5);

    //ATTIC
    tl.current.from(atticref.current.position,{duration:0.5, y:2},0);
    tl.current.from(atticref.current.position,{duration:0.2, z:-2},0);

  },[])
  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration())
    // console.log(scroll)
  })

  return (

    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <group position={[0, 2.114, -2.23]}>
        <group ref={libref}>
          <mesh geometry={nodes['02_library'].geometry} material={materials['02']}  />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]}>
        <group ref={atticref}>
          <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/WawaOffice.glb')
