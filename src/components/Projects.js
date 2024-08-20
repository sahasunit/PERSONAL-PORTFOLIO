import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useState } from "react"
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import cloudcase from '../assets/images/company_logos/cloudcase/cloudcase.png';
import tsb from '../assets/images/company_logos/cloudcase/tsb.png';
import dassaultSystemes from '../assets/images/company_logos/dassult_systems/dassaultSystemes.png';
import white_paper from '../assets/images/company_logos/dassult_systems/white_paper.png';
import lbtInnovations from '../assets/images/company_logos/lbt_innovations/lbtInnovations.png';
import apas_independence from '../assets/images/company_logos/lbt_innovations/apas-independence.png';
import pearler from '../assets/images/company_logos/pearler/pearler.png';
import answer_suggestions from '../assets/images/company_logos/pearler/answer_suggestions.png';
import softwarerisk from '../assets/images/company_logos/software_risk/softwarerisk.png';
import software_risk_dashboard from '../assets/images/company_logos/software_risk/dashboard.jpeg';
import uniAdl from '../assets/images/company_logos/uniAdl/uniAdl.png';
import marking_rubric from '../assets/images/company_logos/uniAdl/marking_rubric.png';

export const Projects = () => {

    const projects = [
        {
            company: "Cloudcase Software Solutions",
            position: "Software Engineer & Consultant",
            workingPeriod: "May 2023 - July 2024",
            imgUrl1: cloudcase,
            imgUrl2: tsb,
            descriptions: [
                "• Developed and implemented a specialized feature called Debt To Income, processing over 10,000 loan applications monthly, improving loan approval accuracy by 25%.",
                "• Optimized unit testing processes using Java, reducing test execution time by 40%, leading to quicker deployments.",
                "• Consulted with banking clients in New Zealand, resulting in a 15% increase in customer satisfaction through tailored software solutions.",
                "• Managed full project life cycles, delivering 3+ major projects on time and within budget, enhancing client relationships and boosting company revenue."
            ]
        },
        {
            company: "LBT Innovations",
            position: "Software Engineer",
            workingPeriod: "September 2022 - March 2023",
            imgUrl1: lbtInnovations,
            imgUrl2: apas_independence,
            descriptions: [
                "• Engineered embedded Laboratory Information Systems (LIS) software for APAS Independence, contributing to a 20% increase in lab productivity, utilized by labs worldwide.",
                "• Led a team in developing new software packages, enhancing microprocessor communication by 15%, ensuring seamless integration with AI and Microbiology tools.",
                "• Implemented design changes in collaboration with AstraZeneca, reducing processing errors by 10%, improving overall system reliability."
            ]
        },
        {
            company: "Software Risk",
            position: "Software Engineer",
            workingPeriod: "November 2021 - August 2022",
            imgUrl1: softwarerisk,
            imgUrl2: software_risk_dashboard,
            descriptions: [
                "• Architected a patrolling mechanism on the portal, enabling media uploads for over 1,000 users, which resulted in a 30% increase in system usage.",
                "• Developed complex CRUD features using React and JavaScript, handling data for 50+ key locations, ensuring real-time accuracy with Google Maps API.",
                "• Improved team efficiency by 20% through the integration of Saga for API management and Redux for global state management, leading to smoother project executions."
            ]
        },
        {
            company: "University of Adelaide",
            position: "Software Engineering and Project Tutor",
            workingPeriod: "July 2021 - December 2021",
            imgUrl1: uniAdl,
            imgUrl2: marking_rubric,
            descriptions: [
                "• Worked with industry clients to analyse, review and provide security patches to a questionnaire web app using tech like React, NodeJs, JavaScript, HTML, CSS",
                "• provided guidance to multiple student teams to understand principals of program design techniques and paradigms in association to version control, quality assurance, risk analysis & project management.",
                "• Discussed software development techniques and methodologies like Agile and Scrum with multiple teams and analysed their level of understanding and use of software tools. ",
            ]
        },
        {
            company: "Pearler ",
            position: "Software Engineer",
            workingPeriod: "September 2020 - October 2021",
            imgUrl1: pearler,
            imgUrl2: answer_suggestions,
            descriptions: [
                "• Constructed advanced filtering algorithms, increasing page load speed by 35% and improving user retention by 12% on dynamic web pages.",
                "• Collaborated in the development of reusable, high-quality React components, reducing development time by 25% across multiple projects.",
                "• Enhanced user experience with responsive designs, driving a 15% increase in mobile traffic by implementing CSS animations and ensuring cross-device compatibility."
            ]
        },
        {
            company: "Dassault Systèmes",
            position: "Systems Engineering Intern",
            workingPeriod: "December 2019 - February 2020",
            imgUrl1: dassaultSystemes,
            imgUrl2: white_paper,
            descriptions: [
                "• Studied Model-Based System Engineering (MBSE) under the System Engineering Methodology from NoMagic book created by MagicGrid to understand System Modelling Language (SysML). ",
                "• System designed a Self-Checkout machine which consisted of the Problem Domain, Solution Domain and the Implementation with the knowledge gained from the practical materials and the diagrams learnt. ",
                "• Wrote a white paper for Dassault Systèmes which covered Cameo and the importance of Systems Engineering in large-scaled projects"
            ]
        }
    ];

    const [cardIndex, setCardIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setCardIndex(selectedIndex);
    };

    return (
        <section className="work" id="workExperience">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                <h2>Work Experience</h2>
                                <div className="workCard">
                                    <Carousel activeIndex={cardIndex} onSelect={handleSelect}>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <Carousel.Item>
                                                        <ProjectCard key={index} {...project} />
                                                    </Carousel.Item>
                                                )
                                            })
                                        }
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