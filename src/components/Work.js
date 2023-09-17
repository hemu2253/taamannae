import React from "react";

const Work = () => {
  return (
    <div>
      <div className="section-header-container" style={{ padding: "0px 20px" }}>
        <div className="section-header">
          <p>Work</p>
          <p>001</p>
        </div>
      </div>
      <div className="home projects">
        <a href="/" className="home home-project rom light-in-dark">
          <div className="homes info rom light-in-dark">
            <div>
              <h2 className="homes internships rom light-in-dark">Museum AR/VR</h2>
              <p className="homes para rom light-in-dark">
                Case Study • Product &amp; Brand Design • Personal Project
              </p>
            </div>
          </div>
          <div className="rom-vid">
            <video autoplay="" width="100%" className="span-3" loop="">
              <source src="assets/romHome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </a>
        <a href="/" className="home home-project menti light-in-dark">
          <div className="homes info menti light-in-dark">
            <div>
              <h2 className="homes internships menti light-in-dark">Menti</h2>
              <p className="homes para menti light-in-dark">
                Overview • School • Coded Prototype
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="homes image-inner menti light-in-dark"
              src="assets/men-dash.png"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project meta light-in-dark">
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
              src="./assets/meta-home.svg"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project mi-sched">
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
              src="assets/mimain.svg"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project finary light-in-dark">
          <div className="homes info finary light-in-dark">
            <div>
              <h2 className="homes internships finary light-in-dark">Finary 🔒</h2>
              <p className="homes para finary light-in-dark">
                NFT Gallery • Product Design • Capstone
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="homes image-inner finary light-in-dark"
              src="assets/finhome.jpg"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project movingchar light-in-dark">
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
              src="./assets/blueprint.jpg"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project bsc">
          <div className="homes info bsc">
            <div>
              <h2 className="homes internships bsc">Boston Scientific 🔒</h2>
              <p className="homes para bsc">
                Design System • Contract • Case Study
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="homes image-inner bsc"
              src="./assets/bsc-top.png"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project potluck">
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
              src="assets/potluck-top.png"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project wish">
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
              src="./assets/Home.png"
              alt=""
            />
          </div>
        </a>
        <a href="/" className="home home-project wish-dc">
          <div className="homes info wish-dc">
            <div>
              <h2 className="homes internships wish-dc">Wish Design Exercise</h2>
              <p className="homes para wish-dc">
                Product Design • Design Challenge
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="homes image-inner wish-dc"
              src="assets/wishdc-top.png"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Work;
