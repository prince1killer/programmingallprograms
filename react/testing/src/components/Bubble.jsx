import React, { useEffect, useState } from 'react'

function Bubble() {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener('pointermove', (e) => {
            setPosition({ x:e.clientX, y: e.clientY })})
            return  window.removeEventListener('pointermove', (e) => {setPosition({ x:e.clientX, y: e.clientY })})
            // console.log(position)
        })

        return (
            <div className='bubble_main' style={{transform:`translate(${position.x}px, ${position.y}px)`}}></div>
        )
    }

export default Bubble