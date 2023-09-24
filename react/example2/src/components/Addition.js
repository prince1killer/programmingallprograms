import React,{ useState} from 'react'

function Addition() {

    
    const [txt1, setTxt1] = useState("");
    const [txt2, setTxt2] = useState("");
    const [txt3, setTxt3] = useState("1");

    function handleChange1(e){
        console.log(setTxt1);
        setTxt1(e.target.value);
    }



    const click1 = () => {
        setTxt3(Number(txt1)+Number(txt2));
    }   

  return (
    <div>
        <h1>dfhvki</h1>
        Enter the value one =<input type='text' value={txt1} onChange={handleChange1}/><br/>
        Enter the value two = <input type='text' value={txt2} onChange={(e)=>setTxt2(e.target.value)} /><br/>
        <button className='btn' onClick={click1} >Sum + hello</button>
        <input type='text' value={txt3} onChange={(e)=>setTxt3(e.target.value)}/>
    </div>
  )
}

export default Addition