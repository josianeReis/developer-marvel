import axios from 'axios';

const API = axios.create({
  baseURL: `https://gateway.marvel.com`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default API;
