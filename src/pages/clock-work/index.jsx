import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Topic from "../../components/Topic";
import DarkSection from "../../components/DarkSection";

const assetsBasePath = "/assets/clock-work/";

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
    content: "Ruslan Polischuk - Designer, Anton Rorikov - Designer",
  },
];

const researchMenuItems = [
  {
    title: "Interview Questions",
    lineItems: [
      <span>What challenges do you face as a home service professional?</span>,
      <span>How do you think these challenges could be resolved?</span>,
      <span>Is time management important to your business?</span>,
    ],
  },
  {
    title: "Research Insights",
    lineItems: [
      <span>
        Some users wished for a better way to{" "}
        <b>interact with clients directly</b>
      </span>,
      <span>
        Most users wished for more <b>organization in the workplace</b>
      </span>,
      <span>
        All users wished for a better way to{" "}
        <b>communicate with team members</b>
      </span>,
    ],
  },
];

const Clockwork = () => {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, #D9D7F1 22.5%, rgba(217, 215, 241, 0.00) 100%)",
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                <div className="col-4">
                  <img
                    style={{ width: "100%" }}
                    alt="pic"
                    src={`${assetsBasePath}phn-screen-1.svg`}
                  />
                </div>
                <div className="col-4">
                  <img
                    style={{ width: "100%" }}
                    alt="pic"
                    src={`${assetsBasePath}phn-screen-2.svg`}
                  />
                </div>
                <div className="col-4">
                  <img
                    style={{ width: "100%" }}
                    alt="pic"
                    src={`${assetsBasePath}phn-screen-3.svg`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="information pb-5 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <SectionTitle title="Project" pageNo="001" />
                <div className="mt-4 pt-2 mb-3">
                  <div className="project-title">Clockwork</div>
                  <div className="project-sub-title mt-2">
                    The all-in-one productivity solution for home service
                    professionals
                  </div>
                  <div className="project-content mt-3 mb-5">
                    Many companies offer various in-home services to their
                    clients. This usually includes jobs like plumbing, pest
                    control, cleaning, etc. However, these businesses typically
                    have trouble managing everyday tasks.{" "}
                    <b style={{ color: "#000" }}>
                      That’s because home service professionals often struggle
                      with time management.
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
                        The primary project goal was to help home service
                        professionals stay organized while ensuring customer
                        satisfaction, recognizing that organization is essential
                        for success.
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
        topicSummary="I'm proud of this project because it was my first project. It
        was a valuable experience, and although not everything went
        smoothly, I still managed to bring it to a working prototype."
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
              "Anton and I conducted a survey to quickly find out what users are currently experiencing. we had enough answers to draw conclusions. Having collected all the data, I started working on a portrait of a potential client, and after we created a journey map together",
          },
          {
            title: "Week 2: Wireframes & Design",
            content:
              "Once the general basic designs were defined and the basic functions were clarified, I began developing low-quality frames and then high-quality ones.",
          },
          {
            title: "Week 3: Prototype & Testing",
            content:
              "I made a high-quality prototype for further testing, then ran 6 usability tests to verify the product was convenient and useful, after identifying the weak points of the prototype, we finished and submitted the final result",
          },
        ]}
      />

      <section className="research" style={{ background: "#FFF" }}>
        <div className="container pt-4 pb-4">
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
              To better understand the target audience, a series of user
              interviews were conducted. The main focus of this research was to
              hear from home service professionals who were looking to improve
              their day-to-day workflow. Anotherprimary goal was to identify and
              understand common frustrations professionals face while working
              for a home service business.
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
        description="After analyzing the data from user interviews, it was clear that
        I needed to create a persona to visualize who the target
        end-user would be.To properly guide me through the design
        process, I wanted to ensure that this persona accurately
        portrayed a busy home service professional who has numerous pain
        points and motivations while working on the job.This persona was
        referred to throughout the entire product design life cycle in
        order to remain focused when making design decisions."
        imagePath={`${assetsBasePath}persona.png`}
      />

      <Topic
        topicName="Journey Map"
        topicTitle={
          <span>
            Customer<span className="keyword-in-title">journey map</span>
          </span>
        }
        pageNo="007"
        description="Once a persona was made, I created a user journey map to
        understand how potential users would operate and interact with
        this application.The main goal was to include all of the
        necessary steps involved in the user's journey and document some
        of the most common emotions and problems they'll likely
        experience during each of these steps."
        imagePath={`${assetsBasePath}journey.png`}
      />

      <Topic
        topicName="Wireframe"
        topicTitle={
          <span>
            Wireframes of the{" "}
            <span className="keyword-in-title">future application</span>
          </span>
        }
        pageNo="008"
        description="Now that I had a general idea of some of the specific tasks the
        user wanted to complete, it was time to begin the design
        process.First, I created low-fidelity wireframes for each of the
        five main pages in Figma. This allowed me to plan out how the
        app should be visually structured."
        imagePath={`${assetsBasePath}wireframe.svg`}
      />

      <Topic
        topicName="Low-Fi Prototype"
        topicTitle={
          <span>
            Low quality <span className="keyword-in-title">frames</span>
          </span>
        }
        pageNo="009"
        description="Once a solid foundation was established, I used the wireframe
                structure to create a low-fidelity prototype. This was useful
                when determining how enjoyable and functional the current design
                was during this stage."
        imagePath={`${assetsBasePath}proto.svg`}
      />

      <Topic
        topicName="Site Map"
        topicTitle={<span>Site Map</span>}
        pageNo="010"
        description="The next step in my design process was visualizing how the product would be structured. Because users tend to sit down and strategically plan where their next home will be, this led me to create a website rather than something like a mobile application, for example.With this in mind, I shifted priority towards a desktop or laptop computer and created a sitemap that illustrates the main user flow of the product."
        imagePath={`${assetsBasePath}site-map.png`}
      />

      <Topic
        topicName="Task Flow"
        topicTitle={<span>Task Flow</span>}
        pageNo="011"
        description="Having a sitemap, I created a task flow to visually represent the sequence of steps a user takes to achieve a specific goal within the application."
        imagePath={`${assetsBasePath}task-flow.png`}
      />

      <Topic
        topicName="Testing"
        topicTitle={<span>User testing</span>}
        pageNo="012"
        description={
          <span>
            Before moving on to high-fidelity mockups, I tested the prototype on
            five different participants in a moderated usability study. Users
            were asked to complete several tasks to simulate the intended user
            flow:
            <ul>
              <li>
                One user took longer when trying to <b>search for clients</b> in
                the directory.
              </li>
              <li>
                Some users wanted the option to{" "}
                <b>add tasks to their calendar.</b>
              </li>
              <li>
                All users were unable to{" "}
                <b>distinguish team members from clients.</b>
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
          sectionPage="013"
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
              <div>
                Considering this was my first <b>UX project</b>, I can proudly
                say I’m satisfied with the outcome. It was enlightening to see
                the entire UX process unfold.
              </div>
            </div>
          }
        />
      </footer>
    </div>
  );
};

export default Clockwork;
