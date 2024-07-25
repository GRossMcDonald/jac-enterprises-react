import React from "react";
import "./FetchJokesButton.css";

function FetchJokesButton() {
  const fetchJokes = ({ setFavorites }) => {
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
    <button className="fetch-jokes" onClick={fetchJokes}>
      Show Favorite Jokes
    </button>
  );
}

export default FetchJokesButton;
