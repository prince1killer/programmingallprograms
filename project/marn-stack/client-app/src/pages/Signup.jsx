import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:[e.target.value]})
  }
  const submitsignup = async (e) => {
    e.preventDefault();
    const res = await fetch("api/auth/signup",{
      method: 'POST',
      headers : {
        'contect-api' :  'application/json'
      },
      body: json.stringify(formData)
    })
    const data = await res.json();
    console.log(data)
    console.log(formData)
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="text" placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="text" placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button onClick={submitsignup} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form> 
      <div className='flex gap-2 mt-5'>
        <p>
          I have account : 
        </p>
          <Link to={"/signin"} className='text-blue-700'>Sign in</Link>
      </div>
    </div>
  )
}
