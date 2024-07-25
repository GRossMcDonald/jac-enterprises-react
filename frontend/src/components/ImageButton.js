import React from "react";
import "./ImageButton.css";

function ImageButton({ setTitle, setImage, setCaption }) {
  const fetchApod = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ddEe8fGIBWCwk3jWbM64esiEM3GUQjNd51NzYWLy",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        setTitle(data.title);
        setImage(data.url);
        setCaption(data.explanation);
      })
      .catch((error) => {
        console.error("There was a problem fetching the NASA data: " + error);
      });
  };

  return (
    <button className="button" onClick={fetchApod}>
      Get Astronomy Fact
    </button>
  );
}

export default ImageButton;
