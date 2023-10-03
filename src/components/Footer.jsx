import React from "react";
import "../styles/footer.css";
import EmailIcon from "../icons/email";
import LinkedIdIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";
import CodeIcon from "../icons/code";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <img src="logo.svg" alt="logo" />
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
