import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({ display: "primary", message: "Send!" })

    emailjs.init({
        publicKey: '4l_2sDkwji3FrVMRX',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'email',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 30min
            throttle: 1800000,
        },
    });

    const contactSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };

        if (!name) {
            setError({ display: "danger", message: "Please include a name" })
            setTimeout(() => {
                setError({ display: "primary", message: "Send!" });
            }, 3000);
            return;
        };

        if (!email) {
            setError({ display: "danger", message: "Please include an email" })
            setTimeout(() => {
                setError({ display: "primary", message: "Send!" });
            }, 3000);
            return;
        };

        if (!message) {
            setError({ display: "danger", message: "Please include a message" })
            setTimeout(() => {
                setError({ display: "primary", message: "Send!" });
            }, 3000);
            return;
        };

        console.log(data);
    };

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
                    <Row className='my-3 mb-2'>
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
                        <Form.Control
                            type="text"
                            placeholder="What's your name?"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='email' className='my-3'>
                        <Form.Label>Email <span style={{ color: "#F66" }}>*</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="What's your email?"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='message' className='my-3'>
                        <Form.Label>Message <span style={{ color: "#F66" }}>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="What's on your mind?"
                            as="textarea"
                            rows={5}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        className='my-3'
                        variant={error.display}
                        style={{ width: "80%", margin: "auto 10%" }}
                        onClick={contactSubmit}
                    >
                        {error.message}
                    </Button>

                </Form>
            </Container>
        </Container>
    )
};

export default Contact;