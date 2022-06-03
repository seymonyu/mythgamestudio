import { Link } from "react-router-dom";
import './Nav.scss'
import logo_with_text from "../../icons/logo_with_text.svg";
import React, { useLocation } from 'react';



export default function Nav() {



    return (
    <div className="nav-container" >
        <Link className="home-link-logo"to="/"><div className="navbar-logo">
          
          <img
            className="nav-logo-img"
            src={logo_with_text}
            alt="Logo"
           
          />
        </div></Link>
        
      <nav className="nav-list">
        <Link className= 'nav-link'  to="/games">GAMES</Link>
        <Link  className="nav-link" to="/about">ABOUT</Link>
        <Link  className="nav-link" to="/contact">CONTACT</Link>
        <Link  className="nav-link" to="/blog">BLOG</Link>

      </nav>
    </div>
  );
}
