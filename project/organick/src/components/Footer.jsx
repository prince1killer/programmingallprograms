import React from 'react'

function Footer(props) {

  const Para ={color:props.mode == "dark" ? 'rgb(254, 255, 214)' : 'black'}

  const main = {color:props.mode == "dark" ? 'rgb(48, 210, 255)' : 'black'}

  const topic = {color:props.mode == "dark" ? 'rgb(245, 81, 11)' : 'var(--backgroundColor1)'}

  return (
    <div id="footer" className="footer">
        <div className="footer_content">
          <div className="footer_contant_title">
            <div className='footer_title_left'>
                <div>Subscribe to</div>
                <div>Our Newsletter</div>
            </div>
            <div className='footer_title_right'>
                <input type="text" placeholder='Enter your Email Address'/><button>Subscribe</button>
            </div>
          </div>
          <div className="footer_contant_middle">
            <div className='footer_box1'>
                <h2 style={topic}>Contact Us</h2>
                <div>
                    <span style={topic}>Email</span>
                    <p style={Para}>parmarpranav456n@gmail.com</p>
                </div>
                <div>
                    <span style={topic}>Phone</span>
                    <p style={Para}>1234567</p>
                </div>
                <div>
                    <span style={topic}>Address</span>
                    <p style={Para}>88 road, borklyn USA</p>
                </div>
            </div>
            <div className='footer_box2'>
                <img src="images/logo.svg" alt="" />
                <p style={Para}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</p>
                <div className="social">
                    <div><i className="fa-brands fa-instagram"></i></div>
                    <div><i className="fa-brands fa-x-twitter"></i></div>
                    <div><i className="fa-brands fa-linkedin"></i></div>
                    <div><i className="fa-brands fa-pinterest"></i></div>
                </div>
            </div>
            <div className='footer_box3'>
                <h2 style={topic}>Utility Pages</h2>
                <p style={Para}>Style Guide</p>
                <p style={Para}>404 Not Found</p>  
                <p style={Para}>Password Protected</p>
                <p style={Para}>Licences</p>
                <p style={Para}>Changelog</p>
            </div>
          </div>
          <div className="footer_contant_bottom">
          <p style={main}>Copyright © <span style={Para}>Organick</span> | Designed by <span style={Para}>VictorFlow</span> Templates - Powered by <span style={Para}>Webflow</span></p>
          </div>
        </div>
      </div>
  )
}

export default Footer