const constants = require('../constants');
const config = require('../config');

/**
 * Method for getting url for redirect to auth-service
 * @param service {string}
 * @returns {string}
 */
function getOpenIdRedirectLink(service) {
   switch (service) {
       case constants.OPEN_ID_SERVICES.VK:
           const {vk} = config;
           return `${vk.vkOAuthLink}?client_id=${vk.client_id}&redirect_uri=${vk.redirectUrl}&scope=friends&display=page`
   }
}

module.exports = getOpenIdRedirectLink;