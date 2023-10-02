import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Topic from "../../components/Topic";
import DarkSection from "../../components/DarkSection";

const assetsBasePath = "assets/home-seeker/";

const InfoData = [
  {
    title: "Role",
    content: "UI UX Designer",
  },
  {
    title: "Timeline",
    content: "3 weeks",
  },
  {
    title: "Tools",
    content: "Figma",
  },
  {
    title: "Methods",
    content: "User research, personas, journey maps, wireframing, prototyping",
  },
  {
    title: "Team",
    content: (
      <span>
        <div>Ruslan Polischuk - Designer</div>
      </span>
    ),
  },
];

const researchMenuItems = [
  {
    title: "Interview Questions",
    lineItems: [
      <span>What problems do you face when choosing a home?</span>,
      <span>How do you think these problems can be solved?</span>,
      <span>What is important to you when choosing a home?</span>,
    ],
  },
  {
    title: "Research Insights",
    lineItems: [
      <span>
        Users would like to know more about the{" "}
        <b>atmosphere and environment</b> they will be living in.
      </span>,
      <span>
        Users frequently cited <b>hidden fees and overall availability</b> as
        some of their biggest pain points during the home-seeking process.
      </span>,
      <span>
        Users want <b>an easier way to browse homes and filter</b> through basic
        details such as cost, location, dimensions, and amenities.
      </span>,
    ],
  },
];

