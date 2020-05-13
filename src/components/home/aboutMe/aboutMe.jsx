import React from "react";
import "./aboutMe.scss";
import Avatar from "react-avatar";
import CustomScrollbar from "../../common/scrollbar";
import { ScrollRotate } from "react-scroll-rotate";

const AboutMe = (props) => {
  const { data } = props;

  const profilePicture = {
    sizexl: "230",
    sizemd: "170",
  };

  return (
    <div className="aboutMe-card" id="AboutMeComponent">
      <div className="scrollbar-container">
        <CustomScrollbar name="rotate-avatar" />
      </div>
      <ScrollRotate target={"rotate-avatar"}>
        <span className={"aboutMe-responsive-avatarmd"}>
          <Avatar
            name="hola"
            round={true}
            size={profilePicture.sizexmd}
            src={require("../../../assests/profile.png")}
          />
        </span>
        <span className={"aboutMe-responsive-avatarl"}>
          <Avatar
            name="hola"
            round={true}
            size={profilePicture.sizexl}
            src={require("../../../assests/profile.png")}
          />
        </span>
      </ScrollRotate>
      <div>
        <p className="aboutMe-description">
          {data.description ? data.description : ""}
        </p>
      </div>
    </div>
  );
};

export { AboutMe };
