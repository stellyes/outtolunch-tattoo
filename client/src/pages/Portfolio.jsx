import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { SlArrowLeft } from "react-icons/sl";

import tat1 from "../assets/images/tattoo/tat1.jpeg";
import tat2 from "../assets/images/tattoo/tat2.jpeg";
import tat3 from "../assets/images/tattoo/tat3.jpeg";
import tat4 from "../assets/images/tattoo/tat4.jpeg";
import tat5 from "../assets/images/tattoo/tat5.jpeg";
import tat6 from "../assets/images/tattoo/tat6.jpeg";
import tat7 from "../assets/images/tattoo/tat7.jpeg";
import tat8 from "../assets/images/tattoo/tat8.jpeg";
import tat9 from "../assets/images/tattoo/tat9.jpeg";
import tat10 from "../assets/images/tattoo/tat10.jpeg";
import tat11 from "../assets/images/tattoo/tat11.jpeg";
import tat12 from "../assets/images/tattoo/tat12.jpeg";
import tat13 from "../assets/images/tattoo/tat13.jpeg";
import tat14 from "../assets/images/tattoo/tat14.jpeg";
import tat15 from "../assets/images/tattoo/tat15.jpeg";
import tat16 from "../assets/images/tattoo/tat16.jpeg";
import tat17 from "../assets/images/tattoo/tat17.jpeg";
import tat18 from "../assets/images/tattoo/tat18.jpeg";
import tat19 from "../assets/images/tattoo/tat19.jpeg";
import tat20 from "../assets/images/tattoo/tat20.jpeg";
import tat21 from "../assets/images/tattoo/tat21.jpeg";
import tat22 from "../assets/images/tattoo/tat22.jpeg";
import tat23 from "../assets/images/tattoo/tat23.jpeg";
import tat24 from "../assets/images/tattoo/tat24.jpeg";
import tat25 from "../assets/images/tattoo/tat25.jpeg";
import tat26 from "../assets/images/tattoo/tat26.jpeg";
import tat27 from "../assets/images/tattoo/tat27.jpeg";
import tat28 from "../assets/images/tattoo/tat28.jpeg";
import tat29 from "../assets/images/tattoo/tat29.jpeg";
import tat30 from "../assets/images/tattoo/tat30.jpeg";
import tat31 from "../assets/images/tattoo/tat31.jpeg";
import tat32 from "../assets/images/tattoo/tat32.jpeg";
import tat33 from "../assets/images/tattoo/tat33.jpeg";
import tat34 from "../assets/images/tattoo/tat34.jpeg";
import tat35 from "../assets/images/tattoo/tat35.jpeg";
import tat36 from "../assets/images/tattoo/tat36.jpeg";
import tat37 from "../assets/images/tattoo/tat37.jpeg";
import tat38 from "../assets/images/tattoo/tat38.jpeg";
import tat39 from "../assets/images/tattoo/tat39.jpeg";
import tat40 from "../assets/images/tattoo/tat40.jpeg";
import tat41 from "../assets/images/tattoo/tat41.jpeg";
import tat42 from "../assets/images/tattoo/tat42.jpeg";
import tat43 from "../assets/images/tattoo/tat43.jpeg";
import tat44 from "../assets/images/tattoo/tat44.jpeg";
import tat45 from "../assets/images/tattoo/tat45.jpeg";
import tat46 from "../assets/images/tattoo/tat46.jpeg";
import tat47 from "../assets/images/tattoo/tat47.jpeg";
import tat48 from "../assets/images/tattoo/tat48.jpeg";
import tat49 from "../assets/images/tattoo/tat49.jpeg";
import tat50 from "../assets/images/tattoo/tat50.jpeg";
import tat51 from "../assets/images/tattoo/tat51.jpeg";
import tat52 from "../assets/images/tattoo/tat52.jpeg";
import tat53 from "../assets/images/tattoo/tat53.jpeg";
import tat54 from "../assets/images/tattoo/tat54.jpeg";
import tat55 from "../assets/images/tattoo/tat55.jpeg";
import tat56 from "../assets/images/tattoo/tat56.jpeg";
import tat57 from "../assets/images/tattoo/tat57.jpeg";
import tat58 from "../assets/images/tattoo/tat58.jpeg";
import tat59 from "../assets/images/tattoo/tat59.jpeg";
import tat60 from "../assets/images/tattoo/tat60.jpeg";
import tat61 from "../assets/images/tattoo/tat61.jpeg";


