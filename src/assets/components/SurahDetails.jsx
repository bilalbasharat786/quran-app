import React, { useEffect, useState } from 'react';
import './SurahDetails.css';

const SurahDetails = ({ surah, goBack }) => {
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

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
      .then((data) => {
        if (data.status === 'OK') {
          const audios = data.data.ayahs;
          if (audios.length > 0) setAudioUrl(audios[0].audio);
        }
      });
  }, [surah]);

  return (
    <div className="surah-details">
      <button onClick={goBack} className="back-button">🔙 Back</button>
      <h2>{surahName}</h2>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
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