import React, { useEffect, useState } from 'react'

function PasswordGen() {

    const [password,setPassword] = useState("")
    const [length, setLength] = useState(8) 
    const [number, setNumber] = useState(false)
    const [spacial, setSpacial] = useState(false)

    useEffect(()=>{
        console.log(length)
        let pass = ""
        let gen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz"
        if(number) gen+= "1234567890"
        if(spacial) gen+= "!@#$%^&*()[]{}"

        for(let i=0;i<=length;i++){
            let rendom1 = Math.floor(Math.random()*gen.length+1);
            pass = pass + gen.charAt(rendom1);
        }
        setPassword(pass)
        console.log(pass)
        



    },[length,number,spacial,setPassword])


  return (
    <div>
        <div>
            <input type="text" style={{width: "500px"}}  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <input type="range" min="8" max="40" onChange={(e)=>setLength(e.target.value)}/>
        </div>
        <div>
            <input type="checkbox" onChange={()=>setNumber((last)=>!last)}/>Number
            <input type="checkbox" onChange={()=>setSpacial((last)=>!last)} />spacial
        </div>
    </div>
  )
}

export default PasswordGen