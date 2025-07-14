import React, { useState } from 'react';
import SurahList from './assets/components/SurahList';
import SurahDetails from './assets/components/SurahDetails';
import './App.css';

function App() {
  const [selectedSurah, setSelectedSurah] = useState(null);
  return (
    <div>
      <header className="app-header">
        <h1>📖 Al-Quran App</h1>
       
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
