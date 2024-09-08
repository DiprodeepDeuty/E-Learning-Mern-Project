import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './AboutPage.css';


const imageData = [
    {
        src: '../assets/team.jpg', 
        alt: 'Our Team',
        title: 'Meet Our Team',
        description: 'Our team consists of experienced educators, skilled developers, and dedicated support staff. Together, we work tirelessly to create and improve our educational platform to better serve our users.'
    },
    
];

const AboutPage = () => {
    return (
        <motion.div
            className="about-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our mission, values, and team.</p>
            </header>
            <section className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At MySite, our mission is to provide high-quality education through interactive and engaging learning experiences. We strive to make learning accessible, enjoyable, and effective for everyone.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Values</h2>
                    <p>
                        We believe in the power of education to transform lives. Our core values include innovation, integrity, and inclusivity. We are committed to fostering a supportive and diverse learning environment.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Our team consists of experienced educators, skilled developers, and dedicated support staff. Together, we work tirelessly to create and improve our educational platform to better serve our users.
                    </p>
                    {imageData.map((item, index) => (
                        <div key={index} className="about-image-container">
                            <img src={item.src} alt={item.alt} className="about-image" />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;