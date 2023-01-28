import React, { useState } from "react";
import "./qualification.css";

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
                ? "qualification__button button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex"
                : "qualification__button qualification__active button--flex"
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
                  Currently, I'm pursuing a B.Tech in CSE at BPUT.
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
            <div className="qualification__data">
              <div className="check">
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Glow TechMor</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June 2022 - July 2022
                </div>
                <span className="qualification__para">
                  <ul>
                    <li>
                      Worked on an E-Commerce Web Application Backend, created
                      APIs and login system.
                    </li>
                    <li>
                      Managed the API calls for fetching data from the database
                      to the user interface using Express and MongoDB.
                    </li>
                  </ul>
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
                <h3 className="qualification__title">Front End Developer</h3>
                <span className="qualification__subtitle">Learn For Cause</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov 2020 - April 2021
                </div>
                <span className="qualification__para">
                  <ul>
                    <li>
                      Developed a full-stack website using ReactJS & TailwindCSS
                      in the front end.
                    </li>
                    <li>
                      Contributed as a front-end developer on some web pages of
                      LFC's official website.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
