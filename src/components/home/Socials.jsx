import React from "react";
import { Icon } from "@iconify/react";

const Socials = () => {
  return (
    <div className="home__social">
      <a
        href="https://leetcode.com/sahooc029/"
        className="home__social-icon"
        target="_blank"
      >
        <Icon icon="tabler:brand-leetcode" />
      </a>
      <a
        href="https://github.com/chandansahoo69"
        className="home__social-icon"
        target="_blank"
      >
        <Icon icon="line-md:github-loop" />
      </a>
      <a
        href="https://www.linkedin.com/in/chandan-sahoo-6941781ba/"
        className="home__social-icon"
        target="_blank"
      >
        <Icon icon="mingcute:linkedin-line" />
      </a>
      <a
        href="https://www.instagram.com/chandan__kumar_._/"
        className="home__social-icon"
        target="_blank"
      >
        <Icon icon="mdi:instagram" />
      </a>
    </div>
  );
};

export default Socials;
