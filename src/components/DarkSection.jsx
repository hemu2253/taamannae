import React from "react";
import SectionTitle from "./SectionTitle";

const DarkSection = ({
  sectionName = "",
  sectionTitle = "",
  sectionPage = "",
  topicTitle = null,
  topicSummary = "",
  menu = [],
}) => {
  return (
    <section
      className={sectionName}
      style={{ background: "#000", color: "#FFF" }}
    >
      <div className="container pt-4 pb-4">
        <div className="pt-4 pb-5">
          <SectionTitle
            title={sectionTitle}
            pageNo={sectionPage}
            borderColor="#FFF"
          />
          <div className="row mt-4 pt-2" style={{ rowGap: 55 }}>
            <div className="col-lg-6">{topicTitle ? topicTitle : null}</div>
            <div className="col-lg-6">
              <div className="dark-section-summary">{topicSummary}</div>
            </div>
            {menu.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="dark-section-no">{`0${index + 1}`}</div>
                <div className="mt-2 mb-2 dark-section-title">{item.title}</div>
                <div className="dark-section-summary">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
