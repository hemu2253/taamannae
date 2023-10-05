import React, { useEffect } from "react";
import "../../styles/home.css";
import SectionTitle from "../../components/SectionTitle";
import { HashScroll } from "react-hash-scroll";
import { useHistory } from "react-router-dom";

const assetsBasePath = "assets/home/";

const scrollableContent = [
  "I studied stats, CS & neuroscience",
  "Bubble tea is my favourite food group",
  "I value empathy & vulnerability",
  "I have been to 14 countries",
  "Seriously, I really love playing Minecraft",
];

const Home = () => {
  const history = useHistory();
  const isMobile = window.innerWidth <= 991;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        return (currentIndex + 1) % scrollableContent.length;
      });
      return () => {
        clearInterval(intervalId);
      };
    }, 2500);
  }, []);

  return (
    <div className="container">
      <header className="App-header">
        <div className="header-about">
          <h1>
            <span className="header-color-span">
              <span className="header-weight-span">Hello</span>! I'm Tammy,
            </span>
            <br />
            <span className="textloop-cont">
              <span className="textloop">
                <div className="x0 x1 x2 x3">
                  <div
                    style={{
                      width: isMobile ? "100%" : "552px",
                      height: "150px",
                      transition: "width 150ms linear 0s",
                    }}
                  >
                    {scrollableContent.map((content, index) => {
                      if (currentIndex === index) {
                        return (
                          <div
                            key={index}
                            className="x1 x4 x5 x6"
                            style={{
                              opacity: 1,
                              transform: "translateY(0px)",
                              position: "absolute",
                            }}
                          >
                            <span>{content}</span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </span>
            </span>
          </h1>
        </div>
        <div className="header-welcome">
          <h5>Welcome to my portfolio</h5>
          <p>
            I am a product designer &amp; front-end engineer with some
            illustration chops. I have a wide range of experience from big tech
            and agency to and startups. Co-Founder @ Octoshop. Incoming @ Figma.
            Previously @
            <span className="header-serif">Meta, Xbox &amp; Wish</span>
          </p>
          <h5 style={{ paddingTop: "48px" }}>
            It’s nice to meet you, check out my work below
          </h5>
        </div>
      </header>
      <HashScroll hash="#work" behavior="smooth" position="nearest">
        <div>
          <SectionTitle title="Work" pageNo="001" />

          <div className="home projects">
            <div
              className="home home-project meta light-in-dark"
              onClick={() => history.push("/clock-work")}
            >
              <div className="homes info meta light-in-dark">
                <div>
                  <h2 className="homes internships meta light-in-dark">
                    Clock Work
                  </h2>
                  <p className="homes para meta light-in-dark">
                    Overview • Internship • Product Design
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner meta light-in-dark"
                  src={`${assetsBasePath}clock-work.png`}
                  alt=""
                />
              </div>
            </div>
            <div
              className="home home-project mi-sched"
              onClick={() => history.push("/home-seeker")}
            >
              <div className="homes info mi-sched">
                <div>
                  <h2 className="homes internships mi-sched">Home Seeker</h2>
                  <p className="homes para mi-sched">
                    Product Design • Personal Project • Shipped
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner mi-sched"
                  src={`${assetsBasePath}home-seeker.png`}
                  alt=""
                />
              </div>
            </div>
            <div
              className="home home-project finary light-in-dark"
              onClick={() => history.push("/bright-minds")}
            >
              <div className="homes info finary light-in-dark">
                <div>
                  <h2 className="homes internships finary light-in-dark">
                    Bright Minds{" "}
                    <span role="img" aria-label="icon">
                      🔒
                    </span>
                  </h2>
                  <p className="homes para finary light-in-dark">
                    NFT Gallery • Product Design • Capstone
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner finary light-in-dark"
                  src={`${assetsBasePath}bright-minds.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </HashScroll>
    </div>
  );
};

export default Home;
