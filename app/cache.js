const redis = require('redis');
const config = require('./config.js');
const client = redis.createClient(config.redis);
const {promisify} = require('util');

const set = promisify(client.set).bind(client);
const get = promisify(client.get).bind(client);
const expire = promisify(client.expire).bind(client);

module.exports = {
    async saveVkToken(vkId, token, expireTime){
        await set(vkId, token);
        await expire(vkId, expireTime);
        return true;
    },
    async getVkToken(vkId){
        return await get(vkId);
    }
};