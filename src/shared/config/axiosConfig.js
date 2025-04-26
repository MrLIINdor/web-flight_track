import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': '*',
    // 'Access-Control-Allow-Credentials': true,
  },
  paramsSerializer: {
    indexes: null,
  },
});
