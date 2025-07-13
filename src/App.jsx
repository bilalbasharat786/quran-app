import React, { useState, useEffect } from 'react';
import SurahList from './assets/components/SurahList';
import SurahDetails from './assets/components/SurahDetails';
import './App.css';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState('#28a745');

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [themeColor]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="app-header">
        <h1>📖 Al-Quran App</h1>
        <div className="theme-controls">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />{' '}
            Dark Mode
          </label>
          <select onChange={(e) => setThemeColor(e.target.value)} value={themeColor}>
            <option value="#28a745">Green</option>
            <option value="#007bff">Blue</option>
            <option value="#ffc107">Yellow</option>
            <option value="#dc3545">Red</option>
          </select>
        </div>
      </header>
      <main>
        {!selectedSurah ? (
          <SurahList onSurahSelect={setSelectedSurah} />
        ) : (
          <SurahDetails surah={selectedSurah} goBack={() => setSelectedSurah(null)} />
        )}
      </main>
    </div>
  );
}

export default App;
