import React from "react";
import twitch from "../assets/twitch.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/Instagram.jpg";

export default function Footer() {
  return (
    <footer>
      <h2>Suivez également Mouffette sur les réseaux !</h2>
      <div className="iconFooterBox">
        <a target="_blank" href="https://twitter.com/Mouffette_oui">
          <img className="iconFooter twitter" src={twitter} alt="twitter" />
        </a>
        <a target="_blank" href="https://www.twitch.tv/mouffette_">
          <img className="iconFooter twitch" src={twitch} alt="twitch" />
        </a>
        <a target="_blank" href="https://www.instagram.com/mouffette_">
          <img
            className="iconFooter instagram"
            src={instagram}
            alt="instagram"
          />
        </a>
      </div>
    </footer>
  );
}
