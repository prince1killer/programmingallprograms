import React, { useEffect, useState } from 'react'


function Boubble() {

    const [position, setPosition] =  useState({x:0,y:0})

    // useEffect(()=>{

    // },[])
    useEffect(() => {
        let a = document.getElementById("bubble_main")
        a.style.marginBottom = 30+"px";
        a.addEventListener('pointermove', (e)=>{setPosition({ x: e.clientX, y: e.clientY})});
        // return () => {
        //   a.removeEventListener('pointermove', (e)=>{setPosition({ x: e.clientX, y: e.clientY})});
        // };
    }, ['pointermove', setPosition])
    console.log(position)
  return (
    <div className="bubble_main" id='bubble_main'>
        <div className="circle" style={{transform : `translate(${position.x}px, ${position.y}px)`}}></div>

    </div>
  )
}

export default Boubble