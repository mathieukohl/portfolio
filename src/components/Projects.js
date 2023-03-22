import projImg1 from "../assets/img/stayinmtn.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const webProjects = [
        {
            title: "stayinmtn.com",
            description: "Design & Development",
            linkUrl: "https://www.stayinmtn.com/",
            imgUrl: projImg1,
          },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Below, you'll find a selection of some of my recent work as a full-stack developer. Each project showcases my skills and expertise in a range of technologies</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Ecommerce</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className={"justify-content-center"}>
                                        {
                                        webProjects.map((project, index) => {
                                            return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Coming soon</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Coming soon</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img alt="background" className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}