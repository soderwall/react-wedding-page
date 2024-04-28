import React from "react";
import alt1 from "../img/01.jpeg";
import alt2 from "../img/02.png";
import { useInView } from "react-intersection-observer";

export const Resande = (props) => {
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
              <span className="text">Praktisk info till resande</span>
            </h2>
            <h3>
              Transport{" "}
              <i className="bi bi-airplane" style={{ color: "black" }}></i>
            </h3>
            <p>
              För er som kommer med flyg tar man sig lättast (och billigast)
              till och från flygplatsen/Bergen Centrum med hjälp av Bybanen.
              Ladda enkelt ned appen ’Skyss Billett’ för biljetter (går även att
              betala med kort på perongen).
            </p>
          </div>
          <div></div>
          <div className="row justify-content-center">
            <div className={"col-md-6 align-self-center"}>
              <div className="resande">
                <div className="resande-meta">Alternativ 1 </div>
                <div className="resande-image">
                  <img src={alt1} alt="" />
                </div>
                <div>
                  <p>
                    För dem som vill bo på hotell med kortast möjlig gångavstånd
                    från festen och väldigt nära Bybanen, så har vi fixat lite
                    bättre pris via en rabattkod på hotell Zander K.
                  </p>{" "}
                  <p>Adress: Zander Kaaes gate 8, 5015 Bergen, Norge. </p>{" "}
                  <p>
                    <a
                      href="http://www.zanderk.no/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      zanderk.no
                    </a>{" "}
                    Använd rabattkoden ’RAB15’ för att få 15% rabatt.
                  </p>
                </div>
              </div>
            </div>

            <div className={"col-md-6 align-self-center"}>
              <div className="resande">
                <div className="resande-meta">Alternativ 2</div>
                <div className="resande-image">
                  <img src={alt2} alt="" />
                </div>
                <div>
                  <p>
                    Rabattkoden fungerar även på ’Heimen hotell’ som är ett lite
                    billigare alternativ, men med lite längre gångavstånd från
                    festen och transport. Men Bergen centrum är ganska litet, så
                    gångavstånden är oavsett inte allt för långa.{" "}
                  </p>{" "}
                  <p>Adress: C. Sundts gate 18, 5004 Bergen, Norge </p>{" "}
                  <p>
                    <a
                      href="http://www.heimenhotel.no/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      heimenhotel.no
                    </a>{" "}
                    Använd rabattkoden ’RAB15’ för att få 15% rabatt.
                  </p>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>
              Detta är bara två alternativ för att hjälpa er på traven. Utöver
              dessa finns självklart många andra fina hotell i Bergen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
