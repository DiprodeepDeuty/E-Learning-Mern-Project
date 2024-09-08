import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './HomePage.css';

const imageData = [
    {
        src: '',
        alt: 'Interactive Courses',
        title: 'Interactive Courses',
        description: 'Learn through engaging and interactive courses designed to make education fun and effective.'
    },
    {
        src: '',
        alt: 'Gamified Learning',
        title: 'Gamified Learning',
        description: 'Earn badges, points, and rewards as you progress through your courses and challenges.'
    },
    {
        src: '',
        alt: 'Track Your Progress',
        title: 'Track Your Progress',
        description: 'Monitor your learning journey with our detailed progress tracking system.'
    }
];

const HomePage = () => {
    return (
        <motion.div
            className="home-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
             <div className="moving-text">
                <p>Welcome to Our Online Learning Management System!</p>
            </div>
            <header className="home-header">
                <h1>Welcome to MySite</h1>
                <p>Your gateway to learning and fun.</p>
                <div className="home-buttons">
                    <a href="/courses" className="btn-primary">Explore Courses</a>
                    <a href="/signup" className="btn-secondary">Sign Up</a>
                </div>
            </header>
            <section className="home-content">
                {imageData.map((item, index) => (
                    <div key={index} className="content-card">
                        <img src={item.src} alt={item.alt} className="content-image" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
        </motion.div>
    );
};

export default HomePage;