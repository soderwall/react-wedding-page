import React from "react";
import bgImage from "../img/kyrkan.jpg";
import { ReactComponent as ChurchIcon } from "../img/church.svg";
import { useIntersectionObserver } from "../js//useIntersectionObserver";

export const Vigseln = (props) => {
  const fade = useIntersectionObserver();
  return (
    <div ref={fade} id="bas">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={bgImage} className="img-fluid fixed-width" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="bas-title-alt">
              <h2>Vigseln</h2>
              <p>Sker i Årstad Kirke kl. 14.00.</p>
              <p>Adress: Jonas Lies vei 55, 5053 Bergen, Norge</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.2462340925747!2d5.347493894412442!3d60.37509216277757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf949909a9045%3A0xfeb778a3821a21da!2s%C3%85rstad%20kirke!5e0!3m2!1sen!2sse!4v1714332548560!5m2!1sen!2sse"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  allowFullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
