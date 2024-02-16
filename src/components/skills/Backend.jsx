import { Icon } from "@iconify/react";
import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Technology</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <Icon icon="vscode-icons:file-type-node" />

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">ExpressJs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="vscode-icons:file-type-mongo" />

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <Icon icon="logos:mysql" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="logos:firebase" />

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="logos:socket-io" />

            <div>
              <h3 className="skills__name">Socket.io</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
