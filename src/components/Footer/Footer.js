import "./Footer.scss";
import logo_offwhite from "../../icons/logo_offwhite.png";
import discord_yellow from "../../icons/social/discord_yellow.png"
import facebook_yellow from "../../icons/social/facebook_yellow.png"
import twitter_yellow from "../../icons/social/twitter_yellow.png"
import linkedin_yellow from "../../icons/social/linkedin_yellow.png"



export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <ul className="footer-social-links">
        <li className="footer-social-link-item"> <a href="https://www.linkedin.com/company/myth-game-studio/about/" target="_blank" className="footer-social-link"><img className="footer-icon" src={linkedin_yellow} alt="Logo" height={50} /></a></li>
          <li className="footer-social-link-item"> <a href="https://www.discord.com"  target="_blank" className="footer-social-link"><img className="footer-icon" src={discord_yellow} alt="Logo" height={50} /></a></li>
          <li className="footer-social-link-item"> <a href="https://www.facebook.com" target="_blank" className="footer-social-link"><img className="footer-icon" src={facebook_yellow} alt="Logo" height={50} /></a></li>
          <li className="footer-social-link-item"> <a href="https://www.twitter.com" target="_blank" className="footer-social-link"><img className="footer-icon" src={twitter_yellow} alt="Logo" height={50} /></a></li>
        </ul>
       
        <div className="footer-div-logo">
          <img className="footer-logo-img" src={logo_offwhite} alt="Logo" />
        </div>
      </div>
      <p className="footer-text">© 2022 Myth Game Studio All Rights Reserved</p>
    </div>
  );
}
