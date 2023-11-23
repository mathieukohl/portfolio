import React from 'react';
import '../../../css/freeHome.css';

import free1 from "../../../assets/img/freelance/1.png";
import free2 from "../../../assets/img/freelance/2.png";
import free3 from "../../../assets/img/freelance/3.png";
import free4 from "../../../assets/img/freelance/4.png";
import free5 from "../../../assets/img/freelance/5.png";
import free6 from "../../../assets/img/freelance/6.png";
import free7 from "../../../assets/img/freelance/7.png";
import free8 from "../../../assets/img/freelance/8.png";

import job1 from "../../../assets/img/jobs/1.png";
import job2 from "../../../assets/img/jobs/2.png";
import job3 from "../../../assets/img/jobs/3.png";
import job4 from "../../../assets/img/jobs/4.png";
import job5 from "../../../assets/img/jobs/5.png";

import processus from "../../../assets/img/process.png";
import quote from "../../../assets/img/computer.jpg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function LearnHome() {

    const navigate = useNavigate();

    // Function to handle navigation to a specific route
    const goToRoute = (route) => {
        navigate(route);
    };

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

    const jobs = [
        { job: 'Our experts skills', desc: 'Discover the most Experienced software engineers and programmers possessing proficiency in a wide array of technologies'},
        { job: 'Web Developer', desc: '', img: job1},
        { job: 'Full Stack Developer', desc: '', img: job2},
        { job: 'PHP Developer', desc: '', img: job3},
        { job: 'Mobile Developer', desc: '', img: job4},
        { job: 'React.js Developer', desc: '', img: job5},
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
                    <Button onClick={() => goToRoute('/freeHome/form')}>Need a Talent</Button>
                </div>
            </div>

            {/* Second Section - Carousel */}
            <div className="carousel-section">
                <Slider {...sliderSettings}>
                {frees.map((free, index) => (
                    <div key={index} className='carousel-item'>
                        <img src={free.img} alt={free.name} style={{ maxWidth: '150px', borderRadius: '10px' }} />
                        <p style={{ marginTop: '5px' }} >{free.name}</p>
                        <p style={{ marginTop: '-15px' }}>{free.job}</p>
                    </div>
                ))}
                </Slider>
            </div>

            {/* Img divider quotes Section */}
            <div className="quote-section">
                <img src={quote} alt='quote' style={{marginTop: '5vh' }}></img>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                <p>"High-quality freelance developers not only excel in code craftsmanship but also act as strategic problem-solvers for companies. They adeptly navigate complex challenges, offering tailored solutions that not only meet technical requirements but align seamlessly with the company's overarching goals and vision."</p>
            </div>

            {/* Btn hire Section */}
            <div className="btn-section">
                <h1>Want the top experts?</h1>
                <Button onClick={() => goToRoute('/freeHome/form')}>Hire a Freelancer</Button>
            </div>

            {/* Developer Jobs Grid Section */}
            <div className="developer-jobs-section">
                {jobs.slice(0, 6).map((job, index) => (
                    <div key={index} className={`grid-item ${index !== 0 ? 'with-background' : ''}`} style={index !== 0 ? { backgroundImage: `url(${job.img})` } : null}>
                        <div className="grid-content">
                            <h2>{job.job}</h2>
                            <p>{job.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hire Processus Section */}
            <div className="processus-section-header"> 
                <h1 style={{ textAlign: 'center'}}>The processus to find our Talent</h1>
                <img
                    id="processus-image"
                    src={processus}
                    alt="processus"
                    style={{ marginTop: '5vh'}}
                />
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
                    <h2>Reviewed by a Senior </h2>
                    <p>We give our juniors a simple first task to give them an idea of the work involved. This task is supervised by a senior developer to ensure the best possible quality for our customers. </p>
                </div>
            </div>

            {/* Btn hire Section */}
            <div className="btn-section">
                <h1>Ready to get started?</h1>
                <Button onClick={() => goToRoute('/freeHome/form')}>Hire a Freelancer</Button>
            </div>
        </div>
    );
};