import React from "react";
import "./SaveJokeButton.css";

function SaveJokeButton({ joke }) {
  const saveJoke = () => {
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

        alert("Joke saved as favorite!");
      })
      .catch((error) => {
        console.error("There was a problem saving the joke: " + error);
      });
  };

  return <button onClick={saveJoke}>Save as Favorite</button>;
}

export default SaveJokeButton;
