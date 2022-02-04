'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const MOCKSDIRECTORY = 'mocks';

// App
const app = express();
app.use(express.json());

fs.readdir(MOCKSDIRECTORY, (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/' + file);

    app.get('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
