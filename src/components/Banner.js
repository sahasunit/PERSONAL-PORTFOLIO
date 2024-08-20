import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/images/header-img.svg';
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Softwares 💻", "Art 🎨", "Music 🎼", "Cooking 🥙", "F1 🏎️"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(200);
    const period = 500;

    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
    }

    const goToConnect = document.getElementById("connect");

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">
                                    Welcome to my portfolio
                                </span>
                                <h1>
                                    {`Hi, I'm Sunit`}
                                    <p className="wrap ms-auto">

                                        I'm interested in {text}
                                    </p>
                                </h1>
                                <p className="m-auto"> 
                                    A techie, with multiple years of coding and consulting experience, turning big ideas into smooth experiences. 
                                </p>
                                <br/>
                                <p  className="m-auto">
                                    Oh... also... when I'm not knee-deep in code, I'm busy being a copywriting wizard - 
                                    because who says you can't wear multiple hats?
                                </p>
                                <button onClick={() => goToConnect.scrollIntoView({behavior: "smooth",  block: "start"})}>
                                    Let's connect
                                    <ArrowRightCircle size={25} />
                                </button>
                            </div>}   
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}