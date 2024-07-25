import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import FetchFavoriteJokesButton from "./FetchFavoriteJokesButton";
import FetchNewJokeButton from "./FetchNewJokeButton";
import SaveJokeButton from "./SaveJokeButton";

function Funnies() {
  const [joke, setJoke] = useState("");

  return (
    <div className="Funnies">
      <Navbar />
      <div className="joke-container">
        <p>{joke}</p>
      </div>
      <div className="test">
        <SaveJokeButton />
        <FetchNewJokeButton setJoke={setJoke} />
        <FetchFavoriteJokesButton />
      </div>
    </div>
  );
}
export default Funnies;
