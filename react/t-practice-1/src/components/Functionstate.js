import React from 'react'
import { useState } from 'react';

function Functionstate() {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [pass,setPass] = useState("");
    let clickbutton = () => {
        // e=preventDefault();
        console.log(name)
        console.log(mail)
        console.log(pass)
    }
    let clearbutton = () => {
        setName("")
    }
    let nameChange = (event) => {
        setName(event.target.value)
    }
    let mailChange = (event) => {
        setMail(event.target.value)
    }
    let passChange = (event) => {
        setPass(event.target.value)
    }
  return (
    <div>
        <h3> Here we will  learn how to manage function start</h3>
        <h4> Due to absence of class React had intruduse state work</h4>
        <h1>Login form</h1>
        <label>Name:-</label><input type="text"  value={name} onChange={nameChange}/><br/>
        <label>Email:-</label><input type="Email" value={mail} onChange={mailChange}/><br/>
        <label>Password:-</label><input type="password" value={pass} onChange={passChange}/><br/>
        <button className='btn btn-danger' onClick={clickbutton}>Submit</button>
        <button className='btn btn-danger' onClick={clearbutton}>Clear</button>

    </div>
  )
}

export default Functionstate;