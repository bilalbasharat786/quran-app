import React, { useEffect, useState } from 'react';
import './SurahList.css';

const SurahList = ({ onSurahSelect }) => {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK') {
          setSurahs(data.data);
        }
      })
      .catch((err) => console.error('API Error:', err));
  }, []);

  const filtered = surahs.filter(
    (surah) =>
      surah.englishName.toLowerCase().includes(search.toLowerCase()) ||
      surah.name.includes(search)
  );

  return (
    <div className="surah-list-container">
      <input
        type="text"
        placeholder="Search Surah..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="surah-list">
        {filtered.map((surah) => (
          <div
            key={surah.number}
            className="surah-item"
            onClick={() => onSurahSelect(surah.number)}
          >
            <h3>
              {surah.number}. {surah.englishName} ({surah.name})
            </h3>
            <p>
              Ayahs: {surah.numberOfAyahs} | {surah.revelationType}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;