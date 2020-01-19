const jwt = require('jsonwebtoken');
const config = require('../config');
const {promisify} = require('util');

const jwtSign = promisify(jwt.sign).bind(jwt);
const jwtVerify = promisify(jwt.verify).bind(jwt);

module.exports = {
    async sign(vkId, vkAccessToken){
        return await jwtSign({vkId, vkAccessToken}, config.jwtSecret);
    },
    async verify(token){
        return await jwtVerify(token, config.jwtSecret)
    },
};