import React from 'react';
import '../../../css/freeHome.css';

import free1 from "../../../assets/img/freelance/free1.png";
import free2 from "../../../assets/img/freelance/free2.png";
import free3 from "../../../assets/img/freelance/free3.png";
import free4 from "../../../assets/img/freelance/free4.png";
import free5 from "../../../assets/img/freelance/free5.png";
import free6 from "../../../assets/img/freelance/free6.png";
import free7 from "../../../assets/img/freelance/free7.png";
import free8 from "../../../assets/img/freelance/free8.png";

import processus from "../../../assets/img/process.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from 'react-bootstrap';


export default function LearnHome() {

    const frees = [
        { name: 'Ali', job: 'Software Engineer', img: free1, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Alamfr', job: 'Web Developer', img: free2, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Khurana', job: 'Full Stack Developer', img: free3, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Vicky', job: 'Web Developer', img: free6, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Bilal', job: 'Software Engineer', img: free7, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Sohail', job: 'Full Stack Developer', img: free4, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Shanto', job: 'Software Engineer', img: free8, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
        { name: 'Harminder', job: 'Full Stack Developer', img: free5, link : 'https://github.com/stars/mathieukohl/lists/html-css' },
    ];


    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
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
            </div>

            {/* Second Section - Carousel */}
            <div className="second-section">
                <Slider {...sliderSettings}>
                {frees.map((free, index) => (
                    <div key={index} className='carousel-item'>
                        <img src={free.img} alt={free.name} style={{ maxWidth: '150px', borderRadius: '10px' }} />
                        <p style={{ marginTop: '5px' }} >{free.name}</p>
                        <p>{free.job}</p>
                    </div>
                ))}
                </Slider>
            </div>

            <div className="processus-section-header">
                <h1 style={{ textAlign: 'center'}}>The processus to find our Talent</h1>
                <img src={processus} alt='processus' style={{marginTop: '5vh' }}></img>
            </div>
            <div className="processus-section">
                <div className='review'>
                    <h2>Portfolio Review</h2>
                    <p>We evaluate the freelancers' portfolios to assess the quality of their previous work. Looks for projects similar to the client's requirements and gauge the freelancer's ability to meet expectations.</p>
                </div>
                <div className='technical'>
                    <h2>Technical Assessment</h2>
                    <p>We administer a technical assessments or coding challenges to evaluate freelancers' proficiency in specific technologies. This step helps ensure that they meet the technical standards required for our clients.</p>
                </div>
                <div className='assessment'>
                    <h2>First contract reviewed by a Senior </h2>
                    <p>We give our juniors a simple first task to give them an idea of the work involved. This task is supervised by a senior developer to ensure the best possible quality for our customers. </p>
                </div>
            </div>
        </div>
    );
};