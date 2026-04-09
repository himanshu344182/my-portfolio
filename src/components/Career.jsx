import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="certifications">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Panjab University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Kamla Lohtia Sanatan Dharam College. Graduating with 75% score.
              Strong foundation in object-oriented programming, data structures, and database management systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Class XII)</h4>
                <h5>CBSE</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              BCM Arya Model Sr. Sec. School. Graduated with 80% score.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various Platforms</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              • The Fundamentals of Digital Marketing - Google Digital Garage<br/>
              • Basics of Python, Java, Cyber Security & Data Science - Infosys Springboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
