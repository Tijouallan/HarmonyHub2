import * as React from "react";
import Exemple from "../img/sefa.jpg";

const Post = () => {
  const posts = [
    {
      id: 1,
      title: "Titre",
      artist: "artiste",
      image: Exemple,
      link: "./",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="music">
            <img src={post.image} alt="album cover" />
            <div className="info">
              <strong>{post.title}</strong>
              <p>{post.artist}</p>
              {/* <Link></Link> */}
              <a href={post.link}>le ptit lien en sah</a>
            </div>
          </div>
          <div className="evaluation">
            <p>thumbup</p>
            <p>thumbdown</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Post;
