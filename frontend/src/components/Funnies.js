import React from "react";
import Navbar from "./Navbar";
import LaughingKidsImage from "./LaughingKidsImage";
import FetchNewJokeButton from "./FetchNewJokeButton";
import SaveJokeButton from "./SaveJokeButton";
import ListOfFavoriteJokes from "./ListOfFavoriteJokes";
import "./Funnies.css";

function Funnies({ joke, setJoke, favorites, setFavorites }) {
  return (
    <div className="Funnies">
      <Navbar />
      <div className="content-funnies">
        <div className="horizontal">
          <div className="left-horizontal">
            <div className="laughing-kids-container">
              <div className="laughing-kids">
                <LaughingKidsImage />
              </div>
            </div>
          </div>
          <div className="buttons-and-text-container">
            <div className="joke-text-container">
              <p>{joke}</p>
            </div>
            <div className="buttons-container">
              <div className="joke-button-container">
                <FetchNewJokeButton setJoke={setJoke} />
              </div>
              <div className="save-joke-button-container">
                <SaveJokeButton joke={joke} setFavorites={setFavorites} />
              </div>
            </div>
            <div className="favorite-jokes-list-container">
              <div className="jokes-list-title-positioner">
                <div className="jokes-list-title-container">
                  <p id="jokes-list-title">FAVORITE JOKES</p>
                </div>
              </div>
              <div className="jokes-list-container">
                <ListOfFavoriteJokes favorites={favorites} />
              </div>
            </div>
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
        
      */}
    </div>
  );
}
export default Funnies;
