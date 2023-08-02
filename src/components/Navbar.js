import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import { Link } from 'react-router-dom'
// class : className
// <label htmlFor="name">Enter your name: </label>
// for : htmlFor




export default function Navbar(props) {

  return (
    <div>
        {/* for light change dark by light  */}
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.heading}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.about}</Link>
                </li>
              </ul>

              <div className="bg-success my-2 mx-2" onClick={()=>{props.ToggleMode('success')}} style={{cursor:"pointer",height:"20px",width:"20px"}}></div>
              <div className="bg-primary my-2 mx-2" onClick={()=>{props.ToggleMode('primary')}} style={{cursor:"pointer",height:"20px",width:"20px"}}></div>
              <div className="bg-danger my-2 mx-2" onClick={()=>{props.ToggleMode('danger')}} style={{cursor:"pointer",height:"20px",width:"20px"}}></div>
              <div className="bg-warning my-2 mx-2" onClick={()=>{props.ToggleMode('warning')}} style={{cursor:"pointer",height:"20px",width:"20px"}}></div>
              <div className="bg-light my-2 mx-2" onClick={()=>{props.ToggleMode('light')}} style={{cursor:"pointer",height:"20px",width:"20px",border:"1px solid #E2DFD2"}}></div>
              <div className="bg-dark my-2 mx-2" onClick={()=>{props.ToggleMode('dark')}} style={{cursor:"pointer",height:"20px",width:"20px",border:"1px solid #E2DFD2"}}></div>



              {/* <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                  <input className="form-check-input" onClick={()=>{props.ToggleMode('null');}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode} Mode</label>
              </div> */}
              

            </div>
          </div>

        </nav>
    </div>
  )
}

// To set the type of props 
Navbar.propTypes={
  heading:PropTypes.string.isRequired, //accept strig value 
  about:PropTypes.string.isRequired
}

Navbar.defaultProps = {
  heading:"Set Title here"
};