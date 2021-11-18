import React from "react";
import githubFooter from "../../images/github-footer.svg";
import linkedinFooter from "../../images/linkedin-footer.svg";
import portfolioFooter from "../../images/portfolio-footer.svg";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-linebreak" />
      <div className="footer">
        <div className="github-container">
          <a href="https://github.com/TimBTaylor" rel="noreferrer">
            <img src={githubFooter} alt="github" />
            <p className="github-footer">Github</p>
          </a>
        </div>
        <div className="linkedin-container">
          <a
            href="https://www.linkedin.com/in/tim-taylor-aaa970207/"
            rel="noreferrer"
          >
            <img src={linkedinFooter} alt="linkedin" />
            <p className="linkedin-footer">LinkedIn</p>
          </a>
        </div>
        <div className="portfolio-container">
          <a
            href="https://www.timbtaylor.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={portfolioFooter} alt="portfolio" />
            <p className="portfolio-footer">Portfolio</p>
          </a>
        </div>
      </div>
      <p className="footer-p">&copy;{new Date().getFullYear()} Tim Taylor</p>
    </div>
  );
};
