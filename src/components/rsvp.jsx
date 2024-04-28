import React from "react";
import { useIntersectionObserver } from '../js//useIntersectionObserver';

  
export const Rsvp = (props) => {
  const fade = useIntersectionObserver();
  return (
    <div ref={fade} id="bas" className="text-center">
      <div className="container">
        <div className="row"></div>
        <div className="bas-title">
          <h2 className="center-text bas-h2">
            <span className="text">RSVP <i class="bi bi-envelope-heart style={{color: 'black'}}"></i></span>
          </h2>
          <p>
            Vi ber ALLA svara INDIVIDUELLT på frågeformuläret:&nbsp;
            <a
              href="https://forms.gle/gKdWnwS2RHGWRFoTA"
              target="_blank"
              rel="noopener noreferrer"
            >
              HÄR
            </a>
          </p>
          <p>
            Vi älskar era fina barn, men denna dagen önskar vi att fira utan
            (självklart undantag för dem allra minsta).
          </p>
          <p>TOAST MADAM/MASTER KOMMER INOM KORT</p>
        </div>
      </div>
    </div>
  );
};
