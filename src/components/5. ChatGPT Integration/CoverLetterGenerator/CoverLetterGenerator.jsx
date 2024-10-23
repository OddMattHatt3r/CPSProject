// src/CoverLetterGenerator.jsx
import React, { useState } from 'react';
import './CoverLetterGenerator.css';

const CoverLetterGenerator = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [skills, setSkills] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const generateCoverLetter = async () => {
    setLoading(true);
    const prompt = `
      Write a cover letter for the position of ${jobTitle} at ${companyName}.
      Mention these skills: ${skills}.
    `;

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      setCoverLetter(data.choices[0].text);
    } catch (error) {
      console.error('Error generating cover letter:', error);
      setCoverLetter( 'Error generating cover letter. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='coverletterdiv' id='CoverLetterGenerator'>
      <h2>Customizable Cover Letter Generator</h2>
      <div className='inputDivs'>
        <label>Job Title:</label>
        <input
          className='coverLetterGenerator-input'
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className='inputDivs'>
        <label>Company Name:</label>
        <input
        className='coverLetterGenerator-input'
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className='inputDivs'>
        <label>Skills to Highlight:</label>
        <input
        className='coverLetterGenerator-input'
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>
      <button className='coverLetterGenerator-button' onClick={generateCoverLetter} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Cover Letter'}
      </button>
      {coverLetter && (
        <div className='generatedCoverLetterDiv'>
          <h3>Generated Cover Letter:</h3>
          <pre className='generatedCoverLetter'>{coverLetter}</pre>
        </div>
      )}
    </div>
  );
};

export default CoverLetterGenerator;
