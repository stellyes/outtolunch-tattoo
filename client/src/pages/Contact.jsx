import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'
import { FaInstagram, FaTiktok } from "react-icons/fa";

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
            <Container className='contact my-4'>
                <h3 className='contact-title text-center mt-3 mb-0'>Socials</h3>
                <Container className='socials d-flex justify-content-center my-5'>
                    <FaInstagram />
                    <FaTiktok />
                </Container>

            </Container>
            <Container className='contact my-4'>
                <h3 className='contact-title text-center mt-3 mb-0'>Contact Form</h3>
                <Form className='my-3'>
                    <Form.Group controlId='name' className='mb-3'>
                        <Form.Label>Name <span style={{ color: "#F66" }}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="What's your name?" />
                    </Form.Group>
                    <Form.Group controlId='email' className='my-3'>
                        <Form.Label>Email <span style={{ color: "#F66" }}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="What's your email?" />
                    </Form.Group>
                    <Form.Group controlId='subject' className='my-3'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="What's up?" />
                    </Form.Group>
                    <Form.Group controlId='message' className='my-3'>
                        <Form.Label>Message <span style={{ color: "#F66" }}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="What's on your mind?" as="textarea" rows={5} />
                    </Form.Group>
                    <Button type="submit" className='my-3' style={{ width: "80%", margin: "auto 10%" }}>Send!</Button>

                </Form>
            </Container>
        </Container>
    )
};

export default Contact;