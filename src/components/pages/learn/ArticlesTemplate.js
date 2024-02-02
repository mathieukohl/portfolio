import React, { useState, useEffect } from 'react';
import '../../../App.css';

export default function BlogPost() {
    const [postData, setPostData] = useState({ 
        title: '', 
        imageUrl: '', 
        description: '', 
        sections: []
    });

    useEffect(() => {
        fetch("http://localhost:3000/getArticles")
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              // Convert the sections object into an array of its values
              const sectionsArray = Object.keys(data[0])
                .filter(key => key.startsWith('section'))
                .map(key => ({
                  sectionTitle: data[0][key][0], // Assuming first element is the title
                  sectionDescription: data[0][key][1], // Second element is the description
                  codeSnippet: data[0][key][2], // Third element is the code snippet
                  additionalText: data[0][key][3] // Fourth element is additional text
                }));

              setPostData({
                title: data[0].title,
                imageUrl: data[0].imageUrl,
                description: data[0].description,
                sections: sectionsArray
              });
            }
            console.log('data', data)
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
    }, []);

    const copyToClipboard = (codeSnippet) => {
        navigator.clipboard.writeText(codeSnippet)
          .then(() => alert('Code copied to clipboard!'))
          .catch(err => console.error('Could not copy text: ', err));
    };

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
        </div>
    );
}
