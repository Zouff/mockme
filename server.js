'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
let mockData = fs.readFileSync('mock.json');

app.get('/', (req, res) => {
  res.json(JSON.parse(mockData))
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
