import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Thanush Raju Kaneshan</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I’m currently pursuing my <span className="purple">B.Tech Integrated in Computer Engineering</span> at{" "}
            <span className="purple">MPSTME, NMIMS University</span>.
            <br />
            I have a strong foundation in <span className="purple">Software Development</span> and <span className="purple">AI</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Part of Digital creatives in MUN committee
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching Students (Rotary Coimbatore)
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons (GDSC Hyphen)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thanush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
