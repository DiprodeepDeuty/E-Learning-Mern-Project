import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './CodingPage.css';

const courses = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "C++" },
];

const codingGames = {
    JavaScript: ["JS Fundamentals Game", "JS Algorithms Challenge", "JS DOM Manipulation Game"],
    Python: ["Python Basics Game", "Python Data Structures Game", "Python OOP Challenge"],
    Java: ["Java Basics Game", "Java Collections Game", "Java Multithreading Game"],
    CPlusPlus: ["C++ Basics Game", "C++ STL Challenge", "C++ Memory Management Game"],
};

const CodingPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user authentication status
    const navigate = useNavigate();

    // Simulate checking the authentication status (this would usually come from a context or auth API)
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Checking login status from localStorage
        setIsLoggedIn(userLoggedIn);
    }, []);

    const handleCourseSelection = (courseName) => {
        setSelectedCourse(courseName);
    };

    const handleGameClick = (gameName) => {
        alert(`Starting the game: ${gameName}`);
        // Here you would typically navigate to the game page or start the game.
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <motion.div
            className="coding-games-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="coding-games-header">
                <h1>Coding Games</h1>
                <p>Select a course to view and play coding games tailored to that course.</p>
            </header>
            <section className="coding-games-content">
                {!isLoggedIn ? (
                    <div className="login-prompt">
                        <h2>Please log in to access the coding games</h2>
                        <button className="login-button" onClick={handleLoginRedirect}>
                            Log In
                        </button>
                        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                    </div>
                ) : !selectedCourse ? (
                    <div className="course-selection">
                        <h2>Choose a Course</h2>
                        <div className="course-buttons">
                            {courses.map((course) => (
                                <button
                                    key={course.id}
                                    onClick={() => handleCourseSelection(course.name)}
                                    className="course-button"
                                >
                                    {course.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="games-list">
                        <h2>{selectedCourse} Games</h2>
                        <div className="game-buttons">
                            {codingGames[selectedCourse.replace(' ', '')].map((game, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleGameClick(game)}
                                    className="game-button"
                                >
                                    {game}
                                </button>
                            ))}
                        </div>
                        <button
                            className="back-button"
                            onClick={() => setSelectedCourse('')}
                        >
                            Back to Courses
                        </button>
                    </div>
                )}
            </section>
        </motion.div>
    );
};

export default CodingPage;