import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'

const About = () => {

    const scrambleText = () => {
        const aboutText = "Luke Zampas runs Out To Lunch tattoo. he's been tattoing for about a decade. anything else you wanna know? book a tattoo.";
        const fontFamilies = [
            { "fontFamily": "six-hands-brush, sans-serif" },
            { "fontFamily": "six-hands-chalk, sans-serif" },
            { "fontFamily": "six-hands-condensed, sans-serif" },
            { "fontFamily": "six-hands-marker, sans-serif" },
            { "fontFamily": "six-hands-rough, sans-serif" },
            {
                "fontFamily": "six-hands-black, sans-serif",
                "fontWeight": 800,
            }
        ];

        const textArray = aboutText.split('');

        return (
            <React.Fragment>
                {textArray.map((char, index) => {
                    let i = Math.floor(Math.random() * fontFamilies.length);
                    return (
                        <span
                            key={index}
                            style={{
                                fontFamily: fontFamilies[i].fontFamily,
                                fontWeight: fontFamilies[i].fontWeight,
                                fontStyle: fontFamilies[i].fontStyle
                            }}
                        >
                            {char}
                        </span>
                    );
                })}
            </React.Fragment>
        );
    };

    return (
        <Container>
            <Container className="about-title my-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Link to="/" style={{ color: "#FFF" }}>
                            <SlArrowLeft />
                        </Link>
                    </Col>
                    <Col className='mb-0 text-end title-text'>
                        <h1>About</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='d-flex flex-column align-items-center justify-content-center my-5 p-5' >
                <h1 className='about-text my-5 py-5 text-center px-3'>{scrambleText()}</h1>
            </Container>
        </Container>
    )
};

export default About;