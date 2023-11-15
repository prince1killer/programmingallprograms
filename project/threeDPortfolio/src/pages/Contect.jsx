import React, { Suspense, useRef, useState } from 'react'
import { Fox } from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import  Loader  from '../components/Loader';

function Contect() {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:"", email:"", message:""})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const handleOnchnage = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  } 
  const handleOnFocus = () => {}
  const handleOnBlue = () => {}
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-4" onSubmit={handleSubmit}>
          <label className="text-back-500 font-semibold">Name
            <input type="text" className='input' name='name' placeholder="Enter your name" required value={form.name} onChange={handleOnchnage} onFocus={handleOnFocus} onBlur={handleOnBlue}/>
          </label>
          <label className="text-back-500 font-semibold">Email
            <input type="text" className='input' name='email' placeholder="Enter your Email" required value={form.email} onChange={handleOnchnage} onFocus={handleOnFocus} onBlur={handleOnBlue}/>
          </label>
          <label className="text-back-500 font-semibold">Message
            <textarea className='textarea' rows={4} placeholder="Let's give your message" required value={form.message} onChange={handleOnchnage} onFocus={handleOnFocus} onBlur={handleOnBlue}></textarea>
          </label>
          <button type='submit' className='btn' onFocus={handleOnFocus} onBlur={handleOnBlue}>{isLoading ? 'sending...':"Send Message"}</button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]'>
        <Canvas camera={{position:[0,0,5], fov:75, near:0.1, far: 1000}}>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={1}/>
          <Suspense fallback={<Loader/>}>
            <Fox position={[0.5, 0.35, 0]} rotation={[6.5,-.7,0]} scale={[0.5, 0.5, 0.5]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contect