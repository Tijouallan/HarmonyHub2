import React from "react";

import Post from "./components/Post";

import AddButton from "./components/AddButton";

const Home = () => {
  return (
    <div className="container">
      <AddButton></AddButton>
      <Post></Post>
    </div>
  );
};
export default Home;
