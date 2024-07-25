import React from "react";
import Navbar from "./Navbar";
import LaughingKidsImage from "./LaughingKidsImage";
import ShowFavoriteJokesButton from "./ShowFavoriteJokesButton";
import FetchNewJokeButton from "./FetchNewJokeButton";
import SaveJokeButton from "./SaveJokeButton";
import ListOfFavoriteJokes from "./ListOfFavoriteJokes";
import "./Funnies.css";

function Funnies({ joke, setJoke, favorites, setFavorites }) {
  return (
    <div className="Funnies">
      <Navbar />
      <div className="content">
        <div className="horizontal">
          <div className="laughing-kids-container">
            <div className="laughing-kids">
              <LaughingKidsImage />
            </div>
          </div>
          <div className="generate-joke-button-container">
            <FetchNewJokeButton setJoke={setJoke} />
          </div>
        </div>
      </div>
      {/*
        <div className="joke-container">
          <p id="joke">{joke}</p>
        </div>
        <div className="buttons">
          <ShowFavoriteJokesButton setFavorites={setFavorites} />
        </div>
        <div className="favorite-jokes-container">
          <ListOfFavoriteJokes favorites={favorites} />
        </div>
        <div className="save-joke-button-container">
          <SaveJokeButton joke={joke} />
        </div>
      */}
    </div>
  );
}
export default Funnies;
