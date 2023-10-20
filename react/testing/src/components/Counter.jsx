import React, { useEffect, useState } from 'react'


function Counter() {

    const [count, setCount] = useState(0)

    const clicked = () => {
        setCount(parseInt(count) + 1)
    }


    useEffect(()=>{
        console.log("without dep")
    })

    useEffect(()=>{
        console.log("with blank dep")
    },[count])

  return (
    <div>

        <button onClick={clicked}>you had {count}</button>
        <div className='main' style={{width:"100px", height:"100px", backgroundColor:"red"}}></div>
    </div>
  )
}

export default Counter