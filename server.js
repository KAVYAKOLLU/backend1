
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/posts');
    res.json(response.data.posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
