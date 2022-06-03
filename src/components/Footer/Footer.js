import "./Footer.scss";
import logo_offwhite from "../../icons/logo_offwhite.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <ul className="footer-social-links">
          <li className="footer-social-link-item"> <a className="footer-social-link"><img className="footer-icon"/></a></li>
          <li className="footer-social-link-item"> <a className="footer-social-link"><img className="footer-icon"/></a></li>
          <li className="footer-social-link-item"> <a className="footer-social-link"><img className="footer-icon"/></a></li>
          <li className="footer-social-link-item"> <a className="footer-social-link"><img className="footer-icon"/></a></li>

        </ul>
       
        <div className="footer-div-logo">
          <img className="footer-logo-img" src={logo_offwhite} alt="Logo" />
        </div>
      </div>
      <p className="footer-text">© 2022 Myth Game Studio All Rights Reserved</p>
    </div>
  );
}
