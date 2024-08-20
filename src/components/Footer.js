import { Col, Container, Row, Image } from "react-bootstrap"
import logo from "../assets/images/sunitsPic.png";
import navIcon from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <Image src={logo} alt="Logo" roundedCircle/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon mt-4">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sunitsaha-99/"><img src={navIcon} alt="LinkedIn Icon" /></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/sahasunit"><img src={navIcon2} alt="Github Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}