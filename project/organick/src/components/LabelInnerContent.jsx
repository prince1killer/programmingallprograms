import React,{ useState} from 'react'
function Label_innerContent(props) {

    const [MouseIn,setMouseIn] = useState(false);

const MouseInEnter = () => {
    setMouseIn(true)
} 
const MouseInLeave = () => {
    setMouseIn(false)
}


let main = {
    transition: ".5s",
    margin: "30px 20px",
    width: "250px",
    height: "350px",
    backgroundSize: "cover",
    borderRadius: "20px",
    transform : MouseIn ? "scale(1.2)":"scale(1)",
    boxShadow: MouseIn ? "5px 1px 20px black":"none",
    backgroundColor: "#F9F8F8",
    display: "flex",
    flexDirection: "column",
    position: "relative"
}


let main_content = {
    position : "relative",
    height: "100%",
    width: "95%",
    padding:"3%",
    backgroundImage : "url(./images/"+props.imgName+")",
    backgroundSize : "90%",
    backgroundRepeat: "no-repeat",
    backgroundPosition : "center"
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

    return (
        <div style={main} onMouseEnter={MouseInEnter} onMouseLeave={MouseInLeave}>
            <div style={main_content} >
                <button style={button} >{props.button}</button>
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
        </div>
    )
}

export default Label_innerContent