import React, { useEffect } from "react";
import "../../styles/home.css";
import SectionTitle from "../../components/SectionTitle";
import { HashScroll } from "react-hash-scroll";

const assetsBasePath = "assets/home/";

const scrollableContent = [
  "I studied stats, CS & neuroscience",
  "Bubble tea is my favourite food group",
  "I value empathy & vulnerability",
  "I have been to 14 countries",
  "Seriously, I really love playing Minecraft",
];

const Home = () => {
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
            <div className="home home-project rom light-in-dark">
              <div className="homes info rom light-in-dark">
                <div>
                  <h2 className="homes internships rom light-in-dark">
                    Museum AR/VR
                  </h2>
                  <p className="homes para rom light-in-dark">
                    Case Study • Product &amp; Brand Design • Personal Project
                  </p>
                </div>
              </div>
              <div className="rom-vid">
                <video autoPlay width="100%" className="span-3" loop="">
                  <source
                    src={`${assetsBasePath}romHome.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="home home-project menti light-in-dark">
              <div className="homes info menti light-in-dark">
                <div>
                  <h2 className="homes internships menti light-in-dark">
                    Menti
                  </h2>
                  <p className="homes para menti light-in-dark">
                    Overview • School • Coded Prototype
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner menti light-in-dark"
                  src={`${assetsBasePath}men-dash.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project meta light-in-dark">
              <div className="homes info meta light-in-dark">
                <div>
                  <h2 className="homes internships meta light-in-dark">Meta</h2>
                  <p className="homes para meta light-in-dark">
                    Overview • Internship • Product Design
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner meta light-in-dark"
                  src={`${assetsBasePath}meta-home.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project mi-sched">
              <div className="homes info mi-sched">
                <div>
                  <h2 className="homes internships mi-sched">MI Scheduler</h2>
                  <p className="homes para mi-sched">
                    Product Design • Personal Project • Shipped
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner mi-sched"
                  src={`${assetsBasePath}mimain.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project finary light-in-dark">
              <div className="homes info finary light-in-dark">
                <div>
                  <h2 className="homes internships finary light-in-dark">
                    Finary{" "}
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
                  src={`${assetsBasePath}finhome.jpg`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project movingchar light-in-dark">
              <div className="homes info movingchar light-in-dark">
                <div>
                  <h2 className="homes internships movingchar light-in-dark">
                    Blueprint
                  </h2>
                  <p className="homes para movingchar light-in-dark">
                    Product Design • Branding • Overview • Volunteer
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner movingchar light-in-dark"
                  src={`${assetsBasePath}blueprint.jpg`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project bsc">
              <div className="homes info bsc">
                <div>
                  <h2 className="homes internships bsc">
                    Boston Scientific{" "}
                    <span role="img" aria-label="icon">
                      🔒
                    </span>
                  </h2>
                  <p className="homes para bsc">
                    Design System • Contract • Case Study
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner bsc"
                  src={`${assetsBasePath}bsc-top.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project potluck">
              <div className="homes info potluck">
                <div>
                  <h2 className="homes internships potluck">Potluck</h2>
                  <p className="homes para potluck">
                    Product Design • Case Study • Freelance
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner potluck"
                  src={`${assetsBasePath}potluck-top.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project wish">
              <div className="homes info wish">
                <div>
                  <h2 className="homes internships wish">Wish</h2>
                  <p className="homes para wish">
                    Product Design • Case Study • Internship
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner wish"
                  src={`${assetsBasePath}Home.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="home home-project wish-dc">
              <div className="homes info wish-dc">
                <div>
                  <h2 className="homes internships wish-dc">
                    Wish Design Exercise
                  </h2>
                  <p className="homes para wish-dc">
                    Product Design • Design Challenge
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="homes image-inner wish-dc"
                  src={`${assetsBasePath}wishdc-top.png`}
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
