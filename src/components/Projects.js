import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { split } from "sentence-splitter"; // Import the sentence-splitter library

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website (React js)",
      description: `Created a React-powered personal portfolio website hosted on Vercel: https://portfolio-website-eta-flax.vercel.app.
Designed a responsive, professional layout to showcase skills and achievements effectively.
Demonstrated expertise in modern web development and user-centric design principles.
Optimized performance for enhanced user experience, showcasing dedication to top-tier web development.`,
    },
    {
      title: "CI/CD Pipeline Implementation (Jenkins)",
      description: `Designed and configured a Jenkins-based CI/CD pipeline for the Government of Ontario's web app.
Leveraged Linux shell scripting for automation, including remote Jenkins integration.
Efficiently managed build artifacts using Nexus Repository.
Strengthened system security with code and deployment security measures.
Orchestrated automated testing within the pipeline for code quality and reliability.`,
    },
    {
      title: "Database Design and Creation (Oracle 12c)",
      description: `Analyzed business requirements and created an Entity-Attribute List.
Normalized the list to develop a relational database design.
Produced a Crow's Foot Notation ERD to represent the final design.
Implemented the database in Oracle 12c with tables, attributes, and constraints.
Enhanced data management, integrity, and performance with procedures, triggers, indexes, and views.`,
    },
  ];

  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  const splitSentences = (description) => {
    const sentences = split(description);
    return sentences.map((sentence, i) => <p key={i}>{sentence.raw}</p>);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabClick}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`project-${index + 1}`}>
                            {project.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={`project-${index + 1}`} key={index}>
                          {splitSentences(project.description)}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
