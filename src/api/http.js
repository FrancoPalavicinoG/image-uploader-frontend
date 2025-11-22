import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 
           'https://image-uploader-backend-kysq.onrender.com/api',
});

export default http;