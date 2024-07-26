import React from "react";
import "./ListOfFavoriteJokes.css";

function ListOfFavoriteJokes({ favorites }) {
  return (
    <div className="ListOfFavoriteJokes">
      <ul className="jokes-list">
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfFavoriteJokes;
