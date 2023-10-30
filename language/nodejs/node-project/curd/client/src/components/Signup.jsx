import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
  const [name, setName] = useState("")
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setRepass] = useState("")

  const Signupbutton = async (e) => {
      e.preventDefault();

      // let data = {
      //   name : name,user : user,email : email,pass : pass
      // }
      // console.log(data)
      try {
        await axios.post('http://localhost:5000/',{name,user,email,pass})
      } catch (error) {
          console.log("there in the signup.jsx got problem "+error)        
      }
  } 


  return (
    <div className='signup'>
        <h1>Signup</h1>
        <form action="post">
            <p><label htmlFor="ip1">Enter your Name = </label><input type="text" id='ip1' value={name} onChange={(e)=>{setName(e.target.value)}}/></p>
            <p><label htmlFor="ip2">Enter your username = </label><input type="text" id='ip2' value={user} onChange={(e)=>{setUser(e.target.value)}}/></p>
            <p><label htmlFor="ip3">Enter your Email = </label><input type="email" id='ip3' value={email} onChange={(e)=>{setEmail(e.target.value)}}/></p>
            <p><label htmlFor="ip4">Enter your Password = </label><input type="passsword" id='ip4' value={pass} onChange={(e)=>{setPass(e.target.value)}}/></p>
            <p><label htmlFor="ip5">Enter your re-password = </label><input type="password" id='ip5' value={repass} onChange={(e)=>{setRepass(e.target.value)}}/></p>
            <button onClick={Signupbutton}>Signup</button>
        </form>

    </div>
  )
}

export default Signup