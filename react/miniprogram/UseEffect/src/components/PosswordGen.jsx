import React, { useEffect, useState } from 'react'

function PosswordGen() {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState("")
    const [number, setNumber] = useState(false)
    const [spacial, setSpacial] = useState(false)
    console.log(length)

    useEffect(()=>{
        let pass = ""
        let gen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) gen += "1234567890";
        if(spacial) gen+=  "!@#$%^&*[]{}()"
        for(let i=0;i<=length;i++){
            let random = Math.floor(Math.random() * gen.length+1);
            pass = pass + gen.charAt(random);
        }
        setPassword(pass)

    },[setPassword, length,number,spacial])





  return (
    <div className='main_pass'>
        <div className="box">
            <h1>Password Generator</h1>
            <div className="box1">
                <input type="text" value={password} onChange={(e)=>{e.target.value}} />
                <input type="range" min="8" max="40"  onChange={(e)=>{setLength(e.target.value)}}/>
            </div>
            <div className="box2">
                <input type="checkbox" value={number} onChange={()=>{setNumber((last)=>!last)}}/>Number 
                <input type="checkbox" value={spacial} onChange={()=>{setSpacial((last)=>!last)}}/>Spacial
            </div>
        </div>
    </div>
  )
}

export default PosswordGen