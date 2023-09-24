import React,{useState} from 'react'



function Navebar(props) {

  const [menustate, setMenustate]=useState(true)
  
  const menuiconChange = () => {
    if(menustate == false){
      setMenustate(true)
    }
    else{
      setMenustate(false)
    }
  } 
  console.log(props.mode)
  const see = () => {
    if(props.mode == "light"){
      return "black"
    }
    else{
      return "white"
    }
  }
  console.log(see())
  const MenuCall = (props) => {
    return(
      <ul style={{display:props.color,transition:"10s"}}>
                  <li><a href="/home" style={{color:see()}}>Home</a></li>
                  <li><a href="/about" style={{color : see()}}>About</a></li>
                  <li><a href="/pages" style={{color : see()}}>Pages</a></li>
                  <li><a href="/shop" style={{color : see()}}>Shop</a></li>
                  <li><a href="/project" style={{color : see()}}>Project</a></li>
                  <li><a href="/news" style={{color : see()}}>News</a></li>
              </ul>
    )
  }
 return (
    <div id='nav' >
        <img src="images/logo.svg" alt="logo" />
        <div className='menu-list'>
            <MenuCall/>
        </div>
        <div className="icon">
            <div className="serch">
              <input type="serch" id='searchbar'/>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="icon-shop"></div>
            <div className="shoping">
              <i className="fa-solid fa-cart-shopping" style={props.mode == "dark"?{color:"#03082f",backgroundColor:"white"}:{color:"white",backgroundColor:"#03082f"}}></i>
              <label style={props.mode == "dark"?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>Cart(0)</label>

            </div>
            <button onClick={props.modechange}><i className={props.mode=="dark"?"fa-regular fa-sun":"fa-solid fa-moon"}></i></button>{/* here we are making light and dark mode
            through props and all are redirect to App.js */}
        </div>
        <div className="menubar">
          <button onClick={menuiconChange}><i className={menustate == false?"fa-regular fa-circle-xmark":"fa-solid fa-bars"} style={props.mode == "dark"?{color:"white",backgroundColor:"#03082f"}:{color:"#03082f",backgroundColor:"white"}}></i></button>
          <MenuCall color={menustate == true?"none":"flex"}/>
          {/* <input type='button' onClick={props.modechange} value={props.mode=="dark"?"light":"dark"}/> */}
        </div>
    </div>
  )
}

export default Navebar
// most of style we had use Ternary Operator TO change color in dark mode and light mode
