import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';

import '../../../css/freeForm.css';

export default function FreelancerForm() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    console.log('selectedOptions',selectedOptions)

    const questions = useMemo(() => [
        "What skills are you looking for in a freelancer?",
        "Any specific skills or technologies?",
        "What type of project are you hiring for?",
        "How long do you need the developer?",
        "What level of time commitment will you require from the developer?",
        "When do you need the developer to start?",
        "Do you have an hourly rate in mind?"
    ], []); // Empty dependency array since questions does not depend on any props or state

    const skillsOptions = [
        'Web Developer',
        'Full Stack Developer',
        'PHP Developer',
        'Mobile Developer',
        'React.js Developer',
    ];

    const typeOfProject = [
        'New idea or project',
        'Existing project that needs more resources',
        'None of the above',
    ];

    const timeOfDev = [
        'Less than 1 week',
        '1 to 4 weeks',
        '1 to 3 months',
        '3 to 6 months',
        'Longer than 6 months',
        'Not decided yet',
    ];

    const hrsOfWork = [
        'Full time (40 or more hrs/week)',
        'Part time (Less than 40 hrs/week)',
        'Hourly',
        'Not decided yet',
    ]

    const startTime = [
        'Immediately',
        'In 1 to 2 weeks',
        'More than 2 weeks from now',
        'Not decided yet',
    ]

    const hourlyRate = [
        'Less than $70/hr',
        '$70 - $90/hr',
        '$91 - $110/hr',
        'More than $110/hr',
        'Not decided yet',
    ]

    const handleCheckboxChange = (option) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((selectedOption) => selectedOption !== option)
            : [...selectedOptions, option];

        setSelectedOptions(updatedOptions);
    };

    const handleNext = () => {
        setAnswers([...answers, selectedOptions.join(', ')]);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOptions([]); // Reset selected options for the next question
    };
    

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    useEffect(() => {
        // You can perform any additional actions based on answers or question changes here
        console.log(`Question: ${questions[currentQuestion]}, Answer: ${answers[currentQuestion]}`);
    }, [currentQuestion, answers, questions]); // Include 'questions' in the dependency array

    return (
        <div className="free-form-container">
            <h1 className="free-form-title">{questions[currentQuestion]}</h1>

            {currentQuestion === 0 && (
                <ul className="free-form-options">
                    {skillsOptions.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion !== 0 && currentQuestion !== 2 && currentQuestion !== 3 && currentQuestion !== 4 && currentQuestion !== 5 && currentQuestion !== 6 &&(
                <input
                    id={`input-question-${currentQuestion}`}
                    className="free-form-text-input"
                    type="text"
                    placeholder="Your Answer"
                    value={answers[currentQuestion] || ''}
                    onChange={(e) => {
                        const updatedAnswers = [...answers];
                        updatedAnswers[currentQuestion] = e.target.value;
                        setAnswers(updatedAnswers);
                    }}
                />
            )} 

            {currentQuestion === 2 && (
                <ul className="free-form-options">
                    {typeOfProject.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion === 3 && (
                <ul className="free-form-options">
                    {timeOfDev.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}    
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion === 4 && (
                <ul className="free-form-options">
                    {hrsOfWork.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion === 5 && (
                <ul className="free-form-options">
                    {startTime.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion === 6 && (
                <ul className="free-form-options">
                    {hourlyRate.map((option) => (
                        <li key={option}>
                            <label className="free-form-label">
                                <input
                                    id={`input-question-${currentQuestion}`}
                                    className="free-form-checkbox"
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}

            {currentQuestion > 0 && (
                <Button className="free-form-button" onClick={handlePrevious}>
                    Previous
                </Button>
            )}

            {currentQuestion < questions.length - 1 && (
                <Button
                    className="free-form-button"
                    onClick={handleNext}
                    disabled={
                        (currentQuestion === 0 || currentQuestion === 2 || currentQuestion === 3 || currentQuestion === 4 || currentQuestion === 5 || currentQuestion === 6)
                            ? selectedOptions.length === 0
                            : !answers[currentQuestion]
                    }                    >
                    Next
                </Button>
            )}

            {/* Display a "Submit" button on the last question page */}
            {currentQuestion === questions.length - 1 && (
                <Button
                    className="free-form-button"
                    onClick={() => console.log('Submitting answers:', answers)}
                    disabled={currentQuestion === 6 ? selectedOptions.length === 0 : !answers[currentQuestion]}
                >
                    Connect Me With a Freelancer
                </Button>
            )}
        </div>
    );
}
