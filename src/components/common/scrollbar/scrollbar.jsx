import React from "react";
import "./scrollbar.scss";

const CustomScrollbar = (props) => {
  const { name } = props;

  return (
    <div id={name} className="scrollbar-slidecontainer">
      Scroll 33 33 33 33 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 33 3 3 3 3
      3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
      3 3 3 3 3 3 3
    </div>
  );
};

export { CustomScrollbar };
