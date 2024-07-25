import React from "react";
import "./SaveJokeButton.css";

function SaveJokeButton({ joke, setFavorites }) {
  const saveJokeAndFetchFavoriteJokes = () => {
    fetch("http://localhost:8080/api/jokes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json();
      })
      .then((favorites) => {
        if (favorites.some((fav) => fav.text === joke)) {
          alert("This joke has already been saved!");
          return;
        }

        fetch("http://localhost:8080/api/jokes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: joke }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Saving the joke was unsuccessful.");
            }
            return fetch("http://localhost:8080/api/jokes");
          })
          .then((response) => response.json())
          .then((data) => setFavorites(data))
          .catch((error) => {
            console.error("There was a problem saving the joke: " + error);
          });
      })
      .catch((error) => {
        console.error(
          "There was a problem fetching the favorite jokes: " + error
        );
      });
  };

  return (
    <button onClick={saveJokeAndFetchFavoriteJokes}>Save as Favorite</button>
  );
}

export default SaveJokeButton;
