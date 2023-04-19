import React from "react";
import logo from "../assets/mouffette.webp";

export default function Header() {
  return (
    <header>
      <img className="logoMouffette" src={logo} alt="" />
      <div className="titleMouffetteBox">
        <h1>Mouffette</h1>
        <h2>Dessinatrice/Créatrice de contenu</h2>
      </div>
    </header>
  );
}
