import login from "./tests/login.js";
import suppliers from "./tests/suppliers.js";
import sdsRequest from "./tests/sdsRequest.js";

const config = require('./config.js');

export default function() {

    console.log('Eco Plus performance testing, version: ' + config.version)

    const JWTToken = login();

    suppliers(JWTToken);
    sdsRequest(JWTToken);
};