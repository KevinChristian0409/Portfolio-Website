import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {" "}
          <Col size={12} sm={6} className="mt-4">
            {" "}
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/kevin-christian-105b5322a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="mailto:christiankevin0409@gmail.com">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://instagram.com/kevinn_0409?igshid=NGk0bDB6djNteWFl"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
