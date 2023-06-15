import http from 'k6/http';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import {urls} from './helpers.js'
import { token } from './login.js';
export default function () {
  const url = new URL(urls[0].BASE_URL + '/automation/v1/suppliers/facets');
  url.searchParams.append('limit', 100);


  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'JWT' + token
    },
  };

  const facetsResponse = http.get(url.toString() , params);
  const facets = facetsResponse.json();
  console.log(facets);
}