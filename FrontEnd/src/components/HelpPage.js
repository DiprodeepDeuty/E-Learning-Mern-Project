import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './HelpPage.css';

const HelpPage = () => {
    return (
        <motion.div
            className="help-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="help-header">
                <h1>Help & Support</h1>
                <p>Find answers to your questions and get support for any issues you might be facing.</p>
            </header>
            <section className="help-content">
                <div className="help-image">
                    <img src="../assets/help.jpg" alt="Help" /> {/* Replace with your image */}
                </div>
                <div className="help-sections">
                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item">
                            <h3>How do I reset my password?</h3>
                            <p>To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to reset your password.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How can I contact support?</h3>
                            <p>You can contact our support team by filling out the contact form on the Contact Us page or by sending an email to support@example.com.</p>
                        </div>
                        {/* Add more FAQ items as needed */}
                    </div>
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>
                        <p>If you need further assistance, feel free to reach out to us:</p>
                        <p>Email: support@example.com</p>
                        <p>Phone: +1-234-567-8901</p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default HelpPage;