import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Link to="/" className="navbar-logo">Easy Learn</Link>
            <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/games">Games</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/help">Help</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;