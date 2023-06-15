import http from 'k6/http';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
const config = require('../config.js');

export default function (token) {
    
  const url = new URL(config.url + '/api/automation/v1/sds/requests');

  url.searchParams.append('limit', 1);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' + token
}

  const response = http.get(url.toString(), { headers: headers });
  console.log(response.body)
}
