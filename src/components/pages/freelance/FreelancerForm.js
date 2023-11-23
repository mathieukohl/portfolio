import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';

import '../../../css/freeForm.css';

export default function FreelancerForm() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const questions = useMemo(() => [
        "What skills are you looking for in a freelancer?",
        "What is your budget for this project?",
        "What is the expected duration of the project?",
        // Add more questions as needed
    ], []); // Empty dependency array since questions does not depend on any props or state

    const skillsOptions = [
        'Web Developer',
        'Full Stack Developer',
        'PHP Developer',
        'Mobile Developer',
        'React.js Developer',
    ];

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

            {currentQuestion !== 0 && (
                <input
                    className="free-form-text-input"
                    type="text"
                    placeholder="Your Answer"
                    value={answers[currentQuestion] || ''}
                    onChange={(e) => setAnswers([...answers.slice(0, currentQuestion), e.target.value, ...answers.slice(currentQuestion + 1)])}
                />
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
                    disabled={currentQuestion === 0 ? selectedOptions.length === 0 : !answers[currentQuestion]}
                >
                    Next
                </Button>
            )}

            {/* Display a "Submit" button on the last question page */}
            {currentQuestion === questions.length - 1 && (
                <Button
                    className="free-form-button"
                    onClick={() => console.log('Submitting answers:', answers)}
                    disabled={!answers[currentQuestion]}
                >
                    Submit
                </Button>
            )}
        </div>
    );
}