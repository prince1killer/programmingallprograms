import React from 'react'
import "./App.css"

function Person(props) {

    let person = {
        boxShadow: "0 0 10px black",
        width : "250px",
        height: "350px",
        borderRadius: "30px", 
        margin: "5% 3%"
    }
    let person_img={
        backgroundSize : "cover",
        borderRadius : "30px 30px 0px 0px",
        width: "100%",
        height: "80%",
        backgroundImage : "url(./images/"+props.img+")"
    }

    let person_content = {
        borderRadius: "0% 0% 30px 30px",
        height:"20%",
        width: "100%"
        // backgroundColor : "white"
    }


    return (
    <div className='person' style={person}>
        <div className="person_img" style={person_img}></div>
        <div className="person_content" style={person_content}>
            <div className="person_content_name">{props.pname}</div>
            <div className="person_social">
                <span className="proficition">{props.profication}</span> 
                <span className="person_social_icon">
                    <a href="https://web.whatsapp.com"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://x.com"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Person