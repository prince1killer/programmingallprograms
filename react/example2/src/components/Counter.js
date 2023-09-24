import React,{ useState } from 'react'

function Counter() {

    const [txt5,setTxt5] = useState(1);

    function click2(){
        // console.log(Number(txt5+1));
        
        setTxt5(Number(txt5 +1));
        console.log(34+34)
    }


  return (
    <div>
        <input type='text' value={txt5} onChange={(e)=>setTxt5(e.target.value)}/>
        <button className='btn1' onClick={click2}>click me</button>
    </div>
  )
}

export default Counter