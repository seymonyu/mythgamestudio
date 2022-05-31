import "./Footer.scss";
import logo_blue from "../../icons/logo_blue.svg";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-div-item">
          
        </div>
        <div className="footer-div-item">
          
        </div>
        <div className="footer-div-item">
         
        </div>
        <div id="footer-div-logo" className="footer-div-item">
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
