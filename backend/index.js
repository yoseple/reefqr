const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const path = require('path');

// Serve fish data
app.get('/api/fish', (req, res) => {
  const fishDataPath = path.join(__dirname, 'data', 'fish_data.json');
  fs.readFile(fishDataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading fish data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});