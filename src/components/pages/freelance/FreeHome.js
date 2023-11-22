import React, { useState } from 'react';
import '../../../css/freeHome.css';

import free1 from "../../../assets/img/freelance/free1.png";
import free2 from "../../../assets/img/freelance/free2.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from 'react-bootstrap';


export default function LearnHome() {

    const frees = [
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Software Engineer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Hasnain Alamfr', description: 'Web Developer specializes in ReactJs', job: 'Web Developer', img: free2, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Software Engineer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Web Developer', img: free2, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Web Developer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Software Engineer', img: free2, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Web Developer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Ashhar Ali', description: 'Senior Software Engineer with over 6-7 years of experience', job: 'Software Engineer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
    ];

    const [selectedPerson, setSelectedPerson] = useState(frees[0]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
    };

    const handlePersonClick = (index) => {
        setSelectedPerson(frees[index]);
    };

    return (
        <div className="home-page">
            {/* First Section */}
            <div className="first-section">
                <div className="column-1">
                    <h1>Hire the Top Technical Freelance Talent</h1>
                    <p>Our network of the top freelancers in all of the technical fields, is the perfect match for your company's most important projects.</p>
                    <Button>Need a Talent</Button>
                </div>
                <div className="column-2">
                    <img src={selectedPerson.img} style={{ maxWidth: '300px', borderRadius: '10px' }} alt={selectedPerson.name} />
                </div>
            </div>

            {/* Second Section - Carousel */}
            <div className="second-section">
                <Slider {...sliderSettings}>
                {frees.map((free, index) => (
                    <div key={index} className='carousel-item' onClick={() => handlePersonClick(index)}>
                        <img src={free.img} alt={free.name} style={{ maxWidth: '150px', borderRadius: '10px' }} />
                        <p style={{ marginTop: '5px' }} >{free.name}</p>
                        <p>{free.job}</p>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
};