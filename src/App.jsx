import React, { useState, useEffect } from 'react';
import SurahList from './assets/components/SurahList';
import SurahDetails from './assets/components/SurahDetails';
import './App.css';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(null);
  
  const [themeColor, setThemeColor] = useState('#28a745');

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', themeColor);
  }, [themeColor]);

  return (
    <div>
      <header className="app-header">
        <h1>📖 Al-Quran App</h1>
        <div className="theme-controls">
          
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
