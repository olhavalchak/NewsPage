import axios from 'axios';
import { root } from './config';

export const api = Object.freeze({
  getNews: async (key) => {
    let res;
    try {
      res = await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${key}`);
    } catch (err) {
      console.error(err.message);
    }
    return res.data;
  },
  getSpecificNews: async (key, keyword) => {
    let res;
    try {
      res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`);
    } catch (err) {
      console.error(err.message);
    }
    return res.data;
  },
});