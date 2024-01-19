// CharCountScreen.js

import React, { useState } from 'react';

function CharCountScreen() {
  const [inputText, setInputText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    updateCharCount(text);
  };

  const updateCharCount = (text) => {
    const characters = text.length;
    setCharCount(characters);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Type your text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <div>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}

export default CharCountScreen;
