import React from "react";
import twitch from "../assets/twitch.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/Instagram.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="iconFooterBox">
        <a href="https://twitter.com/Mouffette_oui">
          <img className="iconFooter twitter" src={twitter} alt="" />
        </a>
        <a href="https://www.twitch.tv/mouffette_">
          <img className="iconFooter twitch" src={twitch} alt="" />
        </a>
        <a href="https://www.instagram.com/mouffette_">
          <img className="iconFooter instagram" src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
}
