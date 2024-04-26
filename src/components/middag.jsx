import React from "react";
import kalfarveiImage from "../img/kalfarvei_37.png";

export const Middag = (props) => {
  return (
    <div id="middag" className="full-width-background"> 
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={kalfarveiImage} alt="Kalfarveien 37" className="img-fluid fixed-width" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="alt-title">
              <h2>
                <span className="text">Middag och fest</span>
              </h2>
              <p>
                Efter vigseln tar vi oss till Legenes Hus, där det bjuds på trerätters, dricka och kaka.
              </p>
              <p>
                Baren stänger kl. 02.00 och alla måste vara ute 02.30. 
              </p>
              <p>
                Adress: Kalfarveien 37, 5022 Bergen, Norge.
              </p>
              <div>
                <a href="https://maps.app.goo.gl/4dQA2B3DgkERHjDe9" target="_blank" rel="noopener noreferrer">Länk till Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};