const axios = require('axios');
const VkApiConstructor = require('../helpers/vkApiContstructor');
const config = require('../config');

module.exports = {
    async getFriends(vkId, vkAccessToken, count){
        const apiConstructor = new VkApiConstructor();
        const getFriendsUrl = apiConstructor.getUrl(config.vk.api.methods.friends, {
            user_id: vkId,
            access_token: vkAccessToken,
            count,
            fields:'nickname,sex,photo_100'
        })
        const friends = await axios.get(getFriendsUrl)
        return friends.data.response;
    }
}