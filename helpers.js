import { SharedArray } from 'k6/data';

const urls = new SharedArray('baseUrl', function () {
  return JSON.parse(open('./data.json')).urls;
});

const userInfo = new SharedArray('userinfo', function () {
  return JSON.parse(open('./data.json')).user_info;
});
export { urls, userInfo}