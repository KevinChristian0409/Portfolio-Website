import React from "react";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="section-title">Skills</h2>
              <p>
                Here is a list of my skills and expertise in various domains:
              </p>
              <div className="skills-list">
                <div className="skill-item">
                  <h5 className="skill-title">Programming Languages</h5>
                  <p>C, C++, JAVA, Python</p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">Database Management</h5>
                  <p>Oracle 12c, MySQL, MongoDB, PostgreSQL</p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">Project Management</h5>
                  <p>JIRA, MS Project, Visual Paradigm</p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">Web Development</h5>
                  <p>
                    HTML, CSS, JavaScript, Node JS, Express JS, Handlebars JS,
                    React JS, Angular JS, Next JS, Heroku, AJAX, JSON, JWT (JSON
                    Web Token), GIT, jQuery, Bootstrap
                  </p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">
                    Testing and Quality Assurance Tools
                  </h5>
                  <p>
                    Selenium, Cucumber, Postman, Mocha, Micro Focus Unified
                    Functional Testing (UFT), TestComplete, Cypress, Playwright,
                    TestNG, JUnit, Jest, SonarQube
                  </p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">DevOps Tools</h5>
                  <p>
                    Jenkins, CircleCI, Travis CI, Docker, Apache Maven, Puppet,
                    Git, AWS, Azure
                  </p>
                </div>
                <div className="skill-item">
                  <h5 className="skill-title">Other Tools</h5>
                  <p>
                    Atlassian Confluence, MS Visual Studio, MS Visual Code, MS
                    Office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
