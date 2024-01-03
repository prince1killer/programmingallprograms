import { Float, Line, OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'
import Backa from './Backa'
import { Airplane } from './Airplane'
import { Cloud } from './Cloud'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


const LINE_NB_POINTS = 200;


function Home() {
  
  const curve  = useMemo(()=>{
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(0,0,-100),
      new THREE.Vector3(50,0,-250),
      new THREE.Vector3(50,50,-250),
      new THREE.Vector3(100,50,-250),
      new THREE.Vector3(100,100,-300),
      new THREE.Vector3(100,0,-300),
      new THREE.Vector3(200,0,-300),
      new THREE.Vector3(500,0,-300),
      new THREE.Vector3(500,100,-100),
      new THREE.Vector3(500,0,100),
      new THREE.Vector3(500,0,300),
      new THREE.Vector3(500,40,400),
      new THREE.Vector3(500,90,600),
      new THREE.Vector3(500,0,800),
      new THREE.Vector3(0,0,0)
    ],
    false,"centripetal",0.5)
  })
  const linePoint = useMemo(()=>{
    return curve.getPoints(LINE_NB_POINTS);
  },[curve])

  const shape = useMemo(()=>{
    const shape = new THREE.Shape();
    shape.moveTo(0,0.2);
    shape.lineTo(0,0.2);
    return shape
  },[curve])

  let loop = [],i=0,len=100;
  while (++i <= len) loop.push(i)


  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta)=>{
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoint.length),linePoint.length - 1)
    const curPoint = linePoint[curPointIndex]
    const pointAhead = linePoint[Math.min(curPointIndex + 1), linePoint.length - 1]
    const xDisplacement = (pointAhead.x - curPoint.x) * 80
    const angleRotation  = (xDisplacement < 0 ? 1 : -1)
    Math.min(Math.abs(xDisplacement),Math.PI/3)
    cameraGroup.current.position.lerp(curPoint, delta * 24);
    cameraGroup.current.rotation([0,0,90])
  })


  return (
    <>

        <OrbitControls enableZoom={false}/>
        <group ref={cameraGroup}>
          <Backa/>
          <PerspectiveCamera position={[0,0,15]}  fov={30} makeDefault/>
          <Float floatIntensity={2} speed={2}>
            <Airplane rotation-y={Math.PI/2} scala={[0.2,0.2,0.2]} position-y={0.1}/>
          </Float>
        </group>
        <group position-y={-3}>
          <Line points={linePoint} color={'white'} opacity={0.7} transparent lineWidth={16}/>
        </group>
        <mesh>
          <extrudeGeometry args={[shape,{
            steps: LINE_NB_POINTS,
            bevelEnabled: false,
            extrudePath: curve
          }]}/>
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
        {loop.map(()=>{
          let ren1 = Math.floor(Math.random()*(50 - (-50)+1)+(-50))
          let ren2 = Math.floor(Math.random()*(50 - (-50)+1)+(-50))
          let ren3 = Math.floor(Math.random()*(50 - (-50)+1)+(-50))
          let s1 = Math.abs(ren1/10);
          let s2 = Math.abs(ren2/10);
          let s3 = Math.abs(ren3/10);
          return(
            <Cloud key={loop.id} opacity={ren2/80}  scale={[1.5,s2,s3]} position={[ren1,ren2,ren3]}/>
          )
        })}
    </>
  )
}

export default Home