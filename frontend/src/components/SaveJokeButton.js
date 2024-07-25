import React from "react";
import "./SaveJokeButton.css";

function SaveJokeButton({ joke, setFavorites }) {
  const saveJokeAndFetchFavoriteJokes = () => {
    fetch("http://localhost:8080/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: joke }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Joke saving was unsuccessful.");
        }
      })
      .catch((error) => {
        console.error("There was a problem saving the joke: " + error);
      });

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
    <button onClick={saveJokeAndFetchFavoriteJokes}>Save as Favorite</button>
  );
}

export default SaveJokeButton;
