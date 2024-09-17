import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import FishCatalog from './Components/FishCatalog';
import FishDetails from './Components/FishDetails'; 
import About from './Components/About';  // Import About component
import Help from './Components/Help';    // Import Help component

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