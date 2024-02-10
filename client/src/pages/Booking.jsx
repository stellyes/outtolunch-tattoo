import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DatePicker from 'react-datepicker'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());


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
            <Row className="booking-form d-flex justify-content-center align-items-center">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                />
            </Row>
        </Container>
    )
};

export default Booking;