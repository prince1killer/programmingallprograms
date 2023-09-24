import React from "react";
import "./Home.css"

const InternalItem = (props) => {
  return (
    <>
      <button>{props.button}</button>
      <div className="box_bottom">
        <p>{props.title}</p>
        <hr />
        <div>
          <div>
            <strike>$20.00</strike>
            <span>{props.price}</span>
          </div>
          <div className="star">
            <img src="images/Star 7Star.png" alt="" />
            <img src="images/Star 7Star.png" alt="" />
            <img src="images/Star 7Star.png" alt="" />
            <img src="images/Star 7Star.png" alt="" />
            <img src="images/Star 7Star.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}


const Home = () => {

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
            <div className="home_aboutus_title">About us</div>
            <div className="home_aboutus_head">We Believe in Working<br /> Accredited Farmers</div>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className="home_aboutus_icon"></div>
            <button>Shop now<i class="fa-solid fa-circle-arrow-right"></i></button>
          </div>
        </div>
      </div>
      {/* ================================ product ================================= */}
      <div className="home_product">
        <div className="home_product_content">
          <div className="home_product_content_title">Categories</div>
          <div className="home_product_content_head">Our Products</div>
          <div className="home_product_contect_boxs">
            <div className="box1">
              <div className="box1_box1 box"><InternalItem button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"} /></div>
              <div className="box1_box2 box"><InternalItem button={"Fresh"} title={"Fresh Banana Fruites"} price={"$14.00"} /></div>
              <div className="box1_box3 box"><InternalItem button={"Millets"} title={"White Nuts"} price={"$15.00"} /></div>
              <div className="box1_box4 box"><InternalItem button={"Vegetable"} title={"Vegan Red Tomato"} price={"$17.00"} /></div>
            </div>
            <div className="box2">
              <div className="box2_box1 box"><InternalItem button={"Health"} title={"Mung Bean"} price={"$11.00"} /></div>
              <div className="box2_box2 box"><InternalItem button={"Nuts"} title={"Brown Hazelnut"} price={"$12.00"} /></div>
              <div className="box2_box3 box"><InternalItem button={"Fresh"} title={"Egg"} price={"$17.00"} /></div>
              <div className="box2_box4 box"><InternalItem button={"Fresh"} title={"Zelco Suji Elaichi Rusk"} price={"$15.00"} /></div>
            </div>
          </div>
        </div>
        <button>Load More<i class="fa-solid fa-circle-arrow-right"></i></button>
      </div>
      {/* ============================= Testimonial  ===================================== */}
      <div className="home_testimonial">
        <div className="home_testimonial_contain">
          <div className="contain_title">Testimonial</div>
          <div className="contain_head">What Our Customer Saying?</div>
          <img src="images/Imageperson.png" alt="person img" />
          <div className="stars">
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
            <img src="images/Star 7Star.png" alt="images" />
          </div>
          <div className="contain_discription">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply <br /> dummy text of the printing and typesetting industry. Lorem Ipsum has been.</div>
          <div className="contain_name">Sara Taylor</div>
          <div>Consumer</div>
          <div className="contain_count">
            <div>
              <p>100</p>
              Organic
            </div>
            <div>
              <p>285</p>
              Active Product
            </div>
            <div>
              <p>350+</p>
              Organic Orchads
            </div>
            <div>
              <p>25+</p>
              Year of Farming
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;