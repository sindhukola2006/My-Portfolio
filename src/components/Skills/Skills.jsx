import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 />
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaReact />
          <span>ReactJS</span>
        </div>

        <div className="skill-card">
          <FaJava />
          <span>Java</span>
        </div>

        <div className="skill-card">
          <SiSpringboot />
          <span>Spring Boot</span>
        </div>

        <div className="skill-card">
          <SiMysql />
          <span>MySQL</span>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <span>Git</span>
        </div>

        <div className="skill-card">
          <FaGithub />
          <span>GitHub</span>
        </div>

        <div className="skill-card">
            <FaCode />
            <span>VS Code</span>
        </div>

        <div className="skill-card">
          <SiPostman />
          <span>Postman</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;