import "./Footer.scss";
import logo_violette from "../../icons/logo_violette.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-div-item"></div>
        <div className="footer-div-item"></div>
        <div className="footer-div-item"></div>
        <div id="footer-div-logo" className="footer-div-item">
          <img className="footer-logo-img" src={logo_violette} alt="Logo" />
        </div>
      </div>
      <p className="footer-text">Copyright © Myth Game Studio</p>
    </div>
  );
}
