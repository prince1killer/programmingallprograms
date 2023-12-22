import React from 'react'

function Signin() {
  return (
    <div className='signin'>
      <div className="signinbox">
        <label>Enter the User name:</label>
        <input type="text" placeholder='Enter the name'/>
        <label>Enter the name:</label>
        <input type="text" placeholder='Enter the user name'/>
        <label>Enter the email:</label>
        <input type="text" placeholder='Enter the email'/>
        <label>Enter the password:</label>
        <input type="text" placeholder='Enter the password'/>
        <button>Submit</button>

      </div>
    </div>
  )
}

export default Signin
