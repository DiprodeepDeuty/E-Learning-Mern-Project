import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        <motion.div
            className="signup-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="signup-header">
                <h1>Sign Up</h1>
                <p>Create an account to get started.</p>
            </header>
            <section className="signup-content">
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit" className="btn-primary">Sign Up</button>
                </form>
            </section>
        </motion.div>
    );
};

export default SignUpPage;