import React from "react";

const SectionTitle = ({
  title,
  pageNo,
  width = "100%",
  borderColor = "#000",
}) => {
  return (
    <div
      className="section-title d-flex align-items-center justify-content-between"
      style={{
        paddingBottom: 18,
        borderBottom: `1px solid ${borderColor}`,
        width,
      }}
    >
      <div>{title}</div>
      <div>{pageNo}</div>
    </div>
  );
};

export default SectionTitle;
