import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './QuizSelectionPage.css';

const QuizSelectionPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const navigate = useNavigate();

    const handleCourseSelect = (courseId) => {
        setSelectedCourse(courseId);
    };

    const startQuiz = () => {
        if (selectedCourse) {
            navigate(`/quiz/${selectedCourse}`);
        } else {
            alert("Please select a course to proceed.");
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
            className="quiz-selection-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="quiz-selection-header">
                <h1>Select a Course to Start Quiz</h1>
                <p>Please choose a course to begin the quiz.</p>
            </header>
            <section className="quiz-selection-content">
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
                <button className="start-quiz-button" onClick={startQuiz}>
                    Start Quiz
                </button>
            </section>
        </motion.div>
    );
};

export default QuizSelectionPage;
