import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { SlArrowLeft } from "react-icons/sl";

import flash1 from '../assets/images/flash/flash1.jpeg';
import flash2 from '../assets/images/flash/flash2.jpeg';
import flash3 from '../assets/images/flash/flash3.jpeg';
import flash4 from '../assets/images/flash/flash4.jpeg';
import flash5 from '../assets/images/flash/flash5.jpeg';
import flash6 from '../assets/images/flash/flash6.jpeg';
import flash7 from '../assets/images/flash/flash7.jpeg';
import flash8 from '../assets/images/flash/flash8.jpg';
import flash9 from '../assets/images/flash/flash9.jpg';
import flash10 from '../assets/images/flash/flash10.jpeg';
import flash11 from '../assets/images/flash/flash11.jpeg';
import flash12 from '../assets/images/flash/flash12.jpeg';
import flash13 from '../assets/images/flash/flash13.jpeg';
import flash14 from '../assets/images/flash/flash14.jpeg';
import flash15 from '../assets/images/flash/flash15.jpeg';
import flash16 from '../assets/images/flash/flash16.jpeg';
import flash17 from '../assets/images/flash/flash17.jpeg';
import flash18 from '../assets/images/flash/flash18.jpeg';
import flash19 from '../assets/images/flash/flash19.jpeg';
import flash20 from '../assets/images/flash/flash20.jpeg';
import flash21 from '../assets/images/flash/flash21.jpeg';
import flash22 from '../assets/images/flash/flash22.jpeg';
import flash23 from '../assets/images/flash/flash23.jpeg';
import flash24 from '../assets/images/flash/flash24.jpeg';
import flash25 from '../assets/images/flash/flash25.jpeg';
import flash26 from '../assets/images/flash/flash26.jpeg';
import flash27 from '../assets/images/flash/flash27.jpeg';
import flash28 from '../assets/images/flash/flash28.jpeg';
import flash29 from '../assets/images/flash/flash29.jpeg';
import flash30 from '../assets/images/flash/flash30.jpeg';

const Flash = () => {
    const [flash, setFlash] = useState([]);

    // shuffle order
    useEffect(() => {
        let sortedFlash = [
            {
                id: 1,
                fp: flash1,
                name: "flash1"
            },
            {
                id: 2,
                fp: flash2,
                name: "flash2"
            },
            {
                id: 3,
                fp: flash3,
                name: "flash3"
            },
            {
                id: 4,
                fp: flash4,
                name: "flash4"
            },
            {
                id: 5,
                fp: flash5,
                name: "flash5"
            },
            {
                id: 6,
                fp: flash6,
                name: "flash6"
            },
            {
                id: 7,
                fp: flash7,
                name: "flash7"
            },
            {
                id: 8,
                fp: flash8,
                name: "flash8"
            },
            {
                id: 9,
                fp: flash9,
                name: "flash9"
            },
            {
                id: 10,
                fp: flash10,
                name: "flash10"
            },
            {
                id: 11,
                fp: flash11,
                name: "flash11"
            },
            {
                id: 12,
                fp: flash12,
                name: "flash12"
            },
            {
                id: 13,
                fp: flash13,
                name: "flash13"
            },
            {
                id: 14,
                fp: flash14,
                name: "flash14"
            },
            {
                id: 15,
                fp: flash15,
                name: "flash15"
            },
            {
                id: 16,
                fp: flash16,
                name: "flash16"
            },
            {
                id: 17,
                fp: flash17,
                name: "flash17"
            },
            {
                id: 18,
                fp: flash18,
                name: "flash18"
            },
            {
                id: 19,
                fp: flash19,
                name: "flash19"
            },
            {
                id: 20,
                fp: flash20,
                name: "flash20"
            },
            {
                id: 21,
                fp: flash21,
                name: "flash21"
            },
            {
                id: 22,
                fp: flash22,
                name: "flash22"
            },
            {
                id: 23,
                fp: flash23,
                name: "flash23"
            },
            {
                id: 24,
                fp: flash24,
                name: "flash24"
            },
            {
                id: 25,
                fp: flash25,
                name: "flash25"
            },
            {
                id: 26,
                fp: flash26,
                name: "flash26"
            },
            {
                id: 27,
                fp: flash27,
                name: "flash27"
            },
            {
                id: 28,
                fp: flash28,
                name: "flash28"
            },
            {
                id: 29,
                fp: flash29,
                name: "flash29"
            },
            {
                id: 30,
                fp: flash30,
                name: "flash30"
            }
        ];

        sortedFlash.sort(() => Math.random() - 0.5);
        setFlash(sortedFlash);
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
                {flash.map((image, index) => {
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

export default Flash;  