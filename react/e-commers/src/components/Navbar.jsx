import React,{ useState } from 'react'

const search = document.querySelector(".search");

let searchClick = () => {

}

const Navbar = (props) => {
  return (
    <div className='nav' id='nav'>
        <div className='component-fluid nav-box'>
          <div className='row'>
            <div className='col-md-4 nav-part nav-part1 bg-warning'>
              <i class="fa-solid fa-magnifying-glass search" onClick={searchClick}></i>
              <input type="text" className="search-box"></input>
              <div className='address'>
                
              </div>
            </div>
            <div className='col-md-4 nav-part nav-part2 bg-danger'>
              <div className='logo'>NILE</div>
            </div>
            <div className='col-md-4 nav-part nav-part3 bg-success'>
              <div className='row'>
              <i class="fa-duotone fa-brightness"></i>
              </div>

            </div>
          </div>
        </div> 
    </div>
  )
}

export default Navbar