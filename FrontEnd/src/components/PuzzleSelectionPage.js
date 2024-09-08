import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './PuzzleSelectionPage.css';

const PuzzleSelectionPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user authentication status
    const navigate = useNavigate();

    // Simulate checking the authentication status (this would usually come from a context or auth API)
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Checking login status from localStorage
        setIsLoggedIn(userLoggedIn);
    }, []);

    const handleCourseSelect = (courseId) => {
        setSelectedCourse(courseId);
    };

    const startPuzzle = () => {
        if (isLoggedIn) {
            if (selectedCourse) {
                navigate(`/puzzle/${selectedCourse}`);
            } else {
                alert("Please select a course to proceed.");
            }
        } else {
            alert("Please log in to access the puzzles.");
            navigate('/login'); // Redirect to login page
        }
    };

    const courses = [
        { id: 'course1', name: 'Mathematics' },
        { id: 'course2', name: 'Science' },
        { id: 'course3', name: 'History' },
        { id: 'course4', name: 'Literature' }
    ];

    return (
        <motion.div
            className="puzzle-selection-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="puzzle-selection-header">
                <h1>Select a Course to Start Puzzle</h1>
                <p>Please choose a course to begin the puzzle.</p>
            </header>
            <section className="puzzle-selection-content">
                <div className="course-list">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            className={`course-button ${selectedCourse === course.id ? 'selected' : ''}`}
                            onClick={() => handleCourseSelect(course.id)}
                        >
                            {course.name}
                        </button>
                    ))}
                </div>
                <button className="start-puzzle-button" onClick={startPuzzle}>
                    Start Puzzle
                </button>
            </section>
        </motion.div>
    );
};

export default PuzzleSelectionPage;