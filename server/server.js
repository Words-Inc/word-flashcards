const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'client/index.html'));
});

module.exports = app;