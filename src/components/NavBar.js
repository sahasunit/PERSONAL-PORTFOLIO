import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container >
                    <Navbar.Brand href="#/" className="logo">
                        <h1>Designed by Sunit</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                            href="#workExperience" 
                            className={activeLink === 'workExperience' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('workExperience')}
                            >
                                Work Experience
                            </Nav.Link>
                            <Nav.Link 
                            href="#artworks" 
                            className={activeLink === 'artworks' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('artworks')}
                            >
                                Artworks
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sunitsaha-99/"><img src={navIcon1} alt="LinkedIn Logo"/></a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/sahasunit"><img src={navIcon2} alt="Github Logo"/></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}