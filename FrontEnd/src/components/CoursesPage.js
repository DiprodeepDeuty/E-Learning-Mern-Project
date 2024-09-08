import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Animations/Animation';
import './CoursesPage.css';


const coursesData = [
    {
        imgSrc: '',
        title: 'Data Science Introduction',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Basic Of Data Structures and Algorithms',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Introduction to Data Analytics',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Fun With AI',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Introduction to Blockchain',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Machine Learning With Python',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Full Stack Developmeent',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    },
    {
        imgSrc: '', 
        title: 'Learn Ethical Hacking',
        description: 'Brief description of the course. This could include topics covered, objectives, and what students will learn.'
    }
    
];

const CoursesPage = () => {
    return (
        <motion.div
            className="courses-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <header className="courses-header">
                <h1>Our Courses</h1>
                <p>Explore a variety of courses designed to help you achieve your learning goals.</p>
            </header>
            <section className="courses-content">
                {coursesData.map((course, index) => (
                    <div key={index} className="course-card">
                        <img src={course.imgSrc} alt={course.title} className="course-image" />
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                ))}
            </section>
        </motion.div>
    );
};

export default CoursesPage;