import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import { Office } from './Office'

import { Overlay } from './Overlay'

function Exprence() {
  return (
    <>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={1}/>
    <ScrollControls pages={3} damping={false }>
        <Office/>
        <Overlay/>
    </ScrollControls>
    </>
  )
}

export default Exprence