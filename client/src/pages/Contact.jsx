import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'

const Contact = () => {
    return (
        <Container>
            <Container className="contact-title my-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Link to="/" style={{ color: "#FFF" }}>
                            <SlArrowLeft />
                        </Link>
                    </Col>
                    <Col className='mb-0 text-end title-text'>
                        <h1>Contact</h1>
                    </Col>
                </Row>
            </Container>
            <Link to='/booking'>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                    <Row className='my-3'>
                        <Col className='booking-check text-center pt-5 pb-4 px-4'>
                            <h3>Looking to book an appointment?</h3>
                            <p>Click this box to head over to the booking page and fill out the form!</p>
                        </Col>
                    </Row>
                </Container>
            </Link>
            <Container className='contact'>

            </Container>
        </Container>
    )
};

export default Contact;