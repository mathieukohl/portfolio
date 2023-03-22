import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/orion.png"
import 'animate.css';

export const Banner = () => {

    const [loopNum, setLooNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Mobile App Developer", "Full-Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLooNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className={"animate__animated animate__fadeIn"}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h2>{`Hi I'm Mathieu, `}<span className="wrap">{text}</span></h2>
                            <p>Passionate about the IT world, I am currently working as Full Stack Developer. Curious and passionate about innovation, I am interested in any project that could improve my skills and my goals.</p>
                            <button onClick={()=> openInNewTab('https://www.linkedin.com/in/mathieu-kohl/')}>Let's connect <ArrowRightCircle size={25}/></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                            <div className={ "animate__animated animate__zoomIn"}>
                                <img class="img_rotate" src={headerImg} alt="Header Img"/>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}