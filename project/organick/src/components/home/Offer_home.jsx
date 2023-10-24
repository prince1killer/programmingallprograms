import React from 'react'
import Label_innerContent from "../LabelInnerContent";

function Offer_home(props) {
  return (
    <div>
        <div className="home_offer">
        <div>
          <div className="home_offer_title">Offer</div>
          <div className="home_content" style={{color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}}
          >We Offer Organic For You <button>View all product <i className="fa-solid fa-circle-arrow-right"></i></button></div>
          <div className="home_offer_contain">
            <div className="offer1 offer_store">
              <Label_innerContent mode={props.mode} imgName={"Imagehome_offer_1.png"} button={"Vegetable"} title={"Mung Bean"} price={"$11.00"}/>
            </div>
            <div className="offer2 offer_store">
              <Label_innerContent imgName={"Imagehome_offer_2.png"}  button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"}/>
            </div>
            <div className="offer3 offer_store">
              <Label_innerContent imgName={"Imagehome_offer_3.png"} button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"}/>
            </div>
            <div className="offer4 offer_store">
              <Label_innerContent  imgName={"Imagehome_offer_4.png"}  button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer_home