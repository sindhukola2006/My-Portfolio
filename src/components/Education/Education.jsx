import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">

      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>Bachelor of Technology</h3>
          <h4>Information Technology</h4>
          <p>LBRCE</p>
          <span>2024 - 2028</span>
        </div>

        <div className="education-card">
          <h3>Intermediate</h3>
          <h4>MPC</h4>
          <p>Narayana Junior College</p>
          <span>2022 - 2024</span>
        </div>

        <div className="education-card">
          <h3>SSC</h3>
          <h4>Secondary Education</h4>
          <p>Vani High School</p>
          <span>2021 - 2022</span>
        </div>

      </div>

    </section>
  );
}

export default Education;