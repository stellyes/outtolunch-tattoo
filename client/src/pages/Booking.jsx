import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";
import FormRange from 'react-bootstrap/esm/FormRange'

const Booking = () => {
    const [month1, setMonth1] = useState('Month');
    const [day1, setDay1] = useState("Day");
    const [time1, setTime1] = useState("Time")


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    };

    const handleDayPick = (selectedMonth) => {
        switch (selectedMonth) {
            case "Month":
                return [<option key="default">Day</option>];
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
                return Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                ));
            case "April":
            case "June":
            case "September":
            case "November":
                return Array.from({ length: 30 }, (_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                ));
            case "February":
                return Array.from({ length: 28 }, (_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                ));
            default:
                return [];
        }
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
                <Col md={6} sm={12} className="my-3 booking-info d-flex flex-column justify-content-center align-items-center">
                    <h3 className='my-3'>Schedule your appointment!</h3>
                    <p className='text-center'>Fill out the form below to begin the scheduling process! All bookings are handled directly by Luke (the tattoo artist), so please be patient when waiting for your response. You should receive communication about your appointment within 72 hours.</p>
                </Col>
                <Col md={6} xs={12} className="my-1 booking-details d-flex flex-column align-items-end">
                    <Form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
                        <Form.Group className="my-3 px-0 d-flex flex-column" controlId="name">
                            <Form.Label className="mb-0 text-end">Name <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control className="mt-0 pr-5" type="text" placeholder="What's your name?" />
                        </Form.Group>
                        <Form.Group className="px-0 d-flex flex-column my-2" controlId="contact">
                            <Form.Label className="mb-0 text-end">Email / Phone Number <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control className="mt-0" type="text" placeholder="How can I get in touch?" />
                        </Form.Group>
                        <Form.Group className='my-2 px-0 d-flex flex-column my-2'>
                            <Form.Label className="mb-0 text-end" >Appointment Times</Form.Label>
                            <p className="text-center">Please enter at least one possible appointment time, up to 3, and we'll reach out in 72 hours to confirm your scheduling!</p>
                            <Container className="d-flex flex-row">
                                <Form.Select
                                    className="month-select mr-1"
                                    as="select"
                                    value={month1}
                                    onChange={(e) => setMonth1(e.target.value)}
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
                                <Form.Select
                                    disabled={month1 === "Month"}
                                    className='day-select mx-1'
                                    value={day1}
                                    onChange={(e) => setDay1(e.target.value)}
                                >
                                    {handleDayPick(month1)}
                                </Form.Select>
                                <Form.Select
                                    disabled={day1 === "Day"}
                                    className='time-select'
                                    value={time1}
                                    onChange={(e) => setTime1(e.target.value)}
                                >
                                    <option>Time</option>
                                    <option>11:00</option>
                                    <option>11:30</option>
                                    <option>12:00</option>
                                    <option>11:30</option>
                                    <option>1:00</option>
                                    <option>1:30</option>
                                    <option>2:00</option>
                                    <option>2:30</option>
                                    <option>3:00</option>
                                    <option>3:30</option>
                                    <option>4:00</option>
                                    <option>4:30</option>
                                    <option>5:00</option>
                                    <option>5:30</option>
                                    <option>6:00</option>
                                    <option>6:30</option>
                                    <option>7:00</option>
                                </Form.Select>
                            </Container>
                        </Form.Group>
                        <Form.Group className="my-3 px-0 d-flex flex-column" controlId="name">
                            <Form.Label className="mb-0 text-end">Additional Notes</Form.Label>
                            <Form.Control className="mt-0 pr-5" type="text" placeholder="Anything you'd like to mention beforehand?" />
                        </Form.Group>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
};

export default Booking;