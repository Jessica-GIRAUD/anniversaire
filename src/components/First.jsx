import React from "react";
import "../App.css";
import waze from "../images/brand_waze_icon_158625.png";

const First = () => {
  return (
    <div className="background">
      <a
        target="_blank"
        className="waze"
        href="https://ul.waze.com/ul?place=ChIJJTWkLEkmVQ0RiGZfEZjrtkk&ll=44.82544530%2C-0.55640740&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        rel="noreferrer"
      >
        <img src={waze} alt="waze" style={{ width: "100%" }} />
        <p style={{ textAlign: "center", marginTop: 0 }}>
          Clique ici pour découvrir ta destination...
          <br />
          <br />
          Rendez-vous le 2 Avril à 10h30... SUR PLACE !
        </p>
      </a>
    </div>
  );
};

export default First;
