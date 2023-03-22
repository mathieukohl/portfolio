import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl,linkUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={linkUrl} target="_blank" rel="noreferrer">
                    <img alt="imgUrl" src={imgUrl} />
                    <div className="proj-txtx">
                    <h3>{title}</h3>
                    <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}