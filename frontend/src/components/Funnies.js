import React from "react";
import Navbar from "./Navbar";
import FetchJokesButton from "./FetchJokesButton";

function Funnies() {
  return (
    <div className="Funnies">
      <Navbar />
      <FetchJokesButton />
    </div>
  );
}
export default Funnies;
