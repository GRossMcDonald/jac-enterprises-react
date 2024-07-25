import React from "react";
import Navbar from "./Navbar";
import ShowFavoriteJokesButton from "./ShowFavoriteJokesButton";
import FetchNewJokeButton from "./FetchNewJokeButton";
import SaveJokeButton from "./SaveJokeButton";
import ListOfFavoriteJokes from "./ListOfFavoriteJokes";
import "./Funnies.css";

function Funnies({ joke, setJoke, favorites, setFavorites }) {
  return (
    <div className="Funnies">
      <Navbar />
      <div className="joke-container">
        <p id="joke">{joke}</p>
      </div>
      <div className="buttons">
        <SaveJokeButton joke={joke} />
        <FetchNewJokeButton setJoke={setJoke} />
        <ShowFavoriteJokesButton setFavorites={setFavorites} />
      </div>
      <div className="favorite-jokes-container">
        <ListOfFavoriteJokes favorites={favorites} />
      </div>
    </div>
  );
}
export default Funnies;
