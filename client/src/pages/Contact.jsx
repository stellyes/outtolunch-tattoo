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
    const [error, setError] = useState({ display: "secondary", message: "Send!" })

    function displayError(buttonType, errorMessage) {
        setError({ display: buttonType, message: errorMessage })
        setTimeout(() => {
            setError({ display: "secondary", message: "Send!" });
        }, 3000);
    }

    const contactSubmit = async (e) => {
        e.preventDefault();
        const formParams = {
            "from_name": name,
            "message": message,
            "reply_to": email,
        };

        const data = {
            "service_id": "service_n0f36c4",
            "template_id": "template_6pvgw1d",
            "user_id": "4l_2sDkwji3FrVMRX",
            "template_params": formParams
        };

        if (!name) {
            displayError("danger", "Please provide a name");
            return;
        };

        if (!email) {
            displayError("danger", "Please provide an email");
            return;
        };

        if (!message) {
            displayError("danger", "Please provide a message");
            return;
        };

        try {
            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(function (res) {
                if (res.ok) {
                    displayError("success", "Message Sent!")
                } else {
                    displayError("danger", "Message failed. Please try again.")
                }
            });
        } catch (err) {
            displayError("danger", "500 Internal Error. Contact site administrator.")
            console.log(err)
        }
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
                        className='my-3 contact-submit'
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