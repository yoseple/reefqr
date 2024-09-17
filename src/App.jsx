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

  // Fetching fish data from the local JSON file
  useEffect(() => {
    fetch('public/fish_data.json')  // Fetching the JSON from the public folder
      .then((response) => response.json())
      .then((data) => setFishData(data))
      .catch((error) => console.error('Error fetching fish data:', error));
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Fish Catalog */}
        <Route path="/catalog" element={<FishCatalog fishData={fishData} />} />

        {/* Dynamic Fish Details Page */}
        <Route path="/fish/:id" element={<FishDetails fishData={fishData} />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Help Page */}
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;