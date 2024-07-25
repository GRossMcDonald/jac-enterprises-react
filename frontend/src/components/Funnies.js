import React from "react";
import Navbar from "./Navbar";
import FetchFavoriteJokesButton from "./FetchFavoriteJokesButton";
import FetchNewJokeButton from "./FetchNewJokeButton";
import SaveJokeButton from "./SaveJokeButton";
import ListOfFavoriteJokes from "./ListOfFavoriteJokes";

function Funnies({ joke, setJoke, favorites, setFavorite }) {
  return (
    <div className="Funnies">
      <Navbar />
      <div className="joke-container">
        <p>{joke}</p>
      </div>
      <div className="test">
        <SaveJokeButton joke={joke} />
        <FetchNewJokeButton setJoke={setJoke} />
        <FetchFavoriteJokesButton setFavorite={setFavorite} />
      </div>
      <ListOfFavoriteJokes favorites={favorites} />
    </div>
  );
}
export default Funnies;
