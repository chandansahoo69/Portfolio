import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a className="work__button" onClick={() => toggleTab(item.id)}>
        See More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      <div
        className={
          toggleState === item.id ? "work__modal active-modal" : "work__modal"
        }
      >
        <div className="work__modal-content">
          <i
            className="uil uil-times work__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <img
            src={item.image}
            alt="project_image"
            className="work__img-modal"
          />
          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">{item.desc}</p>

          <div className="work__modal-button">
            <a className="work__button" href={item.github_link} target="_blank">
              GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>

            <a className="work__button" href={item.host_link} target="_blank">
              Host <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          </div>

          {/* <ul className="work__modal-services grid">
            <li className="work__modal-service">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">I develop the user interface.</p>
            </li>

            <li className="work__modal-service">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">Web page development.</p>
            </li>

            <li className="work__modal-service">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">
                I create ux element interactions.
              </p>
            </li>

            <li className="work__modal-service">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">
                I create ux element interactions.
              </p>
            </li>

            <li className="work__modal-service">
              <i className="uil uil-check-circle work__modal-icon"></i>
              <p className="work__modal-info">
                I create ux element interactions.
              </p>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
