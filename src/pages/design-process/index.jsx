import React from "react";
import DarkSection from "../../components/DarkSection";

const DesignProcess = () => {
  return (
    <div
      className="container-fluid pb-5"
      style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: "#000" }}
    >
      <DarkSection
        topicTitle={
          <div className="topic-title">
            “Design is the{" "}
            <span className="keyword-in-title">
              <i>purpose guiding the result</i>
            </span>{" "}
            — so design with purpose”
          </div>
        }
        topicSummary={
          <div className="text-white">
            Each stage should be linked to the preceding one, explaining the
            necessity for the next. My design methodology is influenced by three
            primary factors: empathy, mindfulness and aesthetics.
          </div>
        }
      />
      <DarkSection
        sectionName="designPrinciple"
        sectionTitle="Design principles"
        sectionPage="001"
        menu={[
          {
            title: "Empathy",
            content:
              "I like to build with the user in mind at all times. If I can empathize, then I can advocate for a solution that people actually need.",
          },
          {
            title: "Mindfulness",
            content:
              "Mindfulness and intentionality go hand in hand. At every step of the process, I am mindful that I’m still solving the right problem and ensure all design decisions are deliberate.",
          },
          {
            title: "Experimentation",
            content:
              "Design is testing. I think testing out designs and getting feedback is the most rewarding, validating and humbling part of design and I LIVE for it. Nothing gets my blood pumping like doing usability tests or seeing results of tests in the morning.",
          },
          {
            title: "Aesthetics",
            content:
              "I adore visual design. Creating high fidelity prototypes and designs is my happy place and brings me a lot of joy. I tend to express this love though building design systems.",
          },
        ]}
      />

      <DarkSection
        sectionName="designProcess"
        sectionTitle="Design process"
        sectionPage="002"
        topicTitle={
          <div className="topic-title">
            “Each project varies, yet it adheres to a
            <span className="keyword-in-title">
              <i>fundamental procedure.“</i>
            </span>
          </div>
        }
        topicSummary={
          <div className="text-white">
            <div>
              <b>
                These procedures seldom follow a straight path, with steps often
                revisited multiple times before the final delivery.
              </b>
            </div>
            <div className="mt-3">
              Certain projects may require card sorting, while others might
              already possess a well-defined information architecture. The
              specific method chosen can vary, but I consistently adhere to a
              general process for each project.
            </div>
          </div>
        }
        menu={[
          {
            title: "Define the Requirements",
            content:
              "Typically, my initial move involves outlining the overall business needs, project requirements, comprehending the deliverables, timeline, and expectations. Maintaining alignment with the team is crucial. During this phase, I prefer to note down my own hypotheses about the potential issues we might face.",
          },
          {
            title: "Discover the Issues",
            content:
              "In this stage, I gather data, engage with individuals, and delve into the problem domain. I analyze user reports and investigate the reasons behind the product's current state. If formal user research isn't feasible due to budget or time constraints, I opt for impromptu guerrilla interviews to avoid designing without insight.",
          },
          {
            title: "Interpret the Results",
            content:
              "During the interpretation phase, I can precisely identify the users, understand their needs, and pinpoint their challenges. It's a stage where personas, journey maps, storyboards, and problem statements can be established or refined. Here, I establish our objectives and the metrics we aim to achieve for success. This phase consistently offers valuable insights.",
          },
          {
            title: "Prototype",
            content:
              "In this phase, I create the interactive prototype, which could range from a high level of detail in Figma to something simpler. The level of detail depends on where I am in the process and what I plan to test.",
          },
          {
            title: "Test, iterate and test again",
            content:
              "During this concluding stage, I conduct prototype testing with users. Testing methods can vary, from swift guerrilla tests to comprehensive usability test sessions. The results guide us in identifying necessary changes and fixes.",
          },
        ]}
      />
    </div>
  );
};

export default DesignProcess;
