import http from "k6/http";
import { URL } from "https://jslib.k6.io/url/1.0.0/index.js";
import { urls, userInfo } from "./helpers.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
export default function() {
const url = new URL(urls[0].BASE_URL + "/login");
url.searchParams.append("method", "JWT");

const payload = JSON.stringify({
  company_id: userInfo[0].COMPANY_ID,
  username: userInfo[0].USERNAME,
  password: userInfo[0].PASSWORD,
  application_id: userInfo[0].APPLICATION_ID,
});

const params = {
  headers: {
    "Content-Type": "application/json",
  },
};

const loginResponse = http.post(url.toString(), payload, params);
const token = loginResponse.json().token;


const url1 = new URL(urls[0].BASE_URL + '/automation/v1/suppliers/facets');
url1.searchParams.append('limit', 100);


const params1 = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' + token
  },
};

const facetsResponse = http.get(url1.toString() , params1);
const facets = facetsResponse.json();
console.log(facets);
}