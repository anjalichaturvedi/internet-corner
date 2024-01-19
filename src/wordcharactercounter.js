// WordCharCounter.js

import React, { useState } from 'react';

function WordCharCounter() {
  const [essay, setEssay] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setEssay(text);
    updateCounts(text);
  };

  const updateCounts = (text) => {
    const words = text.trim().split(/\s+/);
    const characters = text.length;

    setWordCount(words.length);
    setCharCount(characters);
  };

  return (
    <div>
      <h1>Word and Character Counter</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Type your essay/article here..."
        value={essay}
        onChange={handleInputChange}
      />
      <div>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}

export default WordCharCounter;
