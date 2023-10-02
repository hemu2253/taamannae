import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Topic from "../../components/Topic";
import DarkSection from "../../components/DarkSection";

const assetsBasePath = "assets/bright-minds/";

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
    title: "Research Insights",
    lineItems: [
      <span>
        According to the annual "Speak Up" survey from the nonprofit
        organization Project Tomorrow, 49% of students in grades 6-12 say they
        regularly use YouTube for self-directed learning.
      </span>,
      <span>
        In addition, 50% of elementary students say their favorite way to learn
        is using technology to collaborate with others, and 75% of all students
        say their ideal school would give them a digital device to take charge
        of their learning.
      </span>,
    ],
  },
  {
    title: "Key Insights",
    lineItems: [
      <span>
        Most students seek additional <b>learning outside of school.</b>
      </span>,
      <span>
        Most students prefer digital teaching{" "}
        <b>compared to traditional methods.</b>
      </span>,
      <span>
        Most students would rather{" "}
        <b>learn at their own pace with technology.</b>
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
      <div style={{ height: 80, backgroundColor: "#D3E4CD" }} />
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
                  <div className="project-title">Brightminds</div>
                  <div className="project-sub-title mt-2">
                    The easiest way for children to study, <br />
                    <b>practice, and master what they're learning</b>
                  </div>
                  <div className="project-content mt-3 mb-5">
                    Recent studies have shown that most K-12 students prefer to
                    use technology so they can take charge of their own
                    learning. These students want to play a more active role in
                    their education,{" "}
                    <b style={{ color: "#000" }}>
                      but they need more modern environments specifically
                      designed for engaged teaching.
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
                        Today's students are accustomed to using the web for
                        self-directed learning at a very young age, and they're
                        spending their free time looking up information for
                        themselves. The goal was to create a digital experience
                        where children can embrace their curiosity, explore
                        various topics, and become better learners.
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
        topicSummary="I'm proud of this project because it was my first project. It was a valuable experience, and although not everything went smoothly, I still managed to bring it to a working prototype."
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
              "During the first week, I decided it was best to conduct secondary research based on time and budget constraints. To learn a little more about the market, I conducted a competitor analysis, the results of which helped me understand which features were prioritized by competitors.",
          },
          {
            title: "Week 2: Wireframes & Design",
            content:
              "In the second week I sketched out the layouts of the future application and after their approval I made the design",
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
              Before beginning the design process, I needed some additional
              context. My primary focus was to figure out some of the different
              ways students learn and what challenges they may face. I decided
              it was best to conduct secondary research based on time and budget
              constraints.
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
        topicName="Competitor Research"
        topicTitle={
          <span>
            Competitor <span className="keyword-in-title">research</span>
          </span>
        }
        pageNo="006"
        description="Competitor research involves gathering information about competing businesses in terms of their market presence, strengths and weaknesses, service offerings, marketing strategies, customer base and financial performance. This analysis will help me understand the competitive landscape, make informed decisions and improve strategies to remain competitive in the market."
        content={
          <div className="row mt-5 pt-3">
            <div className="col-lg-4">
              <img
                style={{ width: "100%" }}
                alt="img"
                src={`${assetsBasePath}research.png`}
              />
            </div>
            <div className="col-lg-7 offset-lg-1">
              <ul
                style={{
                  fontSize: 20,
                  color: "#545454",
                  fontWeight: 600,
                }}
              >
                <li className="mb-3">
                  To learn a little bit more about the market, I observed and
                  analyzed several competitors and noted some of the features
                  they were offering their users.
                </li>
                <li className="mb-3">
                  In particular, I studied Rosetta Stone and Duolingo, two
                  successful digital products in the education field.
                </li>
                <li className="mb-3">
                  Rosetta Stone offers features like a personalized learning
                  plan and the ability to download lessons offline.
                </li>
                <li>
                  Duolingo offers game-like lessons and the ability to track
                  your progress to work towards your specific goals.
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <Topic
        topicName="Impact Effort Matrix"
        topicTitle={<span>Impact Effort Matrix</span>}
        pageNo="007"
        description="Before moving on, I wanted to prioritize some feature ideas using an impact effort matrix. This gave me a general idea of the features I wanted to implement into the design and what I should focus on first."
        imagePath={`${assetsBasePath}effort.png`}
      />

      <Topic
        topicName="Persona"
        topicTitle={
          <span>
            Portrait of a{" "}
            <span className="keyword-in-title">potential user</span>
          </span>
        }
        pageNo="008"
        description="After gathering and organizing the data from my research, I needed to create a persona to visualize the target end-user. To guide me through the design process, I wanted to ensure that this persona accurately portrayed a young student eager to learn new things. This persona was referred to throughout the entire product life cycle in order to remain focused when making design decisions. "
        imagePath={`${assetsBasePath}persona.png`}
      />

      <Topic
        topicName="Sketches"
        topicTitle={<span>Sketches</span>}
        pageNo="009"
        description="I started with several basic sketches of how I wanted the overall layout to be structured to begin the design stage. I wanted the user to select between books and collections and access their account settings all from the homepage. This was reflected in the sketches shown below."
        imagePath={`${assetsBasePath}sketches.png`}
      />

      <Topic
        topicName="Wireframes"
        topicTitle="Wireframes"
        pageNo="010"
        description="Once the final sketch layout was completed, it was time to incorporate those ideas into wireframes. To help visualize how the app should be structured, I created low-fidelity wireframes for the main pages in Figma."
        imagePath={`${assetsBasePath}wireframe.png`}
      />

      <Topic
        topicName="Low-Fidelity Prototypes"
        topicTitle="Low-Fidelity Prototypes"
        pageNo="011"
        description="Now that the structure of the application was determined, I moved on to creating a low-fidelity prototype. This was useful when determining how enjoyable and functional the current design was during this stage."
        imagePath={`${assetsBasePath}fidelity.png`}
      />

      <Topic
        topicName="Testing"
        topicTitle="User testing"
        pageNo="012"
        description="As always, I conducted user testing with several participants before finalizing my designs with high-fidelity mockups. After gathering various insights from users, the following changes were made and displayed below."
        imagePath={`${assetsBasePath}testing.png`}
        imagePath2={`${assetsBasePath}testing2.png`}
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
              With this project, I learned about the different way students
              digest information and what challenges they frequently encounter.
              While this application is not meant to be an alternative to
              learning from a teacher in a physical classroom, the goal was to
              provide a digital experience where young students can expand on
              their curiosity and broaden their knowledge.
            </div>
          }
        />
      </footer>
    </div>
  );
};

export default HomeSeeker;
