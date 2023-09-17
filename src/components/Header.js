import React from "react";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span className="container">
        <div className="hidden-brand">
          <a href="/" className="navbar-brand">
            <span className="brand">
              <img
                className="brand_logo"
                height="52px"
                alt="logo"
                src="/assets/logo-dark.svg"
              />
            </span>
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse ${showMenu ? "show" : ""}`}>
          <div className="navbar-nav">
            <a href="/" className="active nav-link">
              Work
            </a>
            <a href="/" className="nav-link">
              My Design Process
            </a>
            <a href="/" className="nav-link">
              Freelance
            </a>
            <a href="/" className="navbar-brand">
              <span className="brand">
                <img
                  className="brand_logo"
                  height="52px"
                  alt="logo"
                  src="/assets/logo-dark.svg"
                />
              </span>
            </a>
            <a href="/" className="nav-link">
              Fun
            </a>
            <a href="/" className="nav-link">
              Articles
            </a>
            <a href="/" className="nav-link">
              About
            </a>
            <a href="/" className="nav-link">
              Resume
            </a>
          </div>
        </div>
      </span>
    </nav>
  );
};

export default Header;
