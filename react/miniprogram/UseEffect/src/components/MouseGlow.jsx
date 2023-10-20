import React, { useEffect, useState } from 'react'

function MouseGlow() {
    const [position, setPosition] = useState({x:0,y:0})
    
    let count = 0
    const BlowBall = (a,b) =>{
        count++
        let div = document.createElement("div")
        div.className = "ball";
        div.position = "absolute"
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = "red";
        div.style.transform = `translateX(${a}px) translateY(${b}px)`;
        document.querySelector(".mouse_main").appendChild(div)
    }

    useEffect(()=>{
        let a =document.querySelector(".mouse_main")
        // box.style.transform = `translate(${position.x}px, ${position.y}px)`;
        a.addEventListener("pointermove", (e)=>{setPosition({x:e.clientX, y:e.clientY})})
        BlowBall(position.x,position.y),100
        // console.log(box)
        return ()=>{
            a.removeEventListener("pointermove", (e)=>{setPosition({x:e.clientX, y:e.clientY})})
        }
        console.log(position.x, position.y)
    },['pointermove',position])
  return (
    <div className='mouse_main'></div>
  )
}

export default MouseGlow