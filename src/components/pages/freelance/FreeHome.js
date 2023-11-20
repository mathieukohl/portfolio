import React from 'react';
import '../../../css/freeHome.css';

import free1 from "../../../assets/img/freelance/free1.png";
import free2 from "../../../assets/img/freelance/free2.png";

import { Button } from 'react-bootstrap';

export default function learnHome() {

    const frees = [
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Hasnain Alamfr', description: 'Web Developer specializes in ReactJs', img: free2, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
    ];

    return (
        <div className='main'>
            <div className="free-info">
                <div className="free-description">
                    <h2>About Us</h2>
                    <p>
                        Welcome to our freelancers page! <br/> We collaborate with elite developers from around the globe, ensuring unparalleled expertise in every project. Our certification as a top-quality delivery provider underscores our commitment to excellence in development projects.
                    </p>    
                </div>
            </div>
            <div className="free-list">
                {frees.map((free, index) => (
                    <div className="free-card" key={index}>
                        <img src={free.img} alt="free" />
                        <h3>{free.name}</h3>
                        <p>{free.description}</p>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            window.location.href=free.link;
                            }} className='btn'>Want to learn more</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};