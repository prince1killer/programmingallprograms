import React from 'react'
import { useState } from 'react';

function Addition(props) {
  let [first,setFirst] = useState("");
  let [second,setSecond] = useState("");
  let [ans,setAns] = useState("");

  let firstChange = (event) => {
    setFirst(event.target.value)
  }
  let secondChangne = (event) => {
    setSecond(event.target.value)
  }
  let submitAdd = () => {
      console.log(parseInt(first)+parseInt(second));
      setAns(parseInt(first)+parseInt(second));
  }
  return (
    <div>
        <h3>Addition of two class number</h3>
        <label>Enter your first value</label><input type="number" value={props.first} onChange={firstChange}/><br/>
        <label>Enter your second value</label><input type="number" value={props.second} onChange={secondChangne}/><br/>
        <button className='btn btn-success' type='button' onClick={submitAdd}>Submit</button><br/>
        <label>{ans}</label>
    </div>
  )
}

export default Addition