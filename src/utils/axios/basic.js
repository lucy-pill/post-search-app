// Packages
import axios from 'axios';

const basic = axios.create({
  baseURL: `https://recruit-api.yonple.com`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

export default basic;