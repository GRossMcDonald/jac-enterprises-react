import React from "react";

function ListOfFavoriteJokes({ favorites }) {
  return (
    <ul>
      {favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.text}</li>
      ))}
    </ul>
  );
}

export default ListOfFavoriteJokes;
