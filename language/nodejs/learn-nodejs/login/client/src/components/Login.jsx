import React from 'react'

function Login() {
  return (
    <div className='login'>
        <div className='loginbox'>
            <label>Email or User Name:</label>
            <input type="text" placeholder='Email or user Name'/>
            <label>Password:</label>
            <input type="text" placeholder='Password'/>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login