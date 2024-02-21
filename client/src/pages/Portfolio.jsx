import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

import { Tattoos } from './index';

const Portfolio = () => {
    const [images, setimages] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpImage, setPopUpImage] = useState("");

    // Random sort of tattoo images
    useEffect(() => {
        Tattoos.sort(() => Math.random() - 0.5);
        setimages(Tattoos);
    }, []);

    return (
        <Container>
            <Container className={`portfolio-pop-up ${showPopUp ? 'show' : ''}`}>
                <Container onClick={() => setShowPopUp(false)}></Container>
            </Container>
            <Container className="flash-title my-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Link to="/" style={{ color: "#FFF" }}><SlArrowLeft /></Link>
                    </Col>
                    <Col className='mb-0 text-end title-text'>
                        <h1>TATTOO</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="flash">
                {images.map((image, index) => {
                    return (
                        <Container
                            className="flash-item"
                            key={index}
                            onClick={() => {
                                setShowPopUp(true);
                                setPopUpImage(image.image);
                            }}
                        >
                            <Image
                                src={image.image}
                                alt={image.title}
                                style={{ width: "100%" }}
                            />
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
};

export default Portfolio;