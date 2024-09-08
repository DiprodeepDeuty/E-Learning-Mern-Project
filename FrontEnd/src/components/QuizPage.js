import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './QuizPage.css';

const quizzes = {
    course1: [
        {
            questionText: "What is 2 + 2?",
            answerOptions: [
                { answerText: "3", isCorrect: false },
                { answerText: "4", isCorrect: true },
                { answerText: "5", isCorrect: false },
                { answerText: "6", isCorrect: false },
            ],
        },
        {
            questionText: "What is 5 - 3?",
            answerOptions: [
                { answerText: "2", isCorrect: true },
                { answerText: "3", isCorrect: false },
                { answerText: "1", isCorrect: false },
                { answerText: "4", isCorrect: false },
            ],
        },
    ],
    course2: [
        {
            questionText: "What planet is known as the Red Planet?",
            answerOptions: [
                { answerText: "Earth", isCorrect: false },
                { answerText: "Mars", isCorrect: true },
                { answerText: "Venus", isCorrect: false },
                { answerText: "Jupiter", isCorrect: false },
            ],
        },
        {
            questionText: "What is the boiling point of water?",
            answerOptions: [
                { answerText: "90°C", isCorrect: false },
                { answerText: "100°C", isCorrect: true },
                { answerText: "110°C", isCorrect: false },
                { answerText: "120°C", isCorrect: false },
            ],
        },
    ],
    // Add more quizzes for other courses here
};

const QuizPage = () => {
    const { courseId } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user authentication status
    const navigate = useNavigate();

    // Simulate checking the authentication status (this would usually come from a context or auth API)
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Checking login status from localStorage
        setIsLoggedIn(userLoggedIn);
    }, []);

    const questions = quizzes[courseId] || [];

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResults(false);
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    if (!isLoggedIn) {
        return (
            <motion.div
                className="quiz-page"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <header className="quiz-header">
                    <h1>Quiz Game</h1>
                    <p>Test your knowledge with this quiz!</p>
                </header>
                <section className="quiz-content">
                    <div className="login-prompt">
                        <h2>Please log in to access the quiz</h2>
                        <button className="login-button" onClick={handleLoginRedirect}>
                            Log In
                        </button>
                        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                    </div>
                </section>
            </motion.div>
        );
    }

    if (!questions.length) {
        return <div>No quiz available for this course.</div>;
    }

    return (
        <motion.div
            className="quiz-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="quiz-header">
                <h1>Quiz Game</h1>
                <p>Test your knowledge with this quiz!</p>
            </header>
            <section className="quiz-content">
                {showResults ? (
                    <div className="quiz-results">
                        <h2>Your Score: {score} / {questions.length}</h2>
                        <button onClick={handleRestartQuiz} className="btn-primary">Retry Quiz</button>
                    </div>
                ) : (
                    <div className="quiz-question">
                        <h2>{questions[currentQuestionIndex].questionText}</h2>
                        <div className="answer-options">
                            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                    className={`answer-button ${selectedAnswer === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                                    onMouseEnter={() => setSelectedAnswer(index)}
                                    onMouseLeave={() => setSelectedAnswer(null)}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </motion.div>
    );
};

export default QuizPage;