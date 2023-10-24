import React from 'react'
import './Project.css'

const CoverBox = (props) => {
  return(
    <div >
      <div className="project_content_box"  style={{backgroundImage:`url(images/${props.backg})`}}>
        <div className='project_content_box_cover'><i class="fa-solid fa-circle-arrow-right"></i></div>
      </div>
      <div className='protofolio_title'>{props.dis}</div>
      <div className='protofolio_name'>{props.name}</div>
    </div>
  )
}

function Project() {
  return (
    <div className='project'>   
        <div className="project_head">
          <h1>Project Standerd</h1>
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