import React from "react";
import "./tecPanel.scss";
import Experience from "../../home/experience";
import Education from "../../home/education";

const TecPanel = (props) => {
  const { data } = props;
  return (
    <div className="tecPanel-container ">
      <Education data={data.educ} />
      <Experience data={data.exp} />
    </div>
  );
};

export { TecPanel };
