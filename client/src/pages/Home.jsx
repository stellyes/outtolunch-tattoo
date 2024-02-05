import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to Out to Lunch Tattoo</h1>
                    <p>Get your dream tattoo with our talented artists!</p>
                    <Button variant="primary">Book an Appointment</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
