import React from "react";
import bgImage from "../img/kyrkan.jpg";
export const Vigseln = (props) => {
  return (
    <div id="bas">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            
            <img src={bgImage} className="img-fluid fixed-width" />
            
          </div>
          <div className="col-xs-12 col-md-6">
          <div className="bas-title-alt">
              <h2>
                <span className="text">Vigseln</span>
              </h2>
              <p>Sker i Årstad Kirke kl. 14.00.</p>
              <p>Adress: Jonas Lies vei 55, 5053 Bergen, Norge</p>
              <div>
      <a href="https://maps.app.goo.gl/zRYLmfHW8o4uwFPr7" target="_blank" rel="noopener noreferrer">Link to Google Maps</a>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};