const config = require('../config');
const constants = require('../constants');

/**
 * Helper for creating link for getting access_token and vk_id from vk by code
 * @param service {string}
 * @param options {Object}
 * @returns {string}
 */
function getAccessTokenUrl(service, options) {
    switch (service) {
        case(constants.OPEN_ID_SERVICES.VK):
            const {vk} = config;
            const {vkCode} = options;
            return `${vk.vkAccessTokenLink}?client_id=${vk.client_id}&client_secret=${vk.client_secret}&redirect_uri=${vk.redirectUrl}&code=${vkCode}`;
    }
};
module.exports = getAccessTokenUrl;