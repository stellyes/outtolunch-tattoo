import React from 'react';
import Container from 'react-bootstrap/Container';

import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    const handleRedirect = (link) => {
        window.location.assign(link);
    };

    return (
        <React.Fragment>
            <Container className="footer text-center my-1 d-flex justify-content-center align-items-center">
                <FaInstagram className='mx-3' onClick={() => handleRedirect("https://instagram.com/outtolunch.tattoo")} />
                <FaTiktok className='mx-3' onClick={() => handleRedirect("https://www.tiktok.com/@outtolunch.tattoo")} />
            </Container>
            <p className='mt-0 credits footer text-center'>Website by <a href="https://ryanengland.onrender.com">Ryan England</a></p>
        </React.Fragment>
    );
};

export default Footer;