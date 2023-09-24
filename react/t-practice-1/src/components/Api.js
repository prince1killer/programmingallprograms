import React from 'react'
import { useState } from 'react'

function Api() {
    let [name1, setName1] = useState("");
    let [email1, setEmail1] = useState("");
    let [password1, setPassword1] = useState("");
    let [phone1, setPhone1] = useState("");
    let [city1, setCity1] = useState("");

    const submitApi = () => {
        // console.log(name1)
        // console.log(email1)
        // console.log(password1)
        // console.log(phone1)
        // console.log(city1)

        const userobj = new FormData();
        userobj.append("Name",name1)
        userobj.append("Email",email1)
        userobj.append("password",password1)
        userobj.append("Phone",phone1)
        userobj.append("City",city1)
    }
  return (
    <div id='api'>
        <h1>Here now we will learn how to make API</h1>
        <label>Name</label><input type="text"  onChange={(e)=>setName1(e.target.value)}/><br/>
        <label>Emial</label><input type="email" onChange={(e)=>setEmail1(e.target.value)}/><br/>
        <label>Password</label><input type="password" onChange={(e)=>setPassword1(e.target.value)}/><br/>
        <label>Phone</label><input type="text" onChange={(e)=>setPhone1(e.target.value)}/><br/>
        <label>City</label><input type="text" onChange={(e)=>setCity1(e.target.value)}/><br/>
        <button className='btn btn-warning' onClick={submitApi}>submit</button>
    </div>
  )
}

export default Api