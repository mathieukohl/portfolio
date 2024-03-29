import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo_Mathieu.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/nav-icon4.svg"

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.screenY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false); 
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                  <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                  <Link className="navbar-link nav-link" to="/more">More</Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/mathieu-kohl/"><img src={navIcon1} alt="linkedin" /></a>
                    <a href="https://github.com/mathieukohl"><img src={navIcon2} alt="github" /></a>
                    <a href="https://www.instagram.com/kohlmathieu/"><img src={navIcon3} alt="instagram" /></a>
                    <a href="https://www.fiverr.com/kohlmathieu"><img src={navIcon4} alt="instagram" /></a>
                  </div>
                    <button onClick={()=> openInNewTab('https://www.linkedin.com/in/mathieu-kohl/')} className="vvd"><span>Let’s Connect</span></button>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      )
}