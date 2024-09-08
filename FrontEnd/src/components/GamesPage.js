import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './GamesPage.css';

const gamesData = [
    {
        imgSrc: '', 
        title: 'Quiz Games',
        description: 'Test your knowledge with our variety of quiz games. Challenge yourself and see how well you know the subject!',
        link: '/quiz'
    },
    {
        imgSrc: '', 
        title: 'Puzzle Games',
        description: 'Enjoy engaging puzzles that will challenge your problem-solving skills. From crosswords to brainteasers, we have it all!',
        link: '/puzzle' 
    },
    {
        imgSrc: '',
        title: 'Coding Games',
        description: 'Improve your coding skills with our interactive coding games. Practice coding challenges and learn new programming concepts.',
        link: '/coding' 
    }
];

const GamesPage = () => {
    return (
        <motion.div
            className="games-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="games-header">
                <h1>Explore Our Games</h1>
                <p>Choose from a range of games to enhance your skills and have fun.</p>
            </header>
            <section className="games-content">
                {gamesData.map((game, index) => (
                    <div key={index} className="game-card">
                        <img src={game.imgSrc} alt={game.title} className="game-image" />
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <Link to={game.link} className="btn-primary">Play Now</Link> {/* Use Link for navigation */}
                    </div>
                ))}
            </section>
        </motion.div>
    );
};

export default GamesPage;