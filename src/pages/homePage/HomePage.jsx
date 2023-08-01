import "./HomePage.css";

import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJest,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="top-content">
        <div className="contents">
          <p className="head">
            Divyank Manjarwar <br />{" "}
            <span className="info">Frontend Web Developer</span>
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://github.com/Divyank13/portfolio/blob/main/src/Resources/MyImages/DSC_0989~2.JPG?raw=true"
            alt=""
            title="Shobhit Raj"
          />
        </div>
      </div>
      <section id="skills" className="skills">
        <div className="gif-container" style={{ width: "18rem" }}>
          <img
            src="https://github.com/Divyank13/portfolio/blob/main/src/Resources/gifs/1_partyanimsm2.gif?raw=true"
            alt=""
          />
        </div>
        <div className="skill-sec">
          <p className="skill-heading">My Skills</p>
          <ul className="skills-list">
            <li className="skill">
              <span className="skill-head">
                Technical Skills
                <FaArrowRightLong className="arrow-right" />
              </span>
              <span className="skill-icons">
                <AiFillHtml5 title="HTML" />
                <SiCss3 title="CSS" />
                <IoLogoJavascript title="Javascript" />
                <SiTypescript title="Typescript" />
                <TbBrandCpp title="C++" />
              </span>
            </li>
            <li className="skill">
              <span className="skill-head">
                Libraries/Frameworks
                <FaArrowRightLong className="arrow-right" />
              </span>
              <span className="skill-icons">
                <FaReact title="React" />
                <SiJest title="Jest" />
                <SiTailwindcss title="Tailwind" />
                <SiRedux title="Redux" />
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
