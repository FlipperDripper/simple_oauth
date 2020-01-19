const cache = require('../cache');
const config = require('../config');
const constants = require('../constants');
const axios = require('axios');
const getAccessTokenUrl = require('../helpers/getAccessTokenUrl');
const jwt = require('../helpers/jwtToken');

module.exports = {
    async authUserByVkCode(vkCode){
        try {
            const url = getAccessTokenUrl(constants.OPEN_ID_SERVICES.VK, {vkCode});
            const res = await axios.get(url);
            const data = res.data;
            await cache.saveVkToken(String(data.user_id), String(data.access_token), data.expires_in);
            const accessToken =  await jwt.sign(data.user_id, data.access_token);
            const expireDate = new Date(Date.now() + data.expires_in * 1000);
            return {accessToken, expires: expireDate};
        }catch(e){
            console.error(e);
            throw e;
        }
    },
};