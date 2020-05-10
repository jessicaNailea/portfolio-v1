import React from "react";
import "./iconItem.scss";

//schema: item: object {iconClass, title}

const IconItem = (props) => {
  const { item, onClick } = props;
  return (
    <div className="iconItem-general" onClick={onClick}>
      <i className={item.iconClass}></i>
      <span>{item.title}</span>
    </div>
  );
};

export { IconItem };
