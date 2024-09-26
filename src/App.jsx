import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import FishCatalog from './Components/FishCatalog';
import FishDetails from './Components/FishDetails';
import About from './Components/About';
import Help from './Components/Help';

function App() {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    const isGithubPages = window.location.hostname !== 'localhost';
    const basePath = isGithubPages ? '/reefqr' : '';
  
    fetch(`${basePath}/Assets/fish_data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch fish data');
        }
        return response.json();
      })
      .then((data) => setFishData(data))
      .catch((error) => console.error('Error fetching fish data:', error));
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<FishCatalog fishData={fishData} />} />
        <Route path="/fish/:id" element={<FishDetails fishData={fishData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;