import React from "react";
import "./iconsMenu.scss";

import IconItem from "../common/iconItem/index";
import Avatar from "react-avatar";
import { ScrollRotate } from "react-scroll-rotate";

// schema
// items: array {icon class, title}

export const IconsMenu = (props) => {
  const { items, onClick } = props;
  const profilePicture = {
    size: "100",
  };

  return (
    <nav className="iconsMenu-menu">
      <div className="iconsMenu-options">
        {items.map((item, idx) => {
          return (
            <IconItem key={idx} item={item} onClick={() => onClick(item)} />
          );
        })}
      </div>
      <span className="iconsMenu-profilePicture">
        <ScrollRotate>
          <Avatar
            name="hola"
            round={true}
            size={profilePicture.size}
            src={require("../../assests/coati.jpg")}
          />
        </ScrollRotate>
      </span>
    </nav>
  );
};
