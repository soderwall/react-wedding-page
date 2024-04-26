import React from "react";

export const Rsvp = (props) => {
  return (
    <div id="bas" className="text-center">
      <div className="container">
        <div className="row"></div>
        <div className="bas-title">
          <h2 className="center-text bas-h2"><span className="text">RSVP</span></h2>
          <p>
            Vi ber ALLA svara INDIVIDUELLT på frågeformuläret:&nbsp;
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScXCgD05knC5GPNJAhQni9MUL87ihMZuxbaFqCHcuJdeKRwIw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              HÄR (behöver en bättre länk)
            </a>
          </p>
          <p>
            Vi älskar era fina barn, men denna dagen önskar vi att fira utan (självklart undantag för dem allra minsta).
          </p>
          <p>TOAST MADAM/MASTER KOMMER INOM KORT</p>
        </div>
      </div>
    </div>
  );
};
