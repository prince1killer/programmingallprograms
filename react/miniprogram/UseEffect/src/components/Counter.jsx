import React, { useEffect, useState } from 'react'

function Counter() {

    const [count, setCount] = useState("0")

    const clicked = () => {
        setCount(parseInt(count)+1)
    }

    useEffect(()=>{
        if(count%2 == 0){
            document.getElementById("box").style.display = "none";
        }
        else if(count%2 == 1){
            document.getElementById("box").style.display = "block";
        }
        console.log("counting")

    },[])


    useEffect(()=>{
        if(count%2 == 0){
            document.getElementById("box").style.display = "none";
        }
        else if(count%2 == 1){
            document.getElementById("box").style.display = "block";
        }
        console.log("count")
    },[count])

  return (
    <div>
        <button onClick={clicked}>you clicked {count}</button>
        <div id='box' className="box" style={{width:"100px", height:"100px",backgroundColor:"red"}}></div>
    </div>
  )
}

export default Counter