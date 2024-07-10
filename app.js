const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.json({ message });
});

module.exports = app;
