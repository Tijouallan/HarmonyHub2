import React from "react";
import Exemple from "../img/sefa.jpg";

const Post = () => {
  return (
    <div className="post">
      <div className="music">
        <img src={Exemple} alt="sefa" />
        <div className="info">
          <strong>Titre</strong>
          <p>artiste</p>
          <a href="./">le ptit lien en sah</a>
        </div>
      </div>
      <div className="evaluation">
        <p>thumbup</p>
        <p>thumbdown</p>
      </div>
    </div>
  );
};
export default Post;
