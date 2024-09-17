import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FishCatalog from './Components/FishCatalog';
import FishDetails from './Components/FishDetails';

function App() {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/fish')
      .then((response) => response.json())
      .then((data) => setFishData(data))
      .catch((error) => console.error('Error fetching fish data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route for the Fish Catalog */}
        <Route path="/" element={<FishCatalog fishData={fishData} />} />

        {/* Dynamic Route for Fish Details */}
        <Route path="/fish/:id" element={<FishDetails fishData={fishData} />} />
      </Routes>
    </Router>
  );
}

export default App;