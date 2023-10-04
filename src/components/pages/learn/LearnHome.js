import React from 'react';
import '../../../css/learnHome.css';

import imgWhy from "../../../assets/img/learn/whyimg.png";
import css from "../../../assets/img/learn/css.jpeg";
import reactjs from "../../../assets/img/learn/react-js.jpg";
import reactnative from "../../../assets/img/learn/React-Native.png";

import { Button } from 'react-bootstrap';

export default function learnHome() {

    const courses = [
        { title: 'CSS Courses', description: 'Learn about Cascading Style Sheets.', img: css, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { title: 'React.js Courses', description: 'Master building web applications with React.js.', img: reactjs, link : 'https://github.com/stars/mathieukohl/lists/reactjs' },
        { title: 'React Native Courses', description: 'Develop mobile apps with React Native.', img: reactnative, link : 'https://github.com/stars/mathieukohl/lists/reactnative' },
    ];

    return (
        <div className='main'>
            <div className="course-info">
                <div className="course-description">
                    <h2>About Us</h2>
                    <p>
                        Welcome to our course page! <br/> We offer a variety of courses in CSS, React.js, and React Native.
                        New courses are added every week to help you stay up-to-date with the latest technologies.
                    </p>    
                </div>
                <div className="course-image">
                    <img src={imgWhy} alt="Course" />
                </div>
            </div>
            <div className="course-list">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.img} alt="Course" />
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            window.location.href=course.link;
                            }} className='btn'>Want to learn more</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};