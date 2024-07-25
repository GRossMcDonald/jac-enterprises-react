import React from "react";
import "./FetchNewJokeButton.css";

function FetchNewJokeButton({ setJoke }) {
  const fetchNewJoke = () => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json();
      })
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => {
        console.error(
          "There was a big problem fetching the new joke: " + error
        );
      });
  };

  return <button onClick={fetchNewJoke}>Get Dad Joke</button>;
}
export default FetchNewJokeButton;
