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

              {/* <div className="red" onClick={bg("red")} >🔴</div> */}
              {/* <div className="green" onClick={props.ToggleMode}>🟢</div>
              <div className="blue" onClick={props.ToggleMode}>🔵</div>
              <div className="purple" onClick={props.ToggleMode}>🟣</div> */}

              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                  <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode} Mode</label>
              </div>
              

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