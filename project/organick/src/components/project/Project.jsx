import React from 'react'
import './Project.css'

const CoverBox = (props) => {
  const Para =  {color:props.mode == "dark" ? 'rgb(254, 255, 214)' : 'black'}
  
  const main =  {color:props.mode == "dark" ? 'rgb(48, 210, 255)' : 'black'}
  
  const topic = {color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}

  return(
    <div >
      <div className="project_content_box"  style={{backgroundImage:`url(images/${props.backg})`}}>
        <div className='project_content_box_cover'><i class="fa-solid fa-circle-arrow-right"></i></div>
      </div>
      <div className='protofolio_title' style={Para}>{props.dis}</div>
      <div className='protofolio_name'>{props.name}</div>
    </div>    
  )
}  

function Project(props) {

  const Para =  {color:props.mode == "dark" ? 'rgb(254, 255, 214)' : 'black'}
  
  const main =  {color:props.mode == "dark" ? 'rgb(48, 210, 255)' : 'black'}
  
  const topic = {color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}



  return (
    <div className='project'>   
        <div className="project_head">
          <h1 style={topic}>Project Standerd</h1>
        </div>
        <div className='project_content'>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop1.png"}/>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop2.png"}/>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop3.png"}/>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop4.png"}/>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop5.png"}/>
          <CoverBox dis={"Green & Tasty Lemon"} name={"Fruits"} backg={"Photop6.png"}/>
        </div>
    </div>
  )
}

export default Project