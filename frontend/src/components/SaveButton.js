import React from "react";

function SaveButton({ nasaTitle, nasaImage, nasaCaption }) {
  const saveApod = () => {
    fetch("http://localhost:8080/api/nasa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nasaTitle,
        image: nasaImage,
        caption: nasaCaption,
      }),
    })
      .then((response) => {
        if (!response) {
          throw new Error("Image saving was unsuccessful.");
        }

        alert("Image saved as favorite!");
      })
      .catch((error) => {
        console.error("There was a problem saving the image " + error);
      });
  };

  return (
    <button className="button" onClick={saveApod}>
      Save as Favorite
    </button>
  );
}

export default SaveButton;
