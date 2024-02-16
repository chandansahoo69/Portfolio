import React, { useState } from "react";
import "./qualification.css";
import { qualifications } from "./constants.js";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="check">
                <h3 className="qualification__title">Bachelor of Technology</h3>
                <span className="qualification__subtitle">
                  Gandhi Institute For Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
                <span className="qualification__para">
                  I have completed B.Tech in CSE under Biju Patnaik University
                  of Technology with a CGPA of 8.74.
                  <br />
                  Bhubaneswar, Odisha, 754012
                </span>
              </div>

              <div>
                <span className="qualification__rounder">
                  <div className="qualification__point"></div>
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder">
                  <div className="qualification__point"></div>
                </span>
                <span className="qualification__line"></span>
              </div>

              <div className="check">
                <h3 className="qualification__title">
                  Higher Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  Tetrahedron Juniour Science College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
                <span className="qualification__para">
                  My secondary education was completed by the CHSE Board in
                  Science.
                  <br />
                  Cuttck, Odisha, 752023
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div className="check">
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                  Port Trust High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
                <span className="qualification__para">
                  My 10th grade exam was graded well by the HSE Board with
                  77.6%.
                  <br />
                  Paradeep, Odisha, 754142
                </span>
              </div>

              <div>
                <span className="qualification__rounder">
                  <div className="qualification__point"></div>
                </span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {qualifications.map((qualification, index) => (
              <div className="qualification__data" key={index}>
                {index % 2 === 1 && (
                  <>
                    <div></div>

                    <div>
                      <span className="qualification__rounder">
                        <div className="qualification__point"></div>
                      </span>
                      <span className="qualification__line"></span>
                    </div>
                  </>
                )}

                <div className="check">
                  <h3 className="qualification__title">
                    {qualification.title}
                  </h3>
                  <span className="qualification__subtitle">
                    {qualification.company}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>{" "}
                    {qualification.duration}
                  </div>
                  <span className="qualification__para">
                    <ul>
                      {qualification.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </span>
                </div>

                {index % 2 === 0 && (
                  <div>
                    <span className="qualification__rounder">
                      <div className="qualification__point"></div>
                    </span>
                    <span className="qualification__line"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
