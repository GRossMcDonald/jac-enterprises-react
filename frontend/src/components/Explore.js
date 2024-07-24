import React from "react";
import ImageButton from "./ImageButton";
import SaveButton from "./SaveButton";
import "./Explore.css";

function Explore({
  nasaTitle,
  nasaImage,
  nasaCaption,
  setTitle,
  setImage,
  setCaption,
}) {
  return (
    <div className="explore-container">
      <ImageButton
        setTitle={setTitle}
        setImage={setImage}
        setCaption={setCaption}
      />
      <h2 className="title">{nasaTitle}</h2>
      <img className="image" src={nasaImage} alt="Space Image" />
      <p className="caption">{nasaCaption}</p>
      <SaveButton
        nasaTitle={nasaTitle}
        nasaImage={nasaImage}
        nasaCaption={nasaCaption}
      />
    </div>
  );
}

export default Explore;
