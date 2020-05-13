import React, { Component } from "react";
import "./Home.scss";
import Hero from "../../components/home/hero";
import IconsMenu from "../../components/home/IconsMenu";
import TecPanel from "../../components/home/tecPanel";
import AboutMe from "../../components/home/aboutMe";
import Footer from "../../components/home/footer";

import {
  getUserProfileData,
  getEducData,
  getExperience,
  getProjects,
} from "../../services/userService";

export class Home extends Component {
  //The userdata should be upload in the login process
  state = {
    userId: 1,
    items: [
      {
        iconClass: "fa fa-heart fa-3x",
        title: "About me",
        ref: "AboutMeComponent",
      },
      {
        iconClass: "fa fa-laptop fa-3x",
        title: "Work experience",
        ref: "ExperienceComponent",
      },
      {
        iconClass: "fa fa-graduation-cap fa-3x",
        title: "Education",
        ref: "EducationComponent",
      },
    ],
    rangeValue: "1",
    profile: {},
    education: {},
    experience: {},
    projects: {},
  };

  async componentDidMount() {
    const id = this.state.userId;
    const { data: profile } = await getUserProfileData(id);
    const { data: education } = await getEducData(id);
    const { data: experience } = await getExperience(id);
    const { data: projects } = await getProjects(id);

    this.setState({
      profile,
      education,
      experience,
      projects,
    });
  }

  handleRangeChange = (value) => {
    this.setState({ rangeValue: value });
  };

  handldeClickMenu = (item) => {
    const ref = item.ref;
    const element = document.getElementById(ref);
    if (element) {
      const top = element.getBoundingClientRect();
      window.scrollTo(0, top.y);
    }
  };

  render() {
    return (
      <div className="home">
        <IconsMenu items={this.state.items} onClick={this.handldeClickMenu} />
        <main>
          <Hero />
          <AboutMe
            data={this.state.profile}
            rangeValue={this.state.rangeValue}
            onRangeChange={this.handleRangeChange}
          />
          <TecPanel
            data={{ educ: this.state.education, exp: this.state.experience }}
          />
        </main>
        <Footer
          data={{
            contact: this.state.profile.contactInfo,
            projects: this.state.projects,
          }}
        />
      </div>
    );
  }
}
