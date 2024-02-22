import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

export default function ArticlesGrid() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/getArticles")
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="articles-grid">
            {articles.map((article, index) => (
                <div key={index} className="article-card">
                    <img src={article.imageUrl} alt={article.title} />
                    <h2 className='article-title'>{article.title}</h2>
                    <p className='article-description'>{article.description.substring(0, 100)}...</p> {/* Display first 100 characters */}
                    <Link to={`/more/learnHome/reactjs/article/${article.id}`} className="article-read-more">Read More</Link>
                </div>
            ))}
        </div>
    );
}
