import React from 'react'

let main_content = {
    position : "relative",
    height: "100%",
    width: "95%",
    padding:"3%"
}

let button = {
    margin:"5%",
    padding : "2% 3%",
    backgroundColor: "#274C5B",
    color: "white",
    borderRadius : "5px",
    border : "none"
}

let box_bottom = {
    width : "95%",
    position: "absolute",
    bottom: "3%"
}

let price_box = {
    width: "95%",
    display : "flex",
    justifyContent: "space-between",
    padding:"5px 0px"
}

function Label_innerContent(props) {
    return (
        <div style={main_content}>
            <button style={button}>{props.button}</button>
            <div style={box_bottom}>
                <p style={{fontSize:"18px",color:"#274C5B", fontWeight:"700", fontFamily:"var(--hand2)",padding:"5px 0px"}}>{props.title}</p>
                <hr />
                <div style={price_box} >
                    <div >
                        <strike style={{fontSize:"13px", color:"gray",padding:"0% 10px"}}>$20.00</strike>
                        <span  style={{fontSize:"15px",color:"#274C5B", fontWeight:"700", fontFamily:"var(--hand2)"}}>{props.price}</span>
                    </div>
                    <div className="star" style={{padding:"5px 0px"}}>
                        <img src="images/Star 7Star.png" alt="" />
                        <img src="images/Star 7Star.png" alt="" />
                        <img src="images/Star 7Star.png" alt="" />
                        <img src="images/Star 7Star.png" alt="" />
                        <img src="images/Star 7Star.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Label_innerContent