import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import DatePicker from 'react-datepicker'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

const Contact = () => {
    const [startDate, setStartDate] = useState(new Date());


    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col>
                    <Link to="/" style={{ color: "#FFF" }}><SlArrowLeft /></Link>
                </Col>
                <Col className='mb-0 text-end title-text'>
                    <h1>FLASH</h1>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;