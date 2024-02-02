import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../../App.css';

export default function BlogPost() {
    const [postData, setPostData] = useState({ 
        title: '', 
        imageUrl: '', 
        description: '', 
        sections: [],
        githubLink: '',
    });
    const { articleId } = useParams(); // Extract articleId from URL
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/getArticles`)
          .then(response => response.json())
          .then(data => {
            const article = data.find(article => article.id === articleId);
            console.log('article',article)
            if (article) {
              if (data.length > 0) {
                // Convert the sections object into an array of its values
                const sectionsArray = Object.keys(article)
                  .filter(key => key.startsWith('section'))
                  .map(key => ({
                    sectionTitle: article[key][0], // Assuming first element is the title
                    sectionDescription: article[key][1], // Second element is the description
                    codeSnippet: article[key][2], // Third element is the code snippet
                    additionalText: article[key][3] // Fourth element is additional text
                  }));

                setPostData({
                  title: article.title,
                  imageUrl: article.imageUrl,
                  description: article.description,
                  sections: sectionsArray,
                  githubLink: article.github_link,
                });
              }
            }
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
            setIsLoading(false);
          });
    }, [articleId]);

    const copyToClipboard = (codeSnippet) => {
        navigator.clipboard.writeText(codeSnippet)
          .then(() => alert('Code copied to clipboard!'))
          .catch(err => console.error('Could not copy text: ', err));
    };

    if (isLoading) {
      return (
          <div className="loader-container">
              <div className="loader"></div>
          </div>
      );
  }

    return (
        <div className="blog-post">
            <h1 className="blog-title">{postData.title}</h1>
            <img src={postData.imageUrl} alt={postData.title} className="image"/>
            <p className="blog-description">{postData.description}</p>
            
            {postData.sections.map((section, index) => (
                <div key={index} className="dynamic-section">
                    <h2 className="blog-title">{section.sectionTitle}</h2>
                    <p className="blog-description">{section.sectionDescription}</p>
                    <div className="code-section">
                        <pre><code>{section.codeSnippet}</code></pre>
                        <button className='blog-button' onClick={() => copyToClipboard(section.codeSnippet)}>Copy Code</button>
                    </div>
                    <p className="blog-description">{section.additionalText}</p>
                </div>
            ))}
            <div className="button-container">
              <a href={postData.githubLink} target="_blank" rel="noreferrer"> <button className='blog-button-cta'> Full Example Code </button> </a>
            </div>
        </div>
    );
}
