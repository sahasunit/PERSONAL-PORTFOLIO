import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cplusplus from "../assets/images/tech_logos/c++.png";
import figmaLogo from "../assets/images/tech_logos/figma.png";
import java from "../assets/images/tech_logos/java.png";
import javascript from "../assets/images/tech_logos/javascript.png";
import jira from "../assets/images/tech_logos/jira.png";
import linux from "../assets/images/tech_logos/linux.png";
import python from "../assets/images/tech_logos/python.png";
import react from "../assets/images/tech_logos/react.png";
import redux from "../assets/images/tech_logos/redux.png";
import confluence from "../assets/images/tech_logos/confluence.png";
import typescript from "../assets/images/tech_logos/typescript.png";
import nodejs from "../assets/images/tech_logos/nodejs.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Tech Skills
                            </h2>
                            <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={javascript} alt="javascript" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="typescript" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="python" />
                                    <h5>python</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="nodejs" />
                                    <h5>Nodejs</h5>
                                </div>
                                <div className="item">
                                    <img src={cplusplus} alt="cplusplus" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img width="200" src={linux} alt="linux" />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="redux" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={jira} alt="jira" />
                                    <h5>Jira</h5>
                                </div>
                                <div className="item">
                                    <img src={confluence} alt="confluence" />
                                    <h5>Confluence</h5>
                                </div>
                                <div className="item">
                                    <img src={figmaLogo} alt="figmaLogo" />
                                    <h5>Figma</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}