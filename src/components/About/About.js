import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />

          <h1 className="project-heading">
            <strong className="purple">Education</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={12} md={10} className="tech-icons-text" style={{ textAlign: "left" }}>
              <h3 className="purple">MPSTME, NMIMS University (2023 - 2026)</h3>
              <p>B. Tech Integrated in Computer Engineering | CGPA: 3.26/4</p>

              <h3 className="purple">MPSTME, NMIMS University (2020 - 2023)</h3>
              <p>Diploma in Computer Engineering | CGPA: 3.31/4</p>

              <h3 className="purple">Kaumaram Sushila International Residential School (2019 - 2020)</h3>
              <p>IGCSE: 77.8%/100</p>
            </Col>
          </Row>

          <h1 className="project-heading">
            Certifications & <strong className="purple">Achievements</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={12} md={10} className="tech-icons-text" style={{ textAlign: "left" }}>
              <ul>
                <li>Analyse Data to Answer Questions</li>
                <li>Process Data from Dirty to Clean</li>
                <li>Prepare Data from Exploration</li>
                <li>Foundations: Data, Data, Everywhere</li>
                <li>Ask Questions to make Data Driven Decisions</li>
                <li>Neural Networks and Deep Learning</li>
                <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