const HomeSeeker = () => {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div style={{ height: 80, backgroundColor: "#D7E9F7" }} />
      <div className="mb-5">
        <img
          style={{ width: "100%" }}
          alt="pic"
          src={`${assetsBasePath}banner.png`}
        />
      </div>

      <div className="container">
        <div className="information pb-5 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <SectionTitle title="Project" pageNo="001" />
                <div className="mt-4 pt-2 mb-3">
                  <div className="project-title">Homeseeker</div>
                  <div className="project-sub-title mt-2">
                    The perfect place to seek your dream home
                  </div>
                  <div className="project-content mt-3 mb-5">
                    MFinding the perfect place to live can be daunting for most
                    people. Whether you're looking to rent a newly built
                    apartment downtown or buy a small cottage house in the
                    suburbs,{" "}
                    <b style={{ color: "#000" }}>
                      searching for your dream home is often very difficult.{" "}
                    </b>
                  </div>
                </div>
              </div>
              <div>
                <SectionTitle title="Overview" pageNo="002" />
                <div className="mt-4 pt-2 mb-3">
                  <div className="row gutter">
                    <div className="col">
                      <div className="info-title">Problem</div>
                      <div className="mt-2 project-content">
                        How can we fix the time management problem of work from
                        home professionals?
                      </div>
                    </div>
                    <div className="col">
                      <div className="info-title">Solution</div>
                      <div className="mt-2 project-content">
                        To alleviate some of this stress, the goal for this
                        project was to create a website that allows individuals
                        to search based on their needs, easily browse through
                        listings, and ultimately seek their dream home.
                      </div>
                      <div className="mt-4 button">Prototype</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <SectionTitle title="Info" pageNo="003" />
              <div className="mt-4 pt-2 mb-3">
                <div className="d-flex flex-column" style={{ rowGap: 32 }}>
                  {InfoData.map((item, index) => (
                    <div key={index}>
                      <div className="info-title mb-2">{item.title}</div>
                      <div className="info-content">{item.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pic">
        <img
          alt="img"
          style={{ width: "100%" }}
          src={`${assetsBasePath}section-fluid.png`}
        />
      </section>

      <DarkSection
        sectionName="brief"
        sectionTitle="Design Brief"
        sectionPage="004"
        topicSummary="I divided the project into 3 working weeks. My goal was to understand what the user wants - to make a design for him - and to test this design."
        topicTitle={
          <div className="topic-title">
            From conception to <br />
            <span className="keyword-in-title">
              <i>design & creating prototype</i>
            </span>
            <br />
            in 3 weeks
          </div>
        }
        menu={[
          {
            title: "Week 1: Understand & Research",
            content:
              "The first week I tried to understand the user and understand. I started with an interview and based on this data I already had a user profile.",
          },
          {
            title: "Week 2: Wireframes & Design",
            content:
              "When I had a portrait of the user and an understanding of what exactly the user wanted from the application, I compiled a site map to clearly demonstrate what functions would be in this application. After that, I started working on the layouts.",
          },
          {
            title: "Week 3: Prototype & Testing",
            content:
              "The third week was the last in my plan, at this stage the goal was to answer one question through user testing: “Is my design intuitive?”",
          },
        ]}
      />

      <section className="research" style={{ background: "#FFF" }}>
        <div className="container pt-4 pb-4 mt-4">
          <SectionTitle title="User Research" pageNo="005" />
          <div className="row mt-4 pt-2" style={{ rowGap: 80 }}>
            <div className="topic-title col-lg-6">
              <span>
                User
                <span className="keyword-in-title">
                  understanding & empathy
                </span>
              </span>
            </div>
            <div className="col-lg-6 project-content">
              I started the research process by analyzing data taken from user
              surveys. This helped me learn what struggles people face when
              searching for their ideal home and what some of their most common
              pain points are.
            </div>
            {researchMenuItems.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="dark-section-no text-capitalize">
                  {item.title}
                </div>
                <ul
                  className="mt-4 pt-2 d-flex flex-column"
                  style={{ rowGap: 30 }}
                >
                  {item.lineItems.map((lineItem, index) => (
                    <li key={index}>{lineItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <img
          alt="img"
          className="my-5"
          style={{ width: "100%" }}
          src={`${assetsBasePath}metrics.png`}
        />
      </section>

      <Topic
        topicName="Persona"
        topicTitle={
          <span>
            Portrait of a{" "}
            <span className="keyword-in-title">potential user</span>
          </span>
        }
        pageNo="006"
        description="After coming up with a few insights based on user research, it was time to create personas. This helped in visualizing the target audience.To guide me through the design process, I ensured this persona accurately portrayed an adult eager to find their dream home based on the parameters/needs they've established beforehand.This persona was referred to throughout the entire product design life cycle to remain focused when making design decisions."
        imagePath={`${assetsBasePath}persona.png`}
      />

      <Topic
        topicName="Site Map"
        topicTitle={<span>Site Map</span>}
        pageNo="007"
        description="The next step in my design process was visualizing how the product would be structured  and created a sitemap that illustrates the main user flow of the product."
        imagePath={`${assetsBasePath}site-map.png`}
      />

      <Topic
        topicName="Sketches"
        topicTitle={<span>Sketches</span>}
        pageNo="008"
        description="To begin the design stage, I started with a few rough sketches of the intended page layout. I wanted the user to search for listings based on their location, browse and filter between various parameters, and add listings to their favorites. These features are reflected in the sketches shown below. "
        imagePath={`${assetsBasePath}sketches.png`}
      />

      <Topic
        topicName="Low-Fi Prototype"
        topicTitle={
          <span>
            Low-Fidelity <span className="keyword-in-title">Prototypes</span>
          </span>
        }
        pageNo="009"
        description="Now that the structure was established, it was time to create low-fidelity wireframes for the website. These wireframes were later converted to lo-fi prototypes to quickly get a sense of how each screen should flow together."
        imagePath={`${assetsBasePath}proto.png`}
      />

      <Topic
        topicName="Testing"
        topicTitle={<span>User testing</span>}
        pageNo="010"
        description={
          <span>
            Before moving on to high-fidelity mockups, I tested the lo-fi
            prototype on five different participants in an unmoderated usability
            study. Here are some of the improvements made based on user
            feedback:
            <ul>
              <li>
                Users suggested adding more clarity <b>to filter options</b>
              </li>
              <li>
                Users stated that listing info may be{" "}
                <b>a little too "wordy"</b>
              </li>
              <li>
                Users wished to see where listing <b>was relative to the map</b>
              </li>
              <li>
                Users wanted a <b>"recommended"</b> or{" "}
                <b>"suggested" section</b>
              </li>
            </ul>
          </span>
        }
        imagePath={`${assetsBasePath}testing.png`}
      />
      <footer>
        <DarkSection
          sectionName="footer"
          sectionTitle="Conclusions"
          sectionPage="011"
          topicTitle={
            <div className="topic-title w-75">
              <span className="keyword-in-title">
                <i>Reflecting</i>
              </span>{" "}
              on the project outcomes
            </div>
          }
          topicSummary={
            <div>
              <div className="mb-3">
                With this project, I learned about some of the common struggles
                home service professionals often face throughout their daily
                lives. I also experimented with providing the best solutions for
                those users.
              </div>
            </div>
          }
        />
      </footer>
    </div>
  );
};

export default HomeSeeker;
