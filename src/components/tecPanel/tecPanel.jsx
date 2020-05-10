import React from "react";
import "./tecPanel.scss";
import Experience from "../experience";
import Education from "../education";

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
