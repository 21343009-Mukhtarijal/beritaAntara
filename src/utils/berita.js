
const axios = require('axios');

const fetchNews = async (category) => {
  const apiUrl = `https://api-berita-indonesia.vercel.app/antara/${category}/`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.data.posts;
  } catch (error) {
    console.error(`Error fetching data kategori ${category}: ${error.message}`);
    throw new Error(`Error fetching berita dari kategori ${category}`);
  }
};

module.exports = fetchNews;
