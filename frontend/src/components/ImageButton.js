import React from "react";
import "./ImageButton.css";

function ImageButton({ setTitle, setImage, setCaption }) {
  const fetchApod = () => {
    const randomDate = getRandomDate(new Date(1995, 5, 16), new Date());
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=ddEe8fGIBWCwk3jWbM64esiEM3GUQjNd51NzYWLy&date=${randomDate}`,
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

  const getRandomDate = (start, end) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <button className="explore-buttons" onClick={fetchApod}>
      Get Astronomy Fact
    </button>
  );
}

export default ImageButton;
