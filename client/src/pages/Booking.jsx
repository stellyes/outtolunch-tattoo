import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

const Booking = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] = useState("");
    const [month1, setMonth1] = useState('Month');
    const [day1, setDay1] = useState("Day");
    const [time1, setTime1] = useState("Time");
    const [month2, setMonth2] = useState('Month');
    const [day2, setDay2] = useState("Day");
    const [time2, setTime2] = useState("Time")
    const [month3, setMonth3] = useState('Month');
    const [day3, setDay3] = useState("Day");
    const [time3, setTime3] = useState("Time");
    const [error, setError] = useState({ display: "secondary", message: "Submit" })

    // Sets button color to red and text to error message for
    // 3 seconds before reverting to prior state
    function handleError(buttonType, errorMessage) {
        setError({ display: buttonType, message: errorMessage })
        setTimeout(() => {
            setError({ display: "secondary", message: "Submit" });
        }, 3000);
    }

    function formatDate(month, day, time) {
        if (month === "Month" || day === "Day" || time === "Time") return "No date selected";
        return `${month} ${day}, at ${time}`
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!name) {
            handleError("danger", "Please provide a name");
            return;
        }

        if (!contact) {
            handleError("danger", "Please provide a contact");
            return;
        }

        if (!description) {
            handleError("danger", "Please provide a tattoo description");
            return;
        }

        // Not a required entry field
        if (notes == "") {
            setNotes("No additional notes")
        }

        if (!time1) {
            handleError("danger", "Provide at least one appointment time");
            return;
        }

        const date1 = formatDate(month1, day1, time1);
        const date2 = formatDate(month2, day2, time2);
        const date3 = formatDate(month3, day3, time3);

        const formData = {
            "from_name": name,
            "appointment_time_1": date1,
            "appointment_time_2": date2,
            "appointment_time_3": date3,
            "tattoo_description": description,
            "notes": notes,
            "reply_to": contact
        }

        const data = {
            "service_id": "service_n0f36c4",
            "template_id": "template_kt5tu0i",
            "user_id": "4l_2sDkwji3FrVMRX",
            "template_params": formData
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
                    handleError("success", "Message Sent!")
                } else {
                    handleError("danger", "Message failed. Please try again.")
                }
            });
        } catch (err) {
            handleError("danger", "500 Internal Error. Contact site administrator.")
            console.log(err)
        }
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
                <Col lg={5} md={12} className="mb-3 mx-auto booking-info d-flex flex-column justify-content-center align-items-center">
                    <h1 className='mt-3 mx-0 text-center'>Schedule your appointment!</h1>
                    <p className='text-center mx-4 mt-3'>Fill out the form below to begin the scheduling process! All bookings are handled directly by Luke (the tattoo artist), so please be patient when waiting for your response. You should receive communication about your appointment within 72 hours.</p>
                </Col>
                <Col lg={5} md={12} className="my-1 mx-auto booking-details d-flex flex-column align-items-end">
                    <Form style={{ width: "100%" }}>
                        <Form.Group className="my-3 px-0 d-flex flex-column" controlId="name">
                            <Form.Label className="mb-0 text-end">Name <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control
                                className="mt-0 pr-5"
                                type="text"
                                placeholder="What's your name?"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="px-0 d-flex flex-column my-2" controlId="contact">
                            <Form.Label className="mb-0 text-end">Email / Phone Number <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control
                                className="mt-0"
                                type="text"
                                placeholder="How can I get in touch?"
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='my-2 px-0 d-flex flex-column my-2'>
                            <Form.Label className="mb-0 text-end" >Appointment Times <span style={{ color: "#F66" }}>*</span></Form.Label>
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
                            <Container className="d-flex flex-row my-3">
                                <Form.Select
                                    className="month-select mr-1"
                                    as="select"
                                    value={month2}
                                    disabled={time1 === "Time"}
                                    onChange={(e) => setMonth2(e.target.value)}
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
                                    disabled={month2 === "Month"}
                                    className='day-select mx-1'
                                    value={day2}
                                    onChange={(e) => setDay2(e.target.value)}
                                >
                                    {handleDayPick(month2)}
                                </Form.Select>
                                <Form.Select
                                    disabled={day2 === "Day"}
                                    className='time-select'
                                    value={time2}
                                    onChange={(e) => setTime2(e.target.value)}
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
                            <Container className="d-flex flex-row">
                                <Form.Select
                                    className="month-select mr-1"
                                    as="select"
                                    value={month3}
                                    disabled={time2 === "Time"}
                                    onChange={(e) => setMonth3(e.target.value)}
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
                                    disabled={month3 === "Month"}
                                    className='day-select mx-1'
                                    value={day3}
                                    onChange={(e) => setDay3(e.target.value)}
                                >
                                    {handleDayPick(month3)}
                                </Form.Select>
                                <Form.Select
                                    disabled={day3 === "Day"}
                                    className='time-select'
                                    value={time3}
                                    onChange={(e) => setTime3(e.target.value)}
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
                            <Form.Label className="mb-0 text-end">Tattoo Description <span style={{ color: "#F66" }}>*</span></Form.Label>
                            <Form.Control
                                className="mt-0 pr-5"
                                type="text"
                                placeholder="Please provide a description of the tattoo you'd like"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="my-3 px-0 d-flex flex-column" controlId="name">
                            <Form.Label className="mb-0 text-end">Additional Notes</Form.Label>
                            <Form.Control
                                className="mt-0 pr-5"
                                type="text"
                                placeholder="Anything you'd like to mention beforehand?"
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex justify-content-center align-items-center'>
                            <Button
                                variant={error.display}
                                className='booking-submit my-3'
                                onClick={handleFormSubmit}
                            >
                                {error.message}
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
};

export default Booking;