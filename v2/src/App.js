// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css'; // Your global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/* The rest of your portfolio content can go here */}
    </div>
  );
}

export default App;