import "./Footer.scss";
import logo_blue from "../../images/logo_blue.svg";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-div-item">
          <h2>STUDIO</h2>
          <ul className="footer-div-list">
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
            
          </ul>
        </div>
        <div className="footer-div-item">
          <h2>GAMES</h2>
          <ul className="footer-div-list">
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
            
          </ul>
        </div>
        <div className="footer-div-item">
          <h2>SUPPORT</h2>
          <ul className="footer-div-list">
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
           <li className="footer-list-item"> <a className="footer-list-link" href="/about">Lorem</a></li>
            
          </ul>
        </div>
        <div className="footer-div-item">
          <img
            className="footer-logo-img"
            src={logo_blue}
            alt="Logo"
            height={100}
          />
        </div>
      </div>
      <p className="footer-text">Copyright © Myth Game Studio</p>
    </div>
  );
}
