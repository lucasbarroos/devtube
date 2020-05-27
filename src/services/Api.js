import axios from 'axios';
import { apiUrl } from '../config/consts';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
