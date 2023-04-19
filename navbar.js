import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='left-box'>
        <h1><Link to ="/">Ambicus</Link></h1>
      </div>
      <div className='right-box'>
        <li id="chat"><Link to="/chat">chat</Link></li>
        <li id="notes"><Link to="/notes">notes</Link></li>
        
        <li id="register"><Link to ="/register">Register</Link></li>
        <li id="login"><Link to ="/signin">Login</Link></li>

        <li id="abt-us"><Link to="/aboutUs">About Us</Link></li>
      </div>
    </div>
  )
}

export default Navbar