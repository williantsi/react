import axios from 'axios';

const API_URL = 'http://localhost/api-simples/index.php'; // Replace with the actual movie API URL

const api = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export default api;