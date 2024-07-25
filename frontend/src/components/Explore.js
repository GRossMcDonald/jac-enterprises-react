import React from "react";
import ImageButton from "./ImageButton";
import SaveButton from "./SaveButton";
import Navbar from "./Navbar";
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
      <Navbar />
      <div className="content">
        <div className="image-button">
          <ImageButton
            setTitle={setTitle}
            setImage={setImage}
            setCaption={setCaption}
          />
        </div>
        <h2 className="title">{nasaTitle}</h2>
        <img className="image" src={nasaImage} alt="Space Image" />
        <p className="caption">{nasaCaption}</p>
        <div className="save-button">
          <SaveButton
            nasaTitle={nasaTitle}
            nasaImage={nasaImage}
            nasaCaption={nasaCaption}
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
