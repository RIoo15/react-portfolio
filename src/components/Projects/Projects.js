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
              imgPath={chatify}
              isBlog={false}
              title="Medicosurvelliance"
              description="Application designed to streamline medical data collection and surveillance.The
              project serves as a user-friendly interface for healthcare personnel to input and
              access critical medical data."
              ghLink="https://medicosurveillance1310.netlify.app/"
              demoLink="https://medicosurveillance1310.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React Ecommerce"
              description="This project gives details of shopping website in ecommerce field. This project
              demonstrates strong skills in HTML for structuring content, Tailwind CSS for
              styling, and React JS for interactivity."
              ghLink="https://rioo15.github.io/Ecommerce/"
              demoLink="https://rioo15.github.io/Ecommerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real Estate React"
              description="The project serves as a user-friendly interface consisting of land and the
              buildings on it. This project demonstrates strong skills in HTML for structuring
              content, Tailwind CSS for styling, and React JS for interactivity."
              ghLink="https://rioo15.github.io/real-estate-react/"
              demoLink="https://rioo15.github.io/real-estate-react/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Moshify"
              description="I was able to achieve an accuracy of 98% by using colone Of Moshify in building the responsive website using HTML, CSS and Java Script."
              ghLink="https://responsive7410.netlify.app/"
              demoLink="https://responsive7410.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Text Utils"
              description="Supports dark mode and easy to write use Text Utils using markdown.."
              ghLink="https://rioo15.github.io/ReactCourse/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Education"
              description=" The highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://education7410.netlify.app/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
