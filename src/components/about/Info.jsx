import { Icon } from "@iconify/react";
import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months Working</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6+ Projects</span>
      </div>
      <div className="about__box">
        <Icon icon="raphael:opensource" className="about__icon" />
        <h3 className="about__title">Open Source</h3>
        <span className="about__subtitle">2 Contribution</span>
      </div>
    </div>
  );
};

export default Info;
