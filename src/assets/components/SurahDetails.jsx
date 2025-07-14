import React, { useEffect, useState } from 'react';
import './SurahDetails.css';

const SurahDetails = ({ surah, goBack }) => {
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState('');
 

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surah}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK') {
          setAyahs(data.data.ayahs);
          setSurahName(`${data.data.englishName} (${data.data.name})`);
        }
      })
      .catch((err) => console.error('API Error:', err));

    fetch(`https://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`)
      .then((res) => res.json())
      
        
      });
  

  return (
    <div className="surah-details">
      <button onClick={goBack} className="back-button">🔙 Back</button>
      <h2>{surahName}</h2>
    
      <div className="ayahs">
        {ayahs.map((ayah) => (
          <div key={ayah.number} className="ayah">
            <h4>{ayah.numberInSurah}</h4>
            <p className="arabic">{ayah.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahDetails;