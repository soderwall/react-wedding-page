import React from "react";

import { useInView } from "react-intersection-observer";

export const Toastmasters = (props) => {
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
      <div id="resandes">
        <div className="container">
          <div className="resande-title text-center">
            <h2>
              <span className="text">
                Toastmasters &nbsp;
                <i class="bi bi-mic" style={{ color: "black" }}></i>
              </span>
            </h2>
            <p>
              Vi är tacksamma att ha <strong>Christopher Engström</strong> och{" "}
              <strong>Kristin Bjerkestrand</strong> som vår toastmaster och
              toastmadam för kvällen. Deras varma personligheter och engagemang
              kommer att bidra till att göra denna kväll extra speciell.
            </p>
            <p>
              Om någon önskar hålla tal under middagen så skriv till vår
              toastmaster Christopher på: &nbsp;
              <a href="mailto:christopher.a.engstrom@gmail.com">
                christopher.a.engstrom@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
