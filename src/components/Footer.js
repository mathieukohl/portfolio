import { Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
            <div className="social-icon-footer">
              <a href="https://www.linkedin.com/in/mathieu-kohl/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/mathieukohl"><img src={navIcon2} alt="github" /></a>
              <a href="https://www.instagram.com/kohlmathieu/"><img src={navIcon3} alt="instagram" /></a>
              <a href="https://www.fiverr.com/kohlmathieu"><img src={navIcon4} alt="fiverr" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}