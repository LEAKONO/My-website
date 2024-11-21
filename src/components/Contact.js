import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactSection id="contact">
            <h3>Get In Touch</h3>
            <p>Need to talk or make inquiries on my work?</p>
            <ContactInfo>
                <ContactLink href="tel:+254 113535094">
                    <FaPhone className="contact-icon" /> +254 11 353 5094
                </ContactLink>
                <ContactLink href="mailto:leakonoemmanuel3@gmail.com">
                    <FaEnvelope className="contact-icon" /> Email
                </ContactLink>
                <ContactLink
                    href="https://www.linkedin.com/in/emmanuel-leakono-7125472b8/?originalSubdomain=ke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="contact-icon" /> LinkedIn
                </ContactLink>
                <ContactLink
                    href="https://github.com/LEAKONO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="contact-icon" /> GitHub
                </ContactLink>
            </ContactInfo>
        </ContactSection>
    );
};

export default Contact;

// Styled Components
const ContactSection = styled.section`
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;

    h3 {
        margin-bottom: 10px;
        font-size: 2rem;
        color: #333;
    }

    p {
        margin-bottom: 20px;
        font-size: 1rem;
        color: #555;
    }

    @media (max-width: 768px) {
        padding: 15px;

        h3 {
            font-size: 1.8rem;
        }

        p {
            font-size: 0.95rem;
        }
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

const ContactLink = styled.a`
    font-size: 1.5rem;
    color: #007bff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s ease;

    &:hover {
        text-decoration: underline;
    }

    .contact-icon {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;
