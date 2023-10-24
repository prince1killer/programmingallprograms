import React from 'react'
import "./About.css"
import Person from '../../Person'

function About(props) {

    const Para ={color:props.mode == "dark" ? 'rgb(254, 255, 214)' : 'black'}

    const main = {color:props.mode == "dark" ? 'rgb(48, 210, 255)' : 'black'}
  
    const topic = {color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}

    return (
        <div className='about'>
            <div className="about_header">About</div>
            {/* ========================================== */}
            <div className="about_about_us">
                <div>
                    <div className="about_aboutus_title" >About</div>
                    <div className="about_aboutus_dis" style={topic}>We do Creative Things for Success</div>
                    <p style={Para}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <p style={Para}> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div>
                        <span>
                            <img src="images/Deliveryservices_icon3.png" alt="icon" /><label style={Para}>Modern Agriculture Equipment</label>
                        </span>
                        <span>
                            <img src="images/Chemical Plantaboutus_icon2.png" alt="icon" /><label style={Para}> No growth hormones are used</label>
                        </span>
                    </div>
                    <button>Explore More </button>
                </div>
            </div>
            {/* =============================================== */}
            <div className='about_choose'>
                <div className='about_choose_content'>
                    <div className="writen">
                        <div className="about_choose_title" >Why choose us?</div>
                        <div className="about_choose_dis">We do not buy from the open market & traders.</div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown</p>
                        <button><span></span> 100% Natural Product</button>
                        <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        <button><span></span> Increase Resistance</button>
                        <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                        <div className='about_choose_reason'>
                        </div>
                    </div>
                    <div >
                        <img src="images/Imagegallery2.png" alt="" />

                    </div>
                </div>
                <div className="about_choose_reason">
                    <div className="reason">
                        <img src="images/Iconabout_icon1.svg" alt="icon" />
                        <h2>Return Policy</h2>
                        <p>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="reason">
                        <img src="images/Iconabout_icon2.svg" alt="icon" />
                        <h2>100% Fresh</h2>
                        <p>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="reason">
                        <img src="images/Iconabout_icon3.svg" alt="icon" />
                        <h2>Support 24/7</h2>
                        <p>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="reason">
                        <img src="images/Iconabout_icon4.svg" alt="icon" />
                        <h2>Secured Payment</h2>
                        <p>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                </div>
            </div>
            {/* ================================================= */}
            <div className="about_team">
                <div className="about_team_title">Title</div>
                <div className="about_team_head" style={topic}>Our Organic Experts</div>
                <div className="about_team_dis" style={Para}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</div>
                <div className="about_team_content">
                    <Person img={"Photoabout_team1.jpg"} pname={"Giovani Bacardo"} profication={"Farmer"}/>
                    <Person img={"Photoabout_team2.jpg"} pname={"Giovani Bacardo"} profication={"Farmer"}/>
                    <Person img={"Photoabout_team3.jpg"} pname={"Giovani Bacardo"} profication={"Farmer"}/>
                </div>
            </div>
            {/* ================================================= */}
            <div className="about_aboutus">
                <div className="about_aboutus_title">About us</div>
                <div className='about_aboutus_dis' style={{color:"white",fontFamily:"var(--hand2)"}}>What We Offer for You</div>
                <div className="about_aboutus_contact_img">
                    <div><img src="images/Photoabout_aboutus_offer1.jpg" alt="img" /><span>Spicy</span></div>
                    <div><img src="images/Photoabout_aboutus_offer2.jpg" alt="img" /><span>Nuts & Feesd</span></div>
                    <div><img src="images/Photoabout_aboutus_offer3.jpg" alt="img" /><span>Fruits</span></div>
                    <div><img src="images/Photoabout_aboutus_offer4.jpg" alt="img" /><span>Vegetable</span></div>
                </div>
            </div>
        </div>
    )
}

export default About