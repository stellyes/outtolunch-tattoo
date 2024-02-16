import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

const Booking = () => {
    const [month, setMonth] = useState('Month');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    };

    return (
        <Container>
            <Row className="booking-title d-flex justify-content-center align-items-center">
                <Col>
                    <Link to="/" style={{ color: "#FFF" }}><SlArrowLeft /></Link>
                </Col>
                <Col className='my-2 text-end title-text'>
                    <h1 className='my-3'>BOOKING</h1>
                </Col>
            </Row>
            <Row className="booking-form">
                <Col md={6} sm={12} className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="booking-info">Schedule your appointment!</h3>
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-end">
                    <Form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                        <Form.Group className=" px-0 d-flex flex-column" controlId="name">
                            <Form.Label className="mb-0 text-end">Name <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control className="mt-0 pr-5" type="text" placeholder="What's your name?" />
                        </Form.Group>
                        <Form.Group className="px-0 d-flex flex-column my-2" controlId="contact">
                            <Form.Label className="mb-0 text-end">Email / Phone Number <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control className="mt-0" type="text" placeholder="How can I get in touch?" />
                        </Form.Group>
                        <Form.Group className='px-4 my-2'>
                            <Form.Label>Appointment Times</Form.Label>
                            <Container className="d-flex flex-row">
                                <Form.Select
                                    className="month-select"
                                    as="select"
                                    value={month}
                                    onChange={() => setMonth('')}
                                >
                                    <option>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </Form.Select>
                                <Form.Select disabled={month === "Month"} className='day-select'>
                                    <option>Day</option>

                                </Form.Select>
                                <Form.Select disabled className='time-select'>
                                    <option>Time</option>
                                </Form.Select>
                            </Container>

                        </Form.Group>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
};

export default Booking;