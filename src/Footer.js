import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Created by{" "}
      <a
        href="https://celia-corona-doran2023.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="footer-links"
      >
        {" "}
        <span className="my-name">Celia Corona-Doran</span>{" "}
      </a>{" "}
      and open-sourced on
      <a
        href="https://github.com/Newadventure2022/Celias-Projects-for-SheCodes/blob/main/code.js"
        target="_blank"
        rel="noreferrer"
        className="footer-links"
      >
        <span className="GitHub"> GitHub</span>
      </a>
    </div>
  );
}
