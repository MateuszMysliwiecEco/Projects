import http from 'k6/http';
const config = require('../config.js');

export default function () {
    
  const url = config.url + '/api/login?method=JWT';

  const payload = {
    application_id: config.application_id,
    company_id: config.company_id,
    username: config.username,
    password: config.password,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = http.post(url, JSON.stringify(payload), { headers: headers });

  if (response.status === 200) {

    const responseJSON = response.body;
    const loginStatus = JSON.parse(responseJSON).success;

    if (loginStatus){
        const token = response.json().token;
        console.log('Login successful!')
        console.log('JWT Token: ' + token)
        return token;

    } else {
        console.log("ERROR: Login was not successful, potentially wrong password?")
    }
  } else {
    console.error('ERROR: Login failed:', response.status);
  }
}
