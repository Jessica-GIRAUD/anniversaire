import React from "react";
import "../App.css";
import waze from "../images/brand_waze_icon_158625.png";

const Second = () => {
  return (
    <div className="background">
      <a
        target="_blank"
        className="waze"
        href="https://ul.waze.com/ul?place=ChIJXXF6pzWZVA0RQNMhHO0RqUg&ll=44.64025980%2C-1.13288460&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        rel="noreferrer"
      >
        <img src={waze} alt="waze" style={{ width: "100%" }} />
        <p style={{ textAlign: "center", marginTop: 0 }}>
          Clique ici pour découvrir ta destination finale...
          <br />
          <br />
          {"Bon week-end Moumoune <3"}
        </p>
      </a>
    </div>
  );
};

export default Second;
