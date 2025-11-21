import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.API_BASE || 'https://image-uploader-backend-nine.vercel.app/api',
});

export default http;