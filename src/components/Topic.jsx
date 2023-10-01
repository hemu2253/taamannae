import React from "react";
import SectionTitle from "./SectionTitle";

const Topic = ({
  topicName,
  pageNo,
  topicTitle,
  description,
  imagePath = "",
}) => {
  return (
    <section className={topicName} style={{ background: "#FFF" }}>
      <div className="container pt-4 pb-4">
        <div className="pt-4">
          <SectionTitle title={topicName} pageNo={pageNo} />
          <div className="row mt-4 pt-2" style={{ rowGap: 16 }}>
            <div className="topic-title col-lg-4">{topicTitle}</div>
            <div className="topic-desc col-lg-8">{description}</div>
            {imagePath ? (
              <div className="my-5 d-flex justify-content-center">
                <img style={{ width: "100%" }} src={imagePath} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topic;
