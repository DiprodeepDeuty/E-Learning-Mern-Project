import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <motion.div
            className="login-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="login-header">
                <h1>Login</h1>
                <p>Access your account and continue where you left off.</p>
            </header>
            <section className="login-content">
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn-primary">Login</button>
                </form>
            </section>
        </motion.div>
    );
};

export default LoginPage;