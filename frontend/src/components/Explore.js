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
      <div className="content-explore">
        <h2 className="title">{nasaTitle}</h2>
        {!nasaImage ? (
          <img
            className="image"
            src={require("./images/explore.png")}
            alt="Space"
          />
        ) : (
          <img className="image" src={nasaImage} alt="Space" />
        )}
        <div className="button">
          <ImageButton
            setTitle={setTitle}
            setImage={setImage}
            setCaption={setCaption}
          />
          <SaveButton
            nasaTitle={nasaTitle}
            nasaImage={nasaImage}
            nasaCaption={nasaCaption}
          />
        </div>
        {!nasaCaption ? (
          <p className="caption">
            Today's astronomical wonders are just a button click away.
          </p>
        ) : (
          <p className="caption">{nasaCaption}</p>
        )}
      </div>
    </div>
  );
}
export default Explore;
