import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import buddhaPainting from "../assets/images/artworks/buddha.png";
import ganeshPainting from "../assets/images/artworks/ganesh.png";
import ladyPainting from "../assets/images/artworks/lady.png";
import lionsPainting from "../assets/images/artworks/lions.png";
import sunsetPainting from "../assets/images/artworks/sunset.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Artworks = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="artworks">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                <div className="artwork-bx">
                                    <h2>
                                        Artworks
                                    </h2>
                                    <p>
                                        During my free time, I let my right brain take control and channel my creative thinking
                                    </p>
                                    <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="owl-carousel owl-theme skill-slider"
                                    >
                                        <div className="item">
                                            <img src={buddhaPainting} alt="buddha Painting" />
                                        </div>
                                        <div className="item">
                                            <img src={ganeshPainting} alt="ganesh Painting" />
                                        </div>
                                        <div className="item">
                                            <img src={ladyPainting} alt="lady Painting" />
                                        </div>
                                        <div className="item">
                                            <img src={lionsPainting} alt="lions Painting" />
                                        </div>
                                        <div className="item">
                                            <img src={sunsetPainting} alt="sunset Painting" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}