import React from "react";
import "../App.css";
import waze from "../images/waze.png";

const First = () => {
  return (
    <div className="background">
      <div className="box">
        <a
          target="_blank"
          href="https://ul.waze.com/ul?place=ChIJJTWkLEkmVQ0RiGZfEZjrtkk&ll=44.82544530%2C-0.55640740&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          rel="noreferrer"
        >
          <img src={waze} alt="waze" className="waze" />
          <p>
            Clique ici pour découvrir ta destination...
            <br />
            <br />
            Rendez-vous le 2 Avril à 10h30... SUR PLACE !
          </p>
        </a>
      </div>
    </div>
  );
};

export default First;
