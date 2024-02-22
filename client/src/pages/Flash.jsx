import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { SlArrowLeft } from "react-icons/sl";

import { Flash } from './index';

const FlashTattoos = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpImage, setPopUpImage] = useState("");

    // shuffle order
    useEffect(() => {
        Flash.sort(() => Math.random() - 0.5);
    }, []);

    return (
        <Container>
            <Container
                className={`portfolio-pop-up ${showPopUp ? 'show' : ''}`}
                onClick={() => {
                    setShowPopUp(false);
                    setPopUpImage("");
                }}
            >
                <Row className='pop-up-content mx-auto d-flex flex-row align-items-center'>
                    <Col
                        lg={5} md={12}
                        className='pop-up-image my-2'
                        style={{ backgroundImage: `url(${popUpImage})` }}
                    >
                    </Col>
                    <Col
                        lg={5} md={12}
                        className='pop-up-text my-3 text-center d-flex flex-column align-items-center'
                    >
                        <h4 className='mt-0 mb-1' style={{ width: "100%" }}>Like this flash?</h4>
                        <p style={{ fontFamily: `"bookmania", serif` }}>If you'd like to schedule an appointment, click the link below to start the booking process!</p>
                        <Button className='text-center mb-1' variant='success' style={{ fontFamily: `"bookmania", serif` }}><Link to='/booking' style={{ color: "#FFF" }}>Book an appointment!</Link></Button>
                    </Col>
                </Row>
            </Container>
            <Container className="flash-title my-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Link to="/" style={{ color: "#FFF" }}>
                            <SlArrowLeft />
                        </Link>
                    </Col>
                    <Col className='mb-0 text-end title-text'>
                        <h1>FLASH</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="flash">
                {Flash.map((image, index) => {
                    return (
                        <Container
                            className="flash-item"
                            key={index}
                            onClick={() => {
                                setShowPopUp(true);
                                setPopUpImage(image.fp);
                            }}
                        >
                            <Image
                                src={image.fp}
                                alt={image.name}
                                style={{ width: "100%" }}
                            />
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
};

export default FlashTattoos;  