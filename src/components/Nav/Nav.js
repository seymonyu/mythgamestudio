import { Link, useLocation } from "react-router-dom";
import './Nav.scss'
import logo_with_text_violette from "../../icons/logo_with_text_violette.svg";
import React from 'react';



export default function Nav() {

const location = useLocation();
console.log(location)
return (
      
    <div className="nav-container" >
        <Link className="home-link-logo"to="/"><div className="navbar-logo">
          
          <img
            className="nav-logo-img"
            src={logo_with_text_violette}
            alt="Logo"
           
          />
        </div></Link>
        
        <nav className="nav-list">
        <Link className= 'nav-link'  to="/">GAMES</Link>
        <Link  className="nav-link" to="/">ABOUT</Link>
        <Link  className="nav-link" to="/">CONTACT</Link>
        <Link  className="nav-link" to="/">BLOG</Link>

      </nav>

    </div>
  );
}
