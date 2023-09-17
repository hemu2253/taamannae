import React from "react";
import EmailIcon from "../icons/email.js";
import LinkedIdIcon from "../icons/linkedin.js";
import GithubIcon from "../icons/github.js";
import CodeIcon from "../icons/code.js";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <img src="assets/logo-dark.svg" alt="logo" />
          <h4>
            Thanks for visiting <br />
            my portfolio
          </h4>
        </div>
        <div className="footer-links">
          <p>
            Made with <CodeIcon /> by me
          </p>
          <div className="footer-grid">
            <a href="/">
              <div className="icon-outer">
                <EmailIcon />
              </div>
            </a>
            <a href="/" rel="noopener noreferrer">
              <div className="icon-outer">
                <LinkedIdIcon />
              </div>
            </a>
            <a href="/" rel="noopener noreferrer">
              <div className="icon-outer">
                <GithubIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
