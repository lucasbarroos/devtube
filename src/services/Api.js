import axios from 'axios';
import { apiUrl } from '../config/consts';

const api = axios.create({
  apiUrl,
});

export default api;
