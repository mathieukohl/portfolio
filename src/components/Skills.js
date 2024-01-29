import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../assets/data/data";

export const Skills = () => {
    return (
      <section id="skills">
        <div className="skills-container">
          <div className="skills-header">
            <ChipIcon className="skills-icon" />
            <h1 className="skills-title">
              Skills &amp; Technologies
            </h1>
            <p className="skills-description">
            As a full-stack developer, I possess a wide range of technical skills and experience that enable me to create robust and high-quality solutions. Some of my key skills include:
            </p>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                <div className="skill-card">
                  <BadgeCheckIcon className="skill-icon" />
                  <span className="skill-text">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
// import { Container, Row, Col } from "react-bootstrap";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";

// export const Skills = () => {
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//     return(
//         <section className="skill" id="skills">
//             <Container>
//                 <Row>
//                     <Col>
//                         <div className="skill-bx">
//                             <h2>Skills</h2>
//                             <p>As a full-stack developer, I possess a wide range of technical skills and experience that enable me to create robust and high-quality solutions. Some of my key skills include: </p>
//                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                                 <div className="item">
//                                     <img src={meter3} alt="" />
//                                     <h5>Web Development</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter1} alt="" />
//                                     <h5>Ecommerce Development</h5>
//                                 </div>
//                                 <div className="item">
//                                     <img src={meter2} alt="" />
//                                     <h5>App Development</h5>
//                                 </div>
//                             </Carousel>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
    
// }