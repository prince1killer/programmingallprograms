import React,{useState} from "react";
import "./Style.css";
import { Link } from "react-router-dom";


// import { ReactPropTypes } from "react";

function Navbar(props) {
  
  // const colorMode = {
  //   color: props.mode == "light"?"White":"Black",
  //   backgroundColor: props.mode== "dark"?"white":"#130032",
  // }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg `} style={props.colorMode}>
        <div className="container-fluid">
          <Link className="navbar-brand col-md-1" to="/" style={props.colorMode}>  
            {props.title}
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link active" style={props.colorMode} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" style={props.colorMode} to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" style={props.colorMode} to="/word">
                  Word Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" style={props.colorMode} to="/description">
                  Description
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" style={props.colorMode} to="/">
                  Link
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch mode-title text-${props.mode}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.ReactPropTypes = {title:ReactPropTypes.string,
                    // aboutText:ReactPropTypes.string}                  

export default Navbar;
