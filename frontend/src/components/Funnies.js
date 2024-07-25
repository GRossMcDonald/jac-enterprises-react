import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

function Funnies() {
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
    <div className="Funnies">
      <Navbar />
      <button onClick={fetchJokes}>Show Favorite Jokes</button>
    </div>
  );
}
export default Funnies;
