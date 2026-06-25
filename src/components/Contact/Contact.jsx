import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p>
        I'm currently looking for internship opportunities.
        Feel free to connect with me.
      </p>

      <div className="contact-links">

        <a
          href="https://github.com/sindhukola2006"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sindhu-kola-968b4b374/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a href="mailto:kolasindhu4@gmail.com">
          <FaEnvelope />
          Email
        </a>

      </div>

    </section>
  );
}

export default Contact;