import React, { useEffect } from "react";

const scrollableContent = [
  "I studied stats, CS & neuroscience",
  "Bubble tea is my favourite food group",
  "I value empathy & vulnerability",
  "I have been to 14 countries",
  "Seriously, I really love playing Minecraft",
];

const Introduction = () => {
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
  console.log(currentIndex, "currentIndex");
  return (
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
  );
};

export default Introduction;
