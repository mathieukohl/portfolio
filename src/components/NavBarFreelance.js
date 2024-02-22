import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
//import { Link } from 'react-router-dom';
import logo from "../assets/img/logo_Mathieu.png"

export const NavBarFreelance = () => {

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


    return (
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              {/* <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="navbar-link nav-link" to="/freeHome">Home</Link>
                </Nav>
              </Navbar.Collapse> */}
            </Container>
          </Navbar>
      )
}