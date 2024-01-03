import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Pmodal from '../pages/Pmodal'
import Overlay from "../pages/Overlay"
import './Pmove.css'

function Pmove() {
    const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
    return (
        <>
            <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Pmodal scroll={scroll} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            <Overlay ref={overlay} caption={caption} scroll={scroll} />
        </>
    )
}

export default Pmove