import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import FishCatalog from './Components/FishCatalog';
import FishDetails from './Components/FishDetails';
import About from './Components/About';
import Help from './Components/Help';
import fishDataJson from './Components/fish_data.json'; // Correctly importing the JSON data

function App() {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    setFishData(fishDataJson); // Properly setting the data, not a component
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