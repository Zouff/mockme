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

fs.readdir(MOCKSDIRECTORY + '/get', (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/get/' + file);

    app.get('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

fs.readdir(MOCKSDIRECTORY + '/post', (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/post/' + file);

    app.post('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

fs.readdir(MOCKSDIRECTORY + '/delete', (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/delete/' + file);

    app.delete('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

fs.readdir(MOCKSDIRECTORY + '/put', (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/put/' + file);

    app.put('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

fs.readdir(MOCKSDIRECTORY + '/patch', (err, files) => {
  files.forEach(file => {
    let mockData = fs.readFileSync(MOCKSDIRECTORY + '/patch/' + file);

    app.patch('/' + path.parse(file).name, (req, res) => {
      res.json(JSON.parse(mockData))
    });
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
