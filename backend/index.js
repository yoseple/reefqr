const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Use the PORT environment variable provided by Heroku, or default to 5000 locally
const port = process.env.PORT || 5000;

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

// Serve static files from the React app if needed (if you're combining frontend and backend)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// For any request that doesn't match the above, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});