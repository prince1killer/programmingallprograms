import React,{useState} from 'react'
import './Style.css'


function Textarea(props) {
    // let spn1 = document.querySelector('.spn1');
    // spn1.style.color = 'red';
    const upperCaseClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearTextClick = () => {
      let newText = '';
      setText(newText);
    }
    const upperChange = (event) =>{
      console.log('onchange occers')
      setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text")
    // setText("Enter your new text")
    
  return (
    <div className='dis' style={props.colorMode}>

    <div className='container-fluid' id='word'>
        <h1 className='h1h' >{props.heading}</h1>
        <div className='main-text'>
            <textarea id='textArea' value={text} style={props.colorMode} onChange={upperChange}></textarea>
            <div className='button-area row'>
                <button className='btn1 btn col' onClick={upperCaseClick}>UpperCase</button>
                <button className='btn2 btn col' onClick={lowerCaseClick}>LowerCase</button>
                <button className='btn2 btn col' onClick={clearTextClick}>Clear text</button>
            </div>
        </div>
            <h2 className='my-3'>See Word Counter</h2>
            <p>Word count =<span className='spn1'>{text.split(' ').length}</span> alphabate counter = <span className='spn1'>{text.length}</span></p>
            <p>Minutes to read = <span className='spn1'>{.008*text.split(" ").length}</span> </p>
            <h2>Preview</h2>
            <p>{text}</p>

    </div>
    </div>
  )
}

export default Textarea