import React from "react";

function FavoritesButton({ setExploreFavorites }) {
  const fetchFavorites = () => {
    fetch("http://localhost:8080/api/explore")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExploreFavorites(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching favorite jokes : " + error);
      });
  };

  return <button className="explore-buttons" onClick={fetchFavorites}>Show Favorite Facts</button>;
}

export default FavoritesButton;