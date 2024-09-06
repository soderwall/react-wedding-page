import React from "react";
import { useInView } from "react-intersection-observer";

export const Rsvp = (props) => {
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
      <div id="bas" className="text-center">
        <div className="container">
          <div className="row"></div>
          <div className="bas-title">
            <h2 className="center-text bas-h2">
              <span className="text">
                Önskelista{" "}
                <i class="bi bi-envelope-heart style={{color: 'black'}}"></i>
              </span>
            </h2>

            <p>
              Vi har samlat våra önskemål på Illums Bolighus. Klicka på länken
              för att se vår &nbsp;
              <a
                href="https://www.illumsbolighus.no/onskeliste/andre?id=089fbc5858d09b68c908996f32"
                target="_blank"
                rel="noopener noreferrer"
              >
                önskelista
              </a>
            </p>
            <p>
              Om ni hellre önskar skänka ett bidrag till vår smekmånad, kan ni
              skicka valfritt belopp via Swish eller Vipps. Information om hur
              ni gör detta kommer att finnas tillgängligt under bröllopsdagen på
              plats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
