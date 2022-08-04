require('dotenv/config');

const cors = require('cors');
const axios = require('axios');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const { api } = req.query;
  const { data } = await axios.get(api);

  console.log(data);
  return res.json(data);
});

module.exports = app;
