import React from 'react'

function Footer() {
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
                <h2>Contact Us</h2>
                <div>
                    <span>Email</span>
                    <p>parmarpranav456n@gmail.com</p>
                </div>
                <div>
                    <span>Phone</span>
                    <p>1234567</p>
                </div>
                <div>
                    <span>Address</span>
                    <p>88 road, borklyn USA</p>
                </div>
            </div>
            <div className='footer_box2'>
                <img src="images/logo.svg" alt="" />
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</p>
                <div className="social">
                    <div><i className="fa-brands fa-instagram"></i></div>
                    <div><i className="fa-brands fa-x-twitter"></i></div>
                    <div><i className="fa-brands fa-linkedin"></i></div>
                    <div><i className="fa-brands fa-pinterest"></i></div>
                </div>
            </div>
            <div className='footer_box3'>
                <h2>Utility Pages</h2>
                <p>Style Guide</p>
                <p>404 Not Found</p>  
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
            </div>
          </div>
          <div className="footer_contant_bottom">
          <p>Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span></p>
          </div>
        </div>
      </div>
  )
}

export default Footer