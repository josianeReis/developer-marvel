import axios from 'axios';

const API = axios.create({
  baseURL: `https://gateway.marvel.com`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default API;

API.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (auth && auth.privateKey && auth.publicKey) {
    config.params = {
      apikey: auth.publicKey,
      ts: '1',
      hash: auth.hashValue
    };
  }
  return config;
});
