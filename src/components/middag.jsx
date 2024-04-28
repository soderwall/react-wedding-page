import React from "react";
import kalfarveiImage from "../img/kalfarvei_37.png";
import { useInView } from "react-intersection-observer";

export const Middag = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 2s ease-out",
      }}
    >
      <div id="middag">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img
                src={kalfarveiImage}
                alt="Kalfarveien 37"
                className="img-fluid fixed-width"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="alt-title">
                <h2>
                  <span className="text">
                    Middag och fest
                    <i
                      className="bi bi-balloon-heart"
                      style={{ color: "black" }}
                    ></i>
                  </span>
                </h2>
                <p>
                  Efter vigseln tar vi oss till Legenes Hus, där det bjuds på
                  trerätters, dricka och kaka.
                </p>
                <p>Baren stänger kl. 02.00 och alla måste vara ute 02.30.</p>
                <p>Kalfarveien 37, 5022 Bergen, Norge.</p>
                <div style={{ width: "100%", height: "100%" }}>
                  <iframe
                    title="Legenes Hus"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.491253539216!2d5.338172194417661!3d60.387563661785485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfeb22f3a064b%3A0xd7ceae6c7ee6a1de!2sKalfarveien%2037%2C%205022%20Bergen%2C%20Norway!5e0!3m2!1sen!2sse!4v1714332587786!5m2!1sen!2sse"
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
    </div>
  );
};
