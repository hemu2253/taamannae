import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "work",
    label: "Work",
    path: "/home#work",
  },
  {
    key: "design-process",
    label: "My Design Process",
    path: "/design-process",
  },
  {
    key: "freelance",
    label: "Freelance",
    path: "/",
  },
  {
    isLogo: true,
  },
  {
    key: "fun",
    label: "Fun",
    path: "/",
  },
  {
    key: "articles",
    label: "Articles",
    path: "/",
  },
  {
    key: "about",
    label: "About",
    path: "/",
  },
  {
    key: "resume",
    label: "Resume",
    path: "/",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span className="container">
        <div className="hidden-brand">
          <a href="/" className="navbar-brand">
            <span className="brand">
              <img className="brand_logo" alt="logo" src="logo.svg" />
            </span>
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse collapse ${showMenu ? "show" : ""}`}>
          <div className="navbar-nav">
            {menuItems.map((item, idx) => {
              if (item.isLogo) {
                return (
                  <Link
                    to="/"
                    onClick={() => {
                      setActiveItem("");
                      setShowMenu(false);
                    }}
                    key={idx}
                  >
                    <div className="navbar-brand">
                      <span className="brand">
                        <img className="brand_logo" alt="logo" src="logo.svg" />
                      </span>
                    </div>
                  </Link>
                );
              }
              return (
                <Link
                  to={item.path}
                  onClick={() => {
                    setShowMenu(false);
                    setActiveItem(item.key);
                  }}
                  key={idx}
                >
                  <div
                    className={`nav-link ${
                      activeItem === item.key ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </span>
    </nav>
  );
};

export default Header;
