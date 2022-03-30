import React from "react";
import "../App.css";
import waze from "../images/waze.png";

const Second = () => {
  return (
    <div className="background2">
      <div className="box">
        <a
          target="_blank"
          href="https://ul.waze.com/ul?place=ChIJXXF6pzWZVA0RQNMhHO0RqUg&ll=44.64025980%2C-1.13288460&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          rel="noreferrer"
        >
          <img src={waze} alt="waze" className="waze" />
          <p>
            Clique ici pour découvrir ta destination finale...
            <br />
            <br />
            {"Bon week-end Moumoune <3"}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Second;
