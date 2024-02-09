import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className='home d-flex justify-content-center align-items-center'>
            <Col xs={2} className='home-title d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mb-0'>OUT TO LUNCH</h1>
                <p className='mt-0 mb-2 p-0 subtitle'>by luke zampas</p>
                <div className='bar'></div>
            </Col>
            <Col xs={8} className='home-menu'>
                <Row className="my-5">
                    <Link to="/flash">
                        <p>FLASH</p>
                    </Link>
                </Row>
                <Row className="my-5">
                    <Link to="/portfolio">
                        <p>TATTOOS</p>
                    </Link>
                </Row>
                <Row className="my-5">
                    <Link to="/booking">
                        <p>BOOKING</p>
                    </Link>
                </Row>
                <Row className="my-5">
                    <Link to="/about">
                        <p>ABOUT</p>
                    </Link>
                </Row>
                <Row className="mt-5 mb-4">
                    <Link to="/contact">
                        <p>CONTACT</p>
                    </Link>
                </Row>
            </Col>
        </Container>
    );
};

export default Home;
