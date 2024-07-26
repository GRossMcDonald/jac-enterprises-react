import React from "react";

function ListOfFavoriteJokes({ favorites }) {
  return (
    <div className="jokes-list-container">
      <ul className="jokes-list">
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfFavoriteJokes;
