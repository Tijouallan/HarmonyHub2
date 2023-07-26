import React from "react";
import Logo from "../img/harmonyHub.png";

const Accueil = () => {
  return (
    <div className="navbar">
      <div class="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div class="right-elements">
        <div class="connexion">Connexion</div>
        <div class="inscription">Inscription</div>
      </div>
    </div>
  );
};
export default Accueil;
