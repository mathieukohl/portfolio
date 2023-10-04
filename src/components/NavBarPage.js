import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
import logo from "../assets/img/logo_Mathieu.png"

export const NavBarPage = () => {

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
            </Container>
          </Navbar>
      )
}