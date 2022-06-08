import "./Footer.scss";
import logo_offwhite from "../../icons/logo_offwhite.png";
import discord_white from "../../icons/social/discord_white.png";
import facebook_white from "../../icons/social/facebook_white.png";
import twitter_white from "../../icons/social/twitter_white.png";
import linkedin_white from "../../icons/social/linkedin_white.png";
import youtube_white from "../../icons/social/youtube_white.png";
import discord_yellow from "../../icons/social/discord_yellow.png";
import facebook_yellow from "../../icons/social/facebook_yellow.png";
import twitter_yellow from "../../icons/social/twitter_yellow.png";
import linkedin_yellow from "../../icons/social/linkedin_yellow.png";
import youtube_yellow from "../../icons/social/youtube_yellow.png";


export default function Footer() {
  function changeIconColorYellow(e) {
    if (e.currentTarget.id === "discord") {
      e.target.src = discord_yellow;
    }
    else if (e.currentTarget.id === "facebook"){
      e.target.src = facebook_yellow;
    }
    else if (e.currentTarget.id === "twitter"){
      e.target.src = twitter_yellow;
    }
    else if (e.currentTarget.id === "linkedin") {
      e.target.src = linkedin_yellow;
    }
    else if(e.currentTarget.id === "youtube") {
      e.target.src = youtube_yellow;
    }
    else{console.log('error id color change')}
  }

  function changeIconColorWhite(e) {
    if (e.currentTarget.id === "discord") {
      e.target.src = discord_white;
    }
    else if (e.currentTarget.id === "facebook"){
      e.target.src = facebook_white;
    }
    else if (e.currentTarget.id === "twitter"){
      e.target.src = twitter_white;
    }
    else if (e.currentTarget.id === "linkedin") {
      e.target.src = linkedin_white;
    }
    else if(e.currentTarget.id === "youtube") {
      e.target.src = youtube_white;
    }
    else{console.log('error id color change')}  }

  return (
    <div className="footer-container">
      <div className="footer-div">
        <ul className="footer-social-links">
          <li className="footer-social-link-item">
            {" "}
            <a
              href="https://www.linkedin.com/company/myth-game-studio/about/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <img
                id="linkedin"
                className="footer-icon"
                src={linkedin_white}
                onMouseOver={changeIconColorYellow}
                onMouseLeave={changeIconColorWhite}
                alt="Logo"
                height={50}
              />
            </a>
          </li>
          <li className="footer-social-link-item">
            {" "}
            <a
              href="https://www.youtube.com/watch?v=OGUjEUhRtVU"
              target="_blank"
              className="footer-social-link"
              rel="noreferrer"
            >
              <img
              id="youtube"
                className="footer-icon"
                src={youtube_white}
                onMouseOver={changeIconColorYellow}
                onMouseLeave={changeIconColorWhite}
                alt="Logo"
                height={50}
              />
            </a>
          </li>
          <li className="footer-social-link-item">
            {" "}
            <a
              href="https://www.discord.com"
              target="_blank"
              className="footer-social-link"
              rel="noreferrer"
            >
              <img id="discord"
                className="footer-icon"
                src={discord_white}
                onMouseOver={changeIconColorYellow}
                onMouseLeave={changeIconColorWhite}
                alt="Logo"
                height={50}
              />
            </a>
          </li>
          <li className="footer-social-link-item">
            {" "}
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="footer-social-link"
              rel="noreferrer"
            >
              <img id="facebook"
                className="footer-icon"
                src={facebook_white}
                onMouseOver={changeIconColorYellow}
                onMouseLeave={changeIconColorWhite}
                alt="Logo"
                height={50}
              />
            </a>
          </li>
          <li className="footer-social-link-item">
            {" "}
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-social-link"
              rel="noreferrer"
            >
              <img id="twitter"
                className="footer-icon"
                src={twitter_white}
                onMouseOver={changeIconColorYellow}
                onMouseLeave={changeIconColorWhite}
                alt="Logo"
                height={50}
              />
            </a>
          </li>
        </ul>

        <div className="footer-div-logo">
          <img className="footer-logo-img" src={logo_offwhite} alt="Logo" />
        </div>
      </div>
      <p className="footer-text">© 2022 Myth Game Studio All Rights Reserved</p>
    </div>
  );
}
