import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { SlArrowLeft } from "react-icons/sl";

import { Flash } from './index';

const FlashTattoos = () => {
    const [flash, setFlash] = useState([]);

    // shuffle order
    useEffect(() => {
        Flash.sort(() => Math.random() - 0.5);
        setFlash(Flash);
    }, []);

    return (
        <Container>
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