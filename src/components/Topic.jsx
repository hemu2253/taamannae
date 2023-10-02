import React from "react";
import SectionTitle from "./SectionTitle";

const Topic = ({
  topicName,
  pageNo,
  topicTitle,
  description,
  imagePath = "",
  imagePath2 = "",
  content = null,
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
              <div className="my-2 d-flex justify-content-center">
                <img alt="img" style={{ width: "100%" }} src={imagePath} />
              </div>
            ) : null}
            {imagePath2 ? (
              <div className="d-flex justify-content-center">
                <img alt="img" style={{ width: "100%" }} src={imagePath2} />
              </div>
            ) : null}
            {content ? content : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topic;
