import React from "react";
import "./Explore.css";

function FavoritesList({ exploreFavorites }) {
  return (
    <ul className="explore-favorites-list">
      {exploreFavorites.map((exploreFavorites) => (
        <li key={exploreFavorites.id} className="favorite-fact">{exploreFavorites.caption}</li>
      ))}
    </ul>
  );
}

export default FavoritesList;