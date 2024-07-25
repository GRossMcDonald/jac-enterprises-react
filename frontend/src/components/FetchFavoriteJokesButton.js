import React from "react";
import "./FetchFavoriteJokesButton.css";

function FetchFavoriteJokesButton({ setFavorites }) {
  const setFavoriteJokes = ({ setFavorites }) => {
    fetch("http://localhost:8080/api/jokes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json();
      })
      .then((data) => {
        setFavorites(data);
      })
      .catch((error) => {
        console.error(
          "There was an issue fetching the favorites jokes: " + error
        );
      });
  };

  return (
    <button className="funnies-buttons" onClick={setFavoriteJokes}>
      Show Favorite Jokes
    </button>
  );
}

export default FetchFavoriteJokesButton;
