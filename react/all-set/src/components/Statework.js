import React,{useState} from 'react'

function Statework() {
    const textvalue = () => {
       let newText = text.toUpperCase();
       setText(newText)
    }
    const lowerValue = () => {
        let newText2 = text.toLowerCase();
        console.log("lower")
        setText(newText2)
    }
    const upperChange = (event) => {
    setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text");
  return (
    <div id='statework'>
        <h1 className='text-center'>Word Counter app</h1>
        <div className='container'>
        <h3>Enter the text to count word:</h3>
            <textarea className='text-counter' onChange={upperChange} placeholder="Enter you name" value={text}></textarea>
            <div className='row'>
                <button className='btn btn-default btn-success col' onClick={textvalue}>Upper case</button>
                <button className='btn btn-default btn-success col' onClick={lowerValue}>Lower case</button>
                <button className='btn btn-default btn-success col'>Counter </button>
            </div>
        </div>
    </div>
  )
}

export default Statework