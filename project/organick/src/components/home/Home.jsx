import React from "react";
import "./Home.css"
import LabelInnerContent from "../LabelInnerContent";
import Offer_home from "./Offer_home";
import News_contain from "../NewsContain";


const CountValue = (props) => {
  return (
    <div>
      <svg width="150" height="150" viewBox="25 40 204 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="127" cy="127" r="90" stroke="rgb(2, 188, 2)" strokeWidth="10" />
      </svg>
      <div className="contain_count_value">
        <p>{props.number}</p>
        {props.name} 
      </div>
    </div>
  )
}

const Home = (props) => {

  return (
    <div className="home" id="home">
      <div className="home_cover">
        <div className="home-cover-background"></div>
        <div className="home-natueal-text">100% Natural Food</div>
        <div className="home-other-text">
          <span>Choose the best</span>
          <span>Healthier way</span>
          <span>of life</span>
        </div>
      </div>
      <div className="home-second">
        <div className="home-second_one home-second_box">
          <div>
            <div className="home-second_one_natural cursive">Natural!!</div>
            <div className="home-second_one_write letter">Get Garden</div>
            <div className="home-second_one_write letter">Fresh Fruit</div>
          </div>
        </div>
        <div className="home-second_two home-second_box">
          <div>
            <div className="home-second_two_natural cursive">Offer!!</div>
            <div className="home-second_two_write letter">Get 10% Off</div>
            <div className="home-second_two_write letter">on Vegetable</div>
          </div>
        </div>
      </div>
      {/* ================================== About  =================================== */}
      <div className="home_aboutus">
        <div className="home_aboutus_content">
          <div className="home_aboutus_content_work">
            <div className="home_aboutus_title" style={{color:props.mode == "dark" ? 'rgb(48, 210, 255)' : 'green'}}>About us</div>
            <div className="home_aboutus_head"  style={{color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}}>We Believe in Working<br /> Accredited Farmers</div>
            <p style={{color:props.mode == "dark" ? 'rgb(254, 255, 214)' : 'black'}}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className="home_aboutus_icon"></div>
            <button>Shop now<i className="fa-solid fa-circle-arrow-right"></i></button>
          </div>
        </div>
      </div>
      {/* ================================ product ================================= */}
      <div className="home_product">
        <div className="home_product_content">
          <div className="home_product_content_title" >Categories</div>
          <div className="home_product_content_head" style={{color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}} >Our Products</div>
          <div className="home_product_contect_boxs">
            <div className="box1">
              <div className="box1_box1 box"><LabelInnerContent imgName={"Imagecontectp1.png"} button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"} /></div>
              <div className="box1_box2 box"><LabelInnerContent imgName={"Imagecontectp2.png"} button={"Fresh"} title={"Fresh Banana Fruites"} price={"$14.00"} /></div>
              <div className="box1_box3 box"><LabelInnerContent imgName={"Imagecontectp3.png"} button={"Millets"} title={"White Nuts"} price={"$15.00"} /></div>
              <div className="box1_box4 box"><LabelInnerContent imgName={"Imgcontectp4.png"} button={"Vegetable"} title={"Vegan Red Tomato"} price={"$17.00"} /></div>
            </div>
            <div className="box2">
              <div className="box2_box1 box"><LabelInnerContent imgName={"Imgcontectp5.png"} button={"Health"} title={"Mung Bean"} price={"$11.00"} /></div>
              <div className="box2_box2 box"><LabelInnerContent imgName={"Imagecontectp6.png"} button={"Nuts"} title={"Brown Hazelnut"} price={"$12.00"} /></div>
              <div className="box2_box3 box"><LabelInnerContent imgName={"Imagecontectp7.png"} button={"Fresh"} title={"Egg"} price={"$17.00"} /></div>
              <div className="box2_box4 box"><LabelInnerContent imgName={"Imagehomeproduct8.png"} button={"Fresh"} title={"Zelco Suji Elaichi Rusk"} price={"$15.00"} /></div>
            </div>
          </div>
        </div>
        <button>Load More<i className="fa-solid fa-circle-arrow-right"></i></button>
      </div>
      {/* ============================= Testimonial  ===================================== */}
      <div className="home_testimonial">
        <div className="home_testimonial_contain">
          <div className="contain_title">Testimonial</div>
          <div className="contain_head" style={{color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}}>What Our Customer Saying?</div>
          <img src="images/Imageperson.png" alt="person img" />
          <div className="stars">
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />j
            <img src="images/Star 7Star.png" alt="images" />
          </div>
          <div className="contain_discription">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply <br /> dummy text of the printing and typesetting industry. Lorem Ipsum has been.</div>
          <div className="contain_name">Sara Taylor</div>
          <div>Consumer</div>
          <div className="contain_count">
            <CountValue number={"100%"} name={"Organic"}/>
            <CountValue number={"285"} name={"Active Product"}/>
            <CountValue number={"350+"} name={"Organic Orchads"}/>
            <CountValue number={"25+"} name={"Year of feaming"}/>
          </div>
        </div>
      </div>
      {/* =============================== offer  ================================= */}
      <Offer_home mode={props.mode}/>
      {/* ================================ upcomming ================================ */}
      <div className="home_upcoming">
        <div className="home_upcoming_cover">
          <div className="home_upcoming_cover_box1 home_upcoming_cover_box"><button>Organic Juice</button></div>
          <div className="home_upcoming_cover_box2 home_upcoming_cover_box"><button>Organic Fruit</button></div>
          <div className="home_upcoming_cover_box3 home_upcoming_cover_box"><button>Nuts Cookies</button></div>
        </div>
      </div>
      {/* ================================== NEWS ============================= */}
      <div className="home_news">
        <div className="home_news_container">
          <div className="home_news_title">News</div>
          <div className="home_news_description"><p style={{color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}}> Discover weekly content about organic food, & more </p> <button>View More <i className="fa-solid fa-circle-arrow-right"></i></button> </div>
          <div className="home_news_contain">
            <News_contain img={"Imagenews1.png"} title={"The Benefits of Vitamin D & How to Get It"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <News_contain img={"Imagenews2.png"} title={"Our Favorite Summertime Tomato"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
          </div>
        </div>
      </div>
      {/* ========================================== footer =========================== */}

      

    </div>
  )
}
export default Home;