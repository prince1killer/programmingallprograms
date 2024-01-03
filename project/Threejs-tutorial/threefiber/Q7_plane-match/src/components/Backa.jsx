import {  EnvironmentCube, Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from 'lamina'
import React from 'react'
import * as THREE from 'three'

function Backa() {
  return (
    <>
        <EnvironmentCube files="/sky.hdr" background={true} />
          <Sphere args={[1000,1000,1000]} rotateY={Math.PI/2}> 
            <LayerMaterial lighting='physical' transmission={1} side={THREE.Backside}>
              <Gradient colorA={"#357"} colorB={"red"} axes='y' start={0} end={-0.5}/>
            </LayerMaterial>
          </Sphere>
    </>
  )
}

export default Backa