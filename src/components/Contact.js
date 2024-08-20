import { useState, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        message: ''
    }

    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        emailjs.sendForm('service_6m7ljko', 'template_o4j09gd', form.current, {
            publicKey: '7hlVgPr22g_tysPXl',
        })
        .then(() => {
                setButtonText("Send");
                setFormDetails(formInitialDetails);
                setStatus({success: true, message: "Message sent successfully"});
            }, (error) => {
                setStatus({success: false, message: "Something went wrong, please try again later."});
                console.log(error.text);
            },
        );
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2> Get In Touch</h2>
                        <form onSubmit={handleSubmit} ref={form}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phoneNo} name="phoneNo" placeholder="Phone No." onChange={(e) => onFormUpdate('phoneNo', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                   <textarea row='6' value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                   <button type="submit">
                                        <span>
                                            {buttonText}
                                        </span>
                                   </button>
                                </Col>
                                <Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.message === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}