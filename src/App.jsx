import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import FishCatalog from './Components/FishCatalog';
import FishDetails from './Components/FishDetails';
import About from './Components/About';
import Help from './Components/Help';
import saltFishDataJson from './Components/salt_fish_data.json'; // Correctly importing the saltwater JSON data
import freshWaterDataJson from './Components/Fresh_water_data.json'; // Importing freshwater JSON data
import FreshCatalog from './Components/FreshCatalog'; // Import the FreshCatalog component

function App() {
  const [saltFishData, setSaltFishData] = useState([]);
  const [freshFishData, setFreshFishData] = useState([]);

  useEffect(() => {
    setSaltFishData(saltFishDataJson); // Set the saltwater data
    setFreshFishData(freshWaterDataJson); // Set the freshwater data
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<FishCatalog fishData={saltFishData} />} />
        <Route path="/fresh-catalog" element={<FreshCatalog fishData={freshFishData} />} /> {/* New route for FreshCatalog */}
        
        <Route path="/fish/:id" element={<FishDetails fishData={saltFishData} />} /> {/* Assuming FishDetails for saltwater */}
        <Route path="/fresh-fish/:id" element={<FishDetails fishData={freshFishData} />} /> {/* New route for freshwater fish details */}
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;