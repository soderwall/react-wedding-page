import React from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as Svg1 } from "../img/dress.svg";
import { ReactComponent as Svg2 } from "../img/tux.svg";

export const Dresscode = (props) => {
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
              <Svg1 style={{ height: '1em', width: 'auto' }} /> &nbsp;
              <span className="text">Dresscode</span>  &nbsp;
              <Svg2 style={{ height: '1em', width: 'auto' }} />
            </h2>
            Vi ber våra gäster att klä sig i cocktail- eller semi-formell
            klädsel för att fira vårt bröllop. Vi vill att alla ska känna sig
            bekväma och njuta av festen, så tänk på att klä dig för att dansa
            och ha kul!
          </div>
        </div>
      </div>
    </div>
  );
};
