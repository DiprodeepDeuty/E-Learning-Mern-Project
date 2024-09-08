import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './PuzzlePage.css';

const puzzles = {
    course1: [
        {
            name: "Mathematical Puzzle 1",
            description: "Solve this algebraic equation to complete the puzzle."
        },
        {
            name: "Mathematical Puzzle 2",
            description: "Calculate the area of this geometric shape."
        }
    ],
    course2: [
        {
            name: "Science Puzzle 1",
            description: "Identify the elements in this chemical reaction."
        },
        {
            name: "Science Puzzle 2",
            description: "Match the organelles to their correct functions."
        }
    ],
    // Add more puzzles for other courses here
};

const PuzzlePage = () => {
    const { courseId } = useParams();
    const coursePuzzles = puzzles[courseId] || [];

    return (
        <motion.div
            className="puzzle-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="puzzle-header">
                <h1>Puzzles</h1>
                <p>Choose and solve puzzles from your selected course.</p>
            </header>
            <section className="puzzle-content">
                {coursePuzzles.length > 0 ? (
                    coursePuzzles.map((puzzle, index) => (
                        <div key={index} className="puzzle-item">
                            <h2>{puzzle.name}</h2>
                            <p>{puzzle.description}</p>
                            <button className="solve-puzzle-button">Solve Puzzle</button>
                        </div>
                    ))
                ) : (
                    <div>No puzzles available for this course.</div>
                )}
            </section>
        </motion.div>
    );
};

export default PuzzlePage;