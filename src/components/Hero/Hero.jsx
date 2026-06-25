import "./Hero.css";
import profile from "../../assets/images/profile.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profile}
        alt="Profile"
        className="profile-image"
      />

      <h1>Sindhu Kola</h1>

      <h2>Aspiring Java Full Stack Developer</h2>

      <p>
        Passionate Information Technology student
        interested in ReactJS, Spring Boot,
        Java and MySQL.
      </p>

      <div className="social-icons">

        <a
          href="https://github.com/sindhukola2006"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sindhu-kola-968b4b374/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:kolasindhu4@gmail.com">
          <FaEnvelope />
        </a>

      </div>

    </section>
  );
}

export default Hero;