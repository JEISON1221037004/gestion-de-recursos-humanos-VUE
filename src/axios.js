import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Cambia esto a la URL de tu API Laravel
});

export default axiosInstance;