const Portfolio = () => {
    const [images, setimages] = useState([]);

    useEffect(() => {
        let TattooImages = [
            {
                id: 1,
                image: tat1,
                title: "Tattoo Image 1",
            },
            {
                id: 2,
                image: tat2,
                title: "Tattoo Image 2",
            },
            {
                id: 3,
                image: tat3,
                title: "Tattoo Image 3",
            },
            {
                id: 4,
                image: tat4,
                title: "Tattoo Image 4",
            },
            {
                id: 5,
                image: tat5,
                title: "Tattoo Image 5",
            },
            {
                id: 6,
                image: tat6,
                title: "Tattoo Image 6",
            },
            {
                id: 7,
                image: tat7,
                title: "Tattoo Image 7",
            },
            {
                id: 8,
                image: tat8,
                title: "Tattoo Image 8",
            },
            {
                id: 9,
                image: tat9,
                title: "Tattoo Image 9",
            },
            {
                id: 10,
                image: tat10,
                title: "Tattoo Image 10",
            },
            {
                id: 11,
                image: tat11,
                title: "Tattoo Image 11",
            },
            {
                id: 12,
                image: tat12,
                title: "Tattoo Image 12",
            },
            {
                id: 13,
                image: tat13,
                title: "Tattoo Image 13",
            },
            {
                id: 14,
                image: tat14,
                title: "Tattoo Image 14",
            },
            {
                id: 15,
                image: tat15,
                title: "Tattoo Image 15",
            },
            {
                id: 16,
                image: tat16,
                title: "Tattoo Image 16",
            },
            {
                id: 17,
                image: tat17,
                title: "Tattoo Image 17",
            },
            {
                id: 18,
                image: tat18,
                title: "Tattoo Image 18",
            },
            {
                id: 19,
                image: tat19,
                title: "Tattoo Image 19",
            },
            {
                id: 20,
                image: tat20,
                title: "Tattoo Image 20",
            },
            {
                id: 21,
                image: tat21,
                title: "Tattoo Image 21",
            },
            {
                id: 22,
                image: tat22,
                title: "Tattoo Image 22",
            },
            {
                id: 23,
                image: tat23,
                title: "Tattoo Image 23",
            },
            {
                id: 24,
                image: tat24,
                title: "Tattoo Image 24",
            },
            {
                id: 25,
                image: tat25,
                title: "Tattoo Image 25",
            },
            {
                id: 26,
                image: tat26,
                title: "Tattoo Image 26",
            },
            {
                id: 27,
                image: tat27,
                title: "Tattoo Image 27",
            },
            {
                id: 28,
                image: tat28,
                title: "Tattoo Image 28",
            },
            {
                id: 29,
                image: tat29,
                title: "Tattoo Image 29",
            },
            {
                id: 30,
                image: tat30,
                title: "Tattoo Image 30",
            },
            {
                id: 31,
                image: tat31,
                title: "Tattoo Image 31",
            },
            {
                id: 32,
                image: tat32,
                title: "Tattoo Image 32",
            },
            {
                id: 33,
                image: tat33,
                title: "Tattoo Image 33",
            },
            {
                id: 34,
                image: tat34,
                title: "Tattoo Image 34",
            },
            {
                id: 35,
                image: tat35,
                title: "Tattoo Image 35",
            },
            {
                id: 36,
                image: tat36,
                title: "Tattoo Image 36",
            },
            {
                id: 37,
                image: tat37,
                title: "Tattoo Image 37",
            },
            {
                id: 38,
                image: tat38,
                title: "Tattoo Image 38",
            },
            {
                id: 39,
                image: tat39,
                title: "Tattoo Image 39",
            },
            {
                id: 40,
                image: tat40,
                title: "Tattoo Image 40",
            },
            {
                id: 41,
                image: tat41,
                title: "Tattoo Image 41",
            },
            {
                id: 42,
                image: tat42,
                title: "Tattoo Image 42",
            },
            {
                id: 43,
                image: tat43,
                title: "Tattoo Image 43",
            },
            {
                id: 44,
                image: tat44,
                title: "Tattoo Image 44",
            },
            {
                id: 45,
                image: tat45,
                title: "Tattoo Image 45",
            },
            {
                id: 46,
                image: tat46,
                title: "Tattoo Image 46",
            },
            {
                id: 47,
                image: tat47,
                title: "Tattoo Image 47",
            },
            {
                id: 48,
                image: tat48,
                title: "Tattoo Image 48",
            },
            {
                id: 49,
                image: tat49,
                title: "Tattoo Image 49",
            },
            {
                id: 50,
                image: tat50,
                title: "Tattoo Image 50",
            },
            {
                id: 51,
                image: tat51,
                title: "Tattoo Image 51",
            },
            {
                id: 52,
                image: tat52,
                title: "Tattoo Image 52",
            },
            {
                id: 53,
                image: tat53,
                title: "Tattoo Image 53",
            },
            {
                id: 54,
                image: tat54,
                title: "Tattoo Image 54",
            },
            {
                id: 55,
                image: tat55,
                title: "Tattoo Image 55",
            },
            {
                id: 56,
                image: tat56,
                title: "Tattoo Image 56",
            },
            {
                id: 57,
                image: tat57,
                title: "Tattoo Image 57",
            },
            {
                id: 58,
                image: tat58,
                title: "Tattoo Image 58",
            },
            {
                id: 59,
                image: tat59,
                title: "Tattoo Image 59",
            },
            {
                id: 60,
                image: tat60,
                title: "Tattoo Image 60",
            },
            {
                id: 61,
                image: tat61,
                title: "Tattoo Image 61",
            },
        ];

        TattooImages.sort(() => Math.random() - 0.5);
        setimages(TattooImages);
    }, []);

    return (
        <Container>
            <Container className="flash-title my-3">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Link to="/" style={{ color: "#FFF" }}><SlArrowLeft /></Link>
                    </Col>
                    <Col className='mb-0 text-end title-text'>
                        <h1>TATTOO</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="flash">
                {images.map((image, index) => {
                    return (
                        <Container
                            className="flash-item"
                            key={index}
                        >
                            <Image
                                src={image.image}
                                alt={image.title}
                                style={{ width: "100%" }}
                            />
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
};

export default Portfolio;