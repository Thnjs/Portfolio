import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="2D Floor Plan Generator"
              description="Developed AI-powered building design automation system that processes Mumbai DCPR regulations into a searchable vector database using ChromaDB. Built intelligent floor plan generator using Python algorithms and architected full-stack web application using Flask, SQLite, and REST APIs."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bankify"
              description="Developed microservices-based banking system using Java Spring Boot. Implemented Apache Kafka for asynchronous communication, configured PostgreSQL databases, and set up Eureka service registry. Containerized services using Docker and built REST APIs with JWT authentication."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Web Browser with JavaFX"
              description="Developed desktop web browser application using JavaFX with core navigation functionality. Implemented HTTP request handling, basic HTML parsing, and built user interface with address bar, navigation buttons, and browsing history management."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
