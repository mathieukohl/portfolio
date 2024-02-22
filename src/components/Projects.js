import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { appProjects } from "./projects/AppProject";
import { Gallery } from "./Gallery";
import { Web_Gallery } from "./Web_Gallery"

export const Projects = () => {

    const AppProjects = appProjects; // Use the imported array

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
                                    <Nav.Link eventKey="wordpress">CMS</Nav.Link>
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
                                    <Web_Gallery/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="wordpress">
                                    <Gallery/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row className={"justify-content-center"}>
                                        {
                                        AppProjects.map((project, index) => {
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
                                <Tab.Pane eventKey="third">
                                    <p style={{ textAlign: 'center' }}>Coming soon</p>
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