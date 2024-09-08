import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ContactUsPage from './components/ContactUsPage';
import CoursesPage from './components/CoursesPage';
import GamesPage from './components/GamesPage';
import AboutUsPage from './components/AboutUsPage';
import HelpPage from './components/HelpPage';
import QuizPage from './components/QuizPage';
import PuzzlePage from './components/PuzzlePage';
import CodingPage from './components/CodingPage';
import QuizSelectionPage from './components/QuizSelectionPage';
import PuzzleSelectionPage from './components/PuzzleSelectionPage';
function App() {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/contact" element={<ContactUsPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/games" element={<GamesPage />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route path="/help" element={<HelpPage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/puzzle" element={<PuzzlePage />} />
                        <Route path="/coding" element={<CodingPage />} />
                        <Route path="/quizselection" element={<QuizSelectionPage />} />
                        <Route path="/puzzleselection" element={<PuzzleSelectionPage />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;