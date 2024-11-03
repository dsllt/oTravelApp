import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.xtsfA8XiFMqo9JyFNNONBiUJWyX7yV-Z7GFioMexH66Z2YTqd62skSmHBXDa',
  },
});
